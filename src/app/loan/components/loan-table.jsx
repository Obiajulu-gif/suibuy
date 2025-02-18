"use client";

import React, { useState } from "react";
import { FaSearch, FaInfoCircle, FaMoneyCheckAlt } from "react-icons/fa";

export default function LoanTable() {
    // Loan data (Mocked)
    const [loans, setLoans] = useState([
        {
            id: "#166",
            type: "Flexible loan",
            status: "green",
            amount: 218.5,
            collateral: "1 BTC",
            value: 26938.14,
            date: "03/28/24",
            ltv: "50%",
            term: "12 month",
        },
        {
            id: "#2289",
            type: "Quick loan",
            status: "yellow",
            amount: 25829.16,
            collateral: "1 BTC",
            value: 26938.14,
            date: "02/12/24",
            ltv: "20%",
            term: "3 month",
        },
        {
            id: "#3967",
            type: "Quick loan",
            status: "green",
            amount: 52.55,
            collateral: "1 BTC",
            value: 26938.14,
            date: "01/24/24",
            ltv: "10%",
            term: "4 month",
        },
        {
            id: "#4298",
            type: "Flexible loan",
            status: "red",
            amount: 5.14,
            collateral: "1 BTC",
            value: 26938.14,
            date: "04/28/24",
            ltv: "40%",
            term: "1 month",
        },
        {
            id: "#5672",
            type: "Quick loan",
            status: "yellow",
            amount: 0.65,
            collateral: "1 BTC",
            value: 26938.14,
            date: "07/23/24",
            ltv: "30%",
            term: "8 month",
        },
    ]);

    // Calculate totals
    const totalRemaining = loans
        .reduce((sum, loan) => sum + loan.amount, 0)
        .toFixed(2);
    const totalCollateral = loans
        .reduce((sum, loan) => sum + loan.value, 0)
        .toFixed(2);

    // Search state
    const [search, setSearch] = useState("");

    // Filter loans based on search
    const filteredLoans = loans.filter(
        (loan) =>
            loan.id.includes(search) ||
            loan.type.toLowerCase().includes(search.toLowerCase())
    );

    return (
			<div className="bg-gradient-to-r from-[#000c24] to-[#001e4d] min-h-screen py-8">
				<div className="max-w-6xl mx-auto bg-gray-900 shadow-lg rounded-lg overflow-hidden">
					<div className="p-6 border-b border-gray-200 flex flex-col md:flex-row md:justify-between md:items-center">
						<h2 className="text-2xl font-bold text-white mb-4 md:mb-0">
							Your Loans
						</h2>
						<div className="relative w-full md:w-1/3">
							<input
								type="text"
								placeholder="Search loan by name or id"
								className="w-full bg-gray-50 text-gray-800 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 pl-10 border border-gray-300"
								value={search}
								onChange={(e) => setSearch(e.target.value)}
							/>
							<FaSearch className="absolute left-3 top-3 text-gray-400" />
						</div>
					</div>
					<div className="overflow-x-auto ">
						<table className="min-w-full divide-y divide-gray-800">
							<thead className="bg-gray-800">
								<tr>
									<th className="px-6 py-3 text-left text-xs font-medium text-gray-100 uppercase tracking-wider">
										Loan #
									</th>
									<th className="px-6 py-3 text-left text-xs font-medium text-gray-100 uppercase tracking-wider">
										Status
									</th>
									<th className="px-6 py-3 text-left text-xs font-medium text-gray-100 uppercase tracking-wider">
										Remain Loan
									</th>
									<th className="px-6 py-3 text-left text-xs font-medium text-gray-100 uppercase tracking-wider">
										Collateral
									</th>
									<th className="px-6 py-3 text-left text-xs font-medium text-gray-100 uppercase tracking-wider">
										Maturity Date
									</th>
									<th className="px-6 py-3 text-left text-xs font-medium text-gray-100 uppercase tracking-wider">
										LTV
									</th>
									<th className="px-6 py-3 text-left text-xs font-medium text-gray-100 uppercase tracking-wider">
										Term
									</th>
									<th className="px-6 py-3 text-right text-xs font-medium text-gray-100 uppercase tracking-wider">
										Actions
									</th>
								</tr>
							</thead>
							<tbody className="bg-gray-700 divide-y divide-gray-200">
								{filteredLoans.map((loan, index) => (
									<tr key={index} className="hover:bg-gray-900">
										<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-200">
											{loan.type} {loan.id}
										</td>
										<td className="px-6 py-4 whitespace-nowrap">
											<span
												className={`inline-block w-3 h-3 rounded-full ${
													loan.status === "green"
														? "bg-green-500"
														: loan.status === "yellow"
														? "bg-yellow-500"
														: "bg-red-500"
												}`}
											></span>
										</td>
										<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-200">
											€ {loan.amount.toLocaleString()}
										</td>
										<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-200">
											{loan.collateral} / € {loan.value.toLocaleString()}
										</td>
										<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-200">
											{loan.date}
										</td>
										<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-200">
											{loan.ltv}
										</td>
										<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-200">
											{loan.term}
										</td>
										<td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium space-x-2">
											<button className="flex items-center px-3 py-1 border border-blue-500 text-blue-500 rounded-lg hover:bg-blue-500 hover:text-white transition">
												<FaInfoCircle className="mr-1" /> Details
											</button>
											<button className="flex items-center px-3 py-1 border border-green-500 text-green-500 rounded-lg hover:bg-green-500 hover:text-white transition">
												<FaMoneyCheckAlt className="mr-1" /> Repay
											</button>
										</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
					<div className="p-6 bg-gray-50 flex justify-between items-center">
						<div className="text-lg text-gray-800">
							Total remaining:{" "}
							<span className="font-bold text-blue-500">
								{totalRemaining} EUR
							</span>
						</div>
						<div className="text-lg text-gray-800">
							Total collateral:{" "}
							<span className="font-bold text-blue-500">
								{totalCollateral} EUR
							</span>
						</div>
					</div>
				</div>
			</div>
		);
}
