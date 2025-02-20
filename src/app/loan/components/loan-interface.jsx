"use client"

import React from "react"
import { FaChevronDown, FaBitcoin, FaEthereum } from "react-icons/fa"
import { SiSolana } from "react-icons/si"

const CHAINS = [
	{ id: "sui", name: "Sui", symbol: "SUI", icon: SuiIcon, color: "bg-[#6FBCF0]" },
	{ id: "btc", name: "Bitcoin", symbol: "BTC", icon: FaBitcoin, color: "bg-[#F7931A]" },
	{ id: "eth", name: "Ethereum", symbol: "ETH", icon: FaEthereum, color: "bg-[#627EEA]" },
	{ id: "sol", name: "Solana", symbol: "SOL", icon: SiSolana, color: "bg-[#9945FF]" },
]

const CURRENCY_OPTIONS = [
	{ value: "NGN", label: "💷 NGN (Nigerian Naira)" },
	{ value: "USD", label: "💵 USD (United States Dollar)" },
	{ value: "EUR", label: "💶 EUR (Euro)" },
	{ value: "GBP", label: "💷 GBP (British Pound)" },
	{ value: "JPY", label: "💴 JPY (Japanese Yen)" },
	{ value: "CNY", label: "💴 CNY (Chinese Yuan)" },
	{ value: "CAD", label: "💵 CAD (Canadian Dollar)" },
	{ value: "AUD", label: "💵 AUD (Australian Dollar)" },
	{ value: "ZAR", label: "💵 ZAR (South African Rand)" },
	{ value: "INR", label: "💵 INR (Indian Rupee)" },
]

// Sui icon remains custom
function SuiIcon(props) {
	return (
		<svg viewBox="0 0 24 24" className="h-4 w-4" {...props}>
			<path d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12z" fill="#6FBCF0" />
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M7.373 4.877a.374.374 0 01.374-.374h7.954c.207 0 .374.168.374.374v2.374a.374.374 0 01-.374.374H7.747a.374.374 0 01-.374-.374V4.877zm0 4.123a.374.374 0 01.374-.374h7.954c.207 0 .374.168.374.374v2.374a.374.374 0 01-.374.374H7.747a.374.374 0 01-.374-.374V9zm0 4.123a.374.374 0 01.374-.374h7.954c.207 0 .374.168.374.374v2.374a.374.374 0 01-.374.374H7.747a.374.374 0 01-.374-.374V13.123z"
				fill="#fff"
			/>
		</svg>
	)
}

