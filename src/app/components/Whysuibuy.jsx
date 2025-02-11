"use client";
import Image from "next/image";
import { FaStore, FaLock, FaUsers, FaCoins } from "react-icons/fa";

const WhySuibuy = () => {
	return (
		<section className="py-16 px-6 md:px-16">
			{/* Title */}
			<div className="text-center mb-12">
				<h2 className="text-4xl font-bold text-white">Why Suibuy?</h2>
				<p className="text-gray-300 mt-3 text-xl max-w-2xl mx-auto">
					A Web3-powered marketplace designed to help local businesses,
					artisans, and small vendors sell directly to consumers with secure
					transactions, verified reputation, and financial support.
				</p>
			</div>

			{/* Main Content Box */}
			<div className="relative  rounded-xl p-10 flex flex-col items-center md:flex-row md:items-center md:justify-between">
				{/* Left Side - Feature Cards */}
				<div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full md:w-1/2">
					{/* Feature 1 - User Friendly */}
					<div className="flex items-start space-x-4 p-6 shadow rounded-lg bg-gradient-to-r from-[#2a2a72] to-[#009ffd] ">
						<div className="flex items-center justify-center w-14 h-14 bg-purple-100 rounded-full">
							<FaStore className="text-purple-600 text-3xl" />
						</div>
						<div>
							<h3 className="text-xl font-semibold text-gray-100">
								User Friendly
							</h3>
							<p className="text-gray-300">
								Easy onboarding and intuitive interface for all users.
							</p>
						</div>
					</div>

					{/* Feature 2 - Data Security */}
					<div className="flex items-start space-x-4 p-6 bg-gradient-to-r from-[#2a2a72] to-[#009ffd]  shadow rounded-lg">
						<div className="flex items-center justify-center w-14 h-14 bg-blue-100 rounded-full">
							<FaLock className="text-blue-600 text-3xl" />
						</div>
						<div>
							<h3 className="text-xl font-semibold text-gray-300">
								Data Security
							</h3>
							<p className="text-gray-100">
								Blockchain encryption ensures safe and trustless transactions.
							</p>
						</div>
					</div>

					{/* Feature 3 - Reputation System */}
					<div className="flex items-start space-x-4 p-6 bg-gradient-to-r from-[#2a2a72] to-[#009ffd]  shadow rounded-lg">
						<div className="flex items-center justify-center w-14 h-14 bg-green-100 rounded-full">
							<FaUsers className="text-green-600 text-3xl" />
						</div>
						<div>
							<h3 className="text-xl font-semibold text-gray-100">
								Reputation System
							</h3>
							<p className="text-gray-300">
								Verified reviews to build trust between buyers and sellers.
							</p>
						</div>
					</div>

					{/* Feature 4 - Microloans & Savings */}
					<div className="flex items-start space-x-4 p-6 bg-gradient-to-r from-[#2a2a72] to-[#009ffd]  shadow rounded-lg">
						<div className="flex items-center justify-center w-14 h-14 bg-yellow-100 rounded-full">
							<FaCoins className="text-yellow-600 text-3xl" />
						</div>
						<div>
							<h3 className="text-xl font-semibold text-gray-100">
								Microloans & Savings
							</h3>
							<p className="text-gray-300">
								Vendors can access funding for growth through DeFi lending.
							</p>
						</div>
					</div>
				</div>

				{/* Right Side - Centered Illustration */}
				<div className="flex justify-center mt-10 md:mt-0 md:w-1/2">
					<Image
						src="/images/why.png" // Replace with your actual image path
						alt="Why Suibuy?"
						width={300}
						height={300}
						className="w-full max-w-sm"
					/>
				</div>
			</div>
		</section>
	);
};

export default WhySuibuy;
