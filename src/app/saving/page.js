"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { Search, Copy, X, ChevronDown, Loader2 } from "lucide-react";

export default function Page() {
	const [showCreateModal, setShowCreateModal] = useState(false);
	const [vaults, setVaults] = useState([]);
	const [loading, setLoading] = useState(true);
	const [selectedVault, setSelectedVault] = useState(null);
	const [depositAmount, setDepositAmount] = useState("");

	// Fetch vaults data (Mock Data for now)
	const fetchVaults = useCallback(async () => {
		setLoading(true);
		try {
			setVaults([
				{
					id: "vault1",
					name: "Prize DAI",
					apy: 11.67,
					tvl: 50.01,
					balance: 0,
					token: "DAI",
				},
				{
					id: "vault2",
					name: "Prize USDC",
					apy: 14.03,
					tvl: 75.32,
					balance: 0,
					token: "USDC",
				},
			]);
		} catch (error) {
			console.error("Error fetching vaults:", error.message || "Unknown error");
		} finally {
			setLoading(false);
		}
	}, []);

	useEffect(() => {
		fetchVaults();
	}, [fetchVaults]);

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
					</div>
				</div>
			</nav>

			{/* Main Content */}
			<main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
				<div className="text-center mb-12">
					<h1 className="text-4xl md:text-5xl font-bold text-white mb-8">
						Prize Vaults
					</h1>
				</div>

				{/* Vault Selection Area */}
				<div className="bg-[#232429]/50 rounded-2xl p-6">
					<div className="mb-6">
						<h2 className="text-xl text-white mb-4">Select a Vault</h2>
						<div className="relative w-full md:w-auto">
							<Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
							<input
								type="text"
								placeholder="Search Vault"
								className="w-full md:w-[300px] pl-10 pr-4 py-2 rounded-lg bg-[#232429] text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-[#02c0ff]/50 transition-all"
							/>
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
									</tr>
								</thead>
								<tbody>
									{vaults.map((vault) => (
										<tr key={vault.id} className="border-b border-white/10">
											<td className="py-4">
												<div className="flex items-center space-x-3">
													<div>
														<div className="text-white font-medium">
															{vault.name}
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
										</tr>
									))}
								</tbody>
							</table>
						)}
					</div>
				</div>
			</main>
		</div>
	);
}
