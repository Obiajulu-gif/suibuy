"use client"

import { useState, useEffect } from "react"
import Image from "next/image";
import { Search, Copy, X, ChevronDown, Loader2 } from "lucide-react"
import { ConnectButton, useWalletKit } from "@mysten/wallet-kit"
import { TransactionBlock } from "@mysten/sui.js/transactions"
import { SuiClient } from "@mysten/sui.js/client"

// Initialize Sui client (mainnet)
const suiClient = new SuiClient({ url: "https://fullnode.mainnet.sui.io:443" })

// Mock package ID - replace with your actual deployed package ID
const PACKAGE_ID = "0x..."

export default function Page() {
  const [showModal, setShowModal] = useState(false)
  const [showCreateModal, setShowCreateModal] = useState(false)
  const [vaults, setVaults] = useState([])
  const [loading, setLoading] = useState(true)
  const [selectedVault, setSelectedVault] = useState(null)
  const [depositAmount, setDepositAmount] = useState("")

  const { currentAccount, signAndExecuteTransactionBlock } = useWalletKit()

  // Fetch vaults data
  useEffect(() => {
    fetchVaults()
  }, [])

  const fetchVaults = async () => {
    try {
      setLoading(true)
      // Fetch objects owned by the package with pagination
      const response = await suiClient.getOwnedObjects({
        owner: PACKAGE_ID,
        options: { showContent: true },
        limit: 50, // Adjust based on your needs
      })

      if (!response?.data) {
        console.error("No data received from Sui client")
        // Set default vaults for development/testing
        setVaults([
          {
            id: "vault1",
            name: "Prize DAI",
            apy: 11.67,
            tvl: 50.01,
            balance: currentAccount ? 0 : 0,
            token: "DAI",
          },
          {
            id: "vault2",
            name: "Prize USDC",
            apy: 14.03,
            tvl: 75.32,
            balance: currentAccount ? 0 : 0,
            token: "USDC",
          },
        ])
        return
      }

      // Transform and set vault data
      const vaultData = response.data
        .filter((obj) => obj.data && obj.data.objectId) // Filter out invalid objects
        .map((obj) => {
          const fields = obj.data.content?.fields || {}
          return {
            id: obj.data.objectId,
            name: fields.name || "Prize DAI",
            apy: Number(fields.apy || 11.67),
            tvl: Number(fields.tvl || 50.01),
            balance: currentAccount ? Number(fields.balance || 0) : 0,
            token: fields.token || "DAI",
          }
        })

      setVaults(vaultData)
    } catch (error) {
      console.error("Error fetching vaults:", error.message || "Unknown error")
      // Set default vaults as fallback
      setVaults([
        {
          id: "vault1",
          name: "Prize DAI",
          apy: 11.67,
          tvl: 50.01,
          balance: currentAccount ? 0 : 0,
          token: "DAI",
        },
      ])
    } finally {
      setLoading(false)
    }
  }

  const handleCreateVault = async (name, token) => {
    if (!currentAccount) return

    try {
      const tx = new TransactionBlock()

      // Call your smart contract's create vault function
      tx.moveCall({
        target: `${PACKAGE_ID}::vault::create_vault`,
        arguments: [tx.pure(name), tx.pure(token)],
      })

      await signAndExecuteTransactionBlock({
        transactionBlock: tx,
      })

      // Refresh vaults after creation
      await fetchVaults()
      setShowCreateModal(false)
    } catch (error) {
      console.error("Error creating vault:", error)
    }
  }

  const handleDeposit = async (vaultId, amount) => {
    if (!currentAccount || !amount) return

    try {
      const tx = new TransactionBlock()

      // Call your smart contract's deposit function
      tx.moveCall({
        target: `${PACKAGE_ID}::vault::deposit`,
        arguments: [
          tx.object(vaultId),
          tx.pure(Number.parseFloat(amount) * 1e9), // Convert to proper decimals
        ],
      })

      await signAndExecuteTransactionBlock({
        transactionBlock: tx,
      })

      // Refresh vaults after deposit
      await fetchVaults()
      setShowModal(false)
    } catch (error) {
      console.error("Error depositing:", error)
    }
  }

  return (
		<div className="min-h-screen bg-[#020a1d]">
			{/* Navigation */}
			<nav className="border-b border-white/10">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="flex items-center justify-between h-16">
						<div className="text-white text-xl font-bold">LOGO</div>
						<div className="hidden md:flex items-center space-x-8">
							<a href="#" className="text-white hover:text-white/80">
								Prizes
							</a>
							<a href="#" className="text-[#02c0ff] hover:text-[#02c0ff]/80">
								Vault
							</a>
							<a href="#" className="text-white hover:text-white/80">
								Account
							</a>
						</div>
						<div className="flex items-center space-x-4">
							<ConnectButton className="flex items-center px-4 py-2 rounded-lg bg-[#232429] text-white hover:bg-[#232429]/80 transition-colors" />
						</div>
					</div>
				</div>
			</nav>

			{/* Main Content */}
			<main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
				<div className="text-center mb-12">
					<h1 className="text-4xl md:text-5xl font-bold text-white mb-8">
						SUIBUY Prize Vaults
					</h1>
					<button
						onClick={() => setShowCreateModal(true)}
						className="px-6 py-2 rounded-lg bg-[#02c0ff] hover:bg-[#02c0ff]/90 text-white transition-colors"
					>
						Create a Vault
					</button>
				</div>

				{/* Vault Selection Area */}
				<div className="bg-[#232429]/50 rounded-2xl p-6">
					<div className="mb-6">
						<h2 className="text-xl text-white mb-4">Select a Vault</h2>
						<div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
							<div className="flex items-center space-x-2">
								<button className="px-4 py-2 rounded-lg bg-[#232429] text-white hover:bg-[#232429]/80 transition-colors">
									View All
								</button>
								<button className="p-2 rounded-lg bg-[#232429] text-white hover:bg-[#232429]/80 transition-colors">
									<Image
										src="/images/suiicon.png"
										alt=""
										width={32}
										height={32}
										className="w-8 h-8"
									/>
								</button>
							</div>
							<div className="relative w-full md:w-auto">
								<Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
								<input
									type="text"
									placeholder="Search Vault"
									className="w-full md:w-[300px] pl-10 pr-4 py-2 rounded-lg bg-[#232429] text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-[#02c0ff]/50 transition-all"
								/>
							</div>
						</div>
					</div>

					{/* Vault Table */}
					<div className="overflow-x-auto">
						{loading ? (
							<div className="flex items-center justify-center py-8">
								<Loader2 className="h-8 w-8 animate-spin text-[#02c0ff]" />
							</div>
						) : (
							<table className="w-full">
								<thead>
									<tr className="text-left text-gray-400 border-b border-white/10">
										<th className="pb-4">Vault</th>
										<th className="pb-4">↑ APY</th>
										<th className="pb-4">↑ TVL</th>
										<th className="pb-4">↑ Balance</th>
										<th className="pb-4">Manage</th>
									</tr>
								</thead>
								<tbody>
									{vaults.map((vault) => (
										<tr key={vault.id} className="border-b border-white/10">
											<td className="py-4">
												<div className="flex items-center space-x-3">
													<Image
														src="/images/suiicon.png"
														alt=""
														width={32}
														height={32}
														className="w-8 h-8"
													/>
													<div>
														<div className="text-white font-medium">
															{vault.name}
														</div>
														<div className="text-gray-400 text-sm">
															Sui Network
														</div>
													</div>
													<Copy
														onClick={() =>
															navigator.clipboard.writeText(vault.id)
														}
														className="h-4 w-4 text-gray-400 cursor-pointer hover:text-gray-300"
													/>
												</div>
											</td>
											<td className="py-4">
												<span className="text-white">{vault.apy}%</span>
											</td>
											<td className="py-4">
												<span className="text-white">{vault.tvl}</span>
											</td>
											<td className="py-4">
												<div>
													<div className="text-white">
														${vault.balance.toFixed(2)}
													</div>
													<div className="text-gray-400 text-sm">
														{vault.balance.toFixed(2)} {vault.token}
													</div>
												</div>
											</td>
											<td className="py-4">
												<button
													onClick={() => {
														setSelectedVault(vault);
														setShowModal(true);
													}}
													className="px-4 py-2 rounded-lg bg-[#02c0ff] hover:bg-[#02c0ff]/90 text-white transition-colors"
												>
													Deposit to Win
												</button>
											</td>
										</tr>
									))}
								</tbody>
							</table>
						)}
					</div>
				</div>
			</main>

			{/* Deposit Modal */}
			{showModal && selectedVault && (
				<div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4">
					<div className="bg-[#0d1421] rounded-2xl w-full max-w-md p-6">
						<div className="flex items-center justify-between mb-6">
							<h3 className="text-xl text-white font-medium">Deposit</h3>
							<button
								onClick={() => setShowModal(false)}
								className="text-gray-400 hover:text-white transition-colors"
							>
								<X className="h-5 w-5" />
							</button>
						</div>

						<div className="mb-6">
							<div className="text-white text-2xl mb-4">
								APY: {selectedVault.apy}%
							</div>

							<button className="w-full flex items-center justify-between bg-[#232429] rounded-lg p-3 text-white mb-4">
								<div className="flex items-center space-x-3">
									<Image
										src="/images/suiicon.png"
										alt=""
										width={32}
										height={32}
										className="w-8 h-8"
									/>
									<div>
										<div className="font-medium">{selectedVault.name}</div>
										<div className="text-sm text-gray-400">Sui Network</div>
									</div>
								</div>
								<ChevronDown className="h-5 w-5 text-gray-400" />
							</button>

							<div className="relative">
								<input
									type="text"
									placeholder="0.00"
									value={depositAmount}
									onChange={(e) => setDepositAmount(e.target.value)}
									className="w-full bg-[#232429] rounded-lg p-3 pr-16 text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-[#02c0ff]/50"
								/>
								<button
									onClick={() =>
										setDepositAmount(selectedVault.balance.toString())
									}
									className="absolute right-3 top-1/2 -translate-y-1/2 px-2 py-1 text-sm text-[#02c0ff] hover:text-[#02c0ff]/80"
								>
									Max
								</button>
							</div>
							<div className="text-sm text-gray-400 mt-2">
								Available: {selectedVault.balance} {selectedVault.token}
							</div>
						</div>

						<button
							onClick={() => handleDeposit(selectedVault.id, depositAmount)}
							disabled={!currentAccount}
							className="w-full py-3 rounded-lg bg-[#02c0ff] hover:bg-[#02c0ff]/90 text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
						>
							{currentAccount ? "Deposit" : "Connect Wallet"}
						</button>
					</div>
				</div>
			)}

			{/* Create Vault Modal */}
			{showCreateModal && (
				<div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4">
					<div className="bg-[#0d1421] rounded-2xl w-full max-w-md p-6">
						<div className="flex items-center justify-between mb-6">
							<h3 className="text-xl text-white font-medium">
								Create New Vault
							</h3>
							<button
								onClick={() => setShowCreateModal(false)}
								className="text-gray-400 hover:text-white transition-colors"
							>
								<X className="h-5 w-5" />
							</button>
						</div>

						<div className="space-y-4 mb-6">
							<div>
								<label className="block text-sm font-medium text-gray-400 mb-1">
									Vault Name
								</label>
								<input
									type="text"
									placeholder="Enter vault name"
									className="w-full bg-[#232429] rounded-lg p-3 text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-[#02c0ff]/50"
								/>
							</div>

							<div>
								<label className="block text-sm font-medium text-gray-400 mb-1">
									Token
								</label>
								<select className="w-full bg-[#232429] rounded-lg p-3 text-white outline-none focus:ring-2 focus:ring-[#02c0ff]/50">
									<option value="DAI">DAI</option>
									<option value="USDC">USDC</option>
									<option value="USDT">USDT</option>
								</select>
							</div>
						</div>

						<button
							onClick={() => handleCreateVault("New Prize Vault", "DAI")}
							disabled={!currentAccount}
							className="w-full py-3 rounded-lg bg-[#02c0ff] hover:bg-[#02c0ff]/90 text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
						>
							{currentAccount ? "Create Vault" : "Connect Wallet"}
						</button>
					</div>
				</div>
			)}
		</div>
	);
}