export default function LoanInterface() {
	const [loanAmount, setLoanAmount] = React.useState("100")
	const [collateralAmount, setCollateralAmount] = React.useState("0.008299")
	const [selectedChain, setSelectedChain] = React.useState(CHAINS[0])
	const [ltvValue, setLtvValue] = React.useState([50])
	const [loanTerm, setLoanTerm] = React.useState("1")
	const [excessCollateral, setExcessCollateral] = React.useState(false)
	const [autoMargin, setAutoMargin] = React.useState(false)
	const [isQuickLoan, setIsQuickLoan] = React.useState(false)
	const [selectedCurrency, setSelectedCurrency] = React.useState("USD")
	const [walletAddress, setWalletAddress] = React.useState("")

	// Calculate total repayment
	const interestRate = 8
	const loanExchangeRate = 24108.95
	const totalInterest = (parseFloat(loanAmount) * interestRate) / 100
	const monthlyPayment = parseFloat(loanAmount) + totalInterest

	// Dummy functions to simulate collateral collection and fund transfer
	const transferFunds = () => {
		if (!walletAddress) {
			alert("Please enter your wallet address")
			return;
		}
		alert(`Funds of ${loanAmount} ${selectedCurrency} will be transferred to ${walletAddress}`)
	}

	const collectCollateral = () => {
		if (!walletAddress) {
			alert("Please enter your wallet address")
			return;
		}
		alert(`Collateral of ${collateralAmount} ${selectedChain.symbol} collected to ${walletAddress}`)
	}

	return (
			<div className="min-h-screen bg-gradient-to-r from-[#000c24] to-[#001e4d] text-white p-6 ">
				<div className="max-w-6xl mx-auto">
					<div className="flex gap-2 mb-8">
						<button
							type="button"
							className={`rounded-full px-6 py-2 border transition-colors duration-200 ${
								!isQuickLoan
									? "bg-purple text-white shadow-md"
									: "bg-gray-800 text-white"
							}`}
							onClick={() => setIsQuickLoan(false)}
						>
							Flexible Loan
						</button>
						<button
							type="button"
							className={`rounded-full px-6 py-2 border transition-colors duration-200 ${
								isQuickLoan
									? "bg-purple text-white shadow-md"
									: "bg-gray-800 text-white"
							}`}
							onClick={() => setIsQuickLoan(true)}
						>
							Quick Loan
						</button>
					</div>

					<div className="grid md:grid-cols-2 gap-8">
						<div className="space-y-6">
							{isQuickLoan ? (
								<>
									<div>
										<label className="text-sm font-medium mb-2 block">
											I Need A Loan in
										</label>
										<div className="bg-gray-800 rounded-xl p-4 flex items-center justify-between mb-6 cursor-pointer shadow-sm">
											<select
												className="bg-transparent bg-gray-800 text-lg w-full focus:outline-none"
												onChange={(e) => setLoanAmount(e.target.value)}
											>
												{CURRENCY_OPTIONS.map((option) => (
													<option key={option.value} value={option.value}>
														{option.label}
													</option>
												))}
											</select>
											<FaChevronDown className="text-gray-400" />
										</div>
										<div className="grid grid-cols-2 gap-4">
											{["50 $", "100 $", "250 $", "500 $"].map((amount) => (
												<button
													key={amount}
													onClick={() =>
														setLoanAmount(amount.replace(" $", ""))
													}
													className={`bg-gray-800 rounded-xl p-6 text-left hover:bg-gray-700 transition-colors ${
														loanAmount === amount.replace(" $", "")
															? "ring-2 ring-purple"
															: ""
													}`}
												>
													<span className="text-xl font-semibold">
														{amount}
													</span>
												</button>
											))}
										</div>
									</div>
								</>
							) : (
								<>
									<div className="space-y-4">
										<label className="text-sm font-medium">Loan</label>
										<div className="bg-gray-800 rounded-xl p-4 flex items-center justify-between shadow-sm">
											<input
												type="number"
												value={loanAmount}
												onChange={(e) => setLoanAmount(e.target.value)}
												className="w-32 bg-transparent border-none text-2xl font-medium focus:outline-none"
											/>
											<select
												value={selectedCurrency}
												onChange={(e) => setSelectedCurrency(e.target.value)}
												className="bg-transparent bg-gray-800 text-lg focus:outline-none"
											>
												{CURRENCY_OPTIONS.map((option) => (
													<option key={option.value} value={option.value}>
														{option.label}
													</option>
												))}
											</select>
										</div>
									</div>

									<div className="space-y-4">
										<label className="text-sm font-medium">Collateral</label>
										<div className="bg-gray-800 rounded-xl p-4 space-y-4 shadow-sm">
											<div className="flex items-center justify-between">
												<input
													type="number"
													value={collateralAmount}
													onChange={(e) => setCollateralAmount(e.target.value)}
													className="w-32 bg-transparent border-none text-2xl font-medium focus:outline-none"
												/>
												<select
													value={selectedChain.id}
													onChange={(e) =>
														setSelectedChain(
															CHAINS.find(
																(chain) => chain.id === e.target.value
															) || CHAINS[0]
														)
													}
													className="w-36 bg-gray-700 text-white p-2 rounded focus:outline-none"
												>
													{CHAINS.map((chain) => (
														<option key={chain.id} value={chain.id}>
															{chain.symbol}
														</option>
													))}
												</select>
											</div>
											<div className="text-sm text-gray-400">
												Current value: $
												{(
													parseFloat(collateralAmount) * loanExchangeRate
												).toFixed(2)}
											</div>
										</div>
									</div>
									{/* Wallet Address Input */}
									<div className="space-y-4 mt-8">
										<label className="text-sm font-medium">
											Wallet Address
										</label>
										<input
											type="text"
											placeholder="Enter your wallet address"
											value={walletAddress}
											onChange={(e) => setWalletAddress(e.target.value)}
											className="bg-gray-800 rounded-xl p-4 border-none focus:outline-none w-full"
										/>
									</div>
									<div className="grid grid-cols-2 gap-4">
										<div className="space-y-4">
											<label className="text-sm font-medium">
												Loan-To-Value (LTV)
											</label>
											<div className="bg-gray-800 rounded-xl p-4 shadow-sm">
												<div className="text-2xl font-medium mb-4">
													{ltvValue[0]}%
												</div>
												<div className="relative">
													<div className="absolute inset-0 bg-gradient-to-r from-yellow-500/20 to-transparent h-1 rounded-full" />
													<input
														type="range"
														value={ltvValue[0]}
														onChange={(e) =>
															setLtvValue([Number(e.target.value)])
														}
														min="0"
														max="100"
														step="1"
														className="my-4 w-full"
													/>
												</div>
											</div>
										</div>

										<div className="space-y-4">
											<label className="text-sm font-medium">Loan Term</label>
											<div className="bg-gray-800 rounded-xl p-4 shadow-sm">
												<select
													value={loanTerm}
													onChange={(e) => setLoanTerm(e.target.value)}
													className="w-full bg-transparent bg-gray-800 text-2xl font-medium p-0 mb-4 focus:outline-none"
												>
													<option value="" disabled>
														Select term
													</option>
													{[1, 3, 6, 12].map((months) => (
														<option key={months} value={months.toString()}>
															{months} Month(s)
														</option>
													))}
												</select>
												<div className="relative">
													<div className="absolute inset-0 bg-gradient-to-r from-yellow-500/20 to-transparent h-1 rounded-full" />
													<input
														type="range"
														min="8.33"
														max="100"
														step="1"
														value={Number(loanTerm) * 8.33}
														onChange={(e) =>
															setLoanTerm(
																Math.max(
																	1,
																	Math.round(e.target.value / 8.33)
																).toString()
															)
														}
														className="my-4 w-full"
													/>
												</div>
											</div>
										</div>
									</div>

									<div className="space-y-3">
										<div className="bg-gray-800 rounded-xl p-4 flex items-center justify-between shadow-sm">
											<div className="flex items-center gap-3">
												<div className="w-8 h-8 rounded-full bg-yellow-500/10 flex items-center justify-center">
													<div className="w-5 h-5 rounded-full border-2 border-purple" />
												</div>
												<span className="text-sm">
													Excess Collateral Release
												</span>
											</div>
											<input
												type="checkbox"
												checked={excessCollateral}
												onChange={(e) => setExcessCollateral(e.target.checked)}
											/>
										</div>
										<div className="bg-gray-800 rounded-xl p-4 flex items-center justify-between shadow-sm">
											<div className="flex items-center gap-3">
												<div className="w-8 h-8 rounded-full bg-yellow-500/10 flex items-center justify-center">
													<div className="w-5 h-5 rounded-full border-2 border-purple" />
												</div>
												<span className="text-sm">
													Automatic Margin Call Management
												</span>
											</div>
											<input
												type="checkbox"
												checked={autoMargin}
												onChange={(e) => setAutoMargin(e.target.checked)}
											/>
										</div>
									</div>
								</>
							)}
						</div>

						{/* Receipt Section */}
						<div className="bg-gray-800 rounded-xl p-6 shadow-lg">
							<div className="flex items-center justify-between mb-8">
								<h2 className="text-xl font-medium">Total Loan Repayment</h2>
								<div className="flex items-center gap-2">
									<span className="w-4 h-4 rounded-full bg-blue-500" />
									<span className="text-xl font-medium">
										{selectedCurrency}
										{monthlyPayment.toFixed(2)}
									</span>
								</div>
							</div>
							<div className="space-y-4 mb-8">
								{[
									{ label: "Interest Rate", value: `${interestRate}%` },
									{ label: "Loan-To-Value", value: `${ltvValue[0]}%` },
									{ label: "Loan Term", value: `${loanTerm} month` },
									{
										label: "Collateral Amount & Type",
										value: `${collateralAmount} ${selectedChain.symbol}`,
									},
									{
										label: "Loan Exchange Rate",
										value: `${loanExchangeRate.toFixed(2)} $`,
									},
									{ label: "Loan Origination Fee", value: "0%" },
									{
										label: "Early Repayment Option",
										value: "2.5% within the first month",
									},
									{
										label: "Loan Amount",
										value: `${loanAmount} ${selectedCurrency}`,
									},
									{
										label: "Total cost of loan (interest)",
										value: `${totalInterest.toFixed(2)} $`,
									},
									{
										label: "Monthly Payment",
										value: `${monthlyPayment.toFixed(2)} $`,
									},
								].map((item, index) => (
									<div key={index} className="flex justify-between text-sm">
										<span className="text-gray-400">{item.label}</span>
										<span className="font-medium">{item.value}</span>
									</div>
								))}
							</div>
							<div className="flex gap-3">
								<button
									type="button"
									className="flex-1 border border-white hover:bg-yellow-500/10 text-blue rounded py-2 transition-colors"
								>
									Zero Risk Loans
								</button>
								<button
									type="button"
									className="flex-1 bg-purple hover:bg-blue text-white rounded py-2 transition-colors"
								>
									Get A Loan
								</button>
							</div>
							<div className="flex gap-3 mt-4">
								<button
									type="button"
									onClick={transferFunds}
									className="flex-1 border border-white hover:bg-yellow-500/10 text-blue rounded py-2 transition-colors"
								>
									Transfer Funds
								</button>
								<button
									type="button"
									onClick={collectCollateral}
									className="flex-1 bg-purple hover:bg-blue text-white rounded py-2 transition-colors"
								>
									Collect Collateral
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
}
