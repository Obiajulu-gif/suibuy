"use client";
import Image from "next/image";
import {
	FaStore,
	FaHandshake,
	FaCoins,
	FaShieldAlt,
	FaRocket,
	FaShoppingCart,
	FaBolt,
	FaStar,
	FaLink,
	FaPiggyBank,
} from "react-icons/fa";

const About = () => {
	return (
		<section className="relative flex flex-col items-center px-16 py-24  text-white">
			{/* First Section - About Suibuy */}
			<div className="flex items-center justify-between w-full mb-20">
				{/* Left Section (Text) */}
				<div className="w-1/2 pr-10">
					<h2 className="text-5xl font-bold mb-6 leading-tight">
						Web3 Marketplace for <br></br> Local Businesses
					</h2>
					<p className="text-transparent bg-clip-text bg-gradient-to-r from-[#cbcbe7] to-[#80badb] text-xl leading-relaxed">
						Suibuy is a blockchain-based marketplace designed to empower local
						businesses, artisans, and small vendors, allowing them to sell
						directly to consumers without middlemen. Our platform ensures
						trustless payments, verified reputation, and proof of authenticity,
						making it easier for businesses to maximize sales and access
						microloans.
					</p>
				</div>

				{/* Right Section (Large Image) */}
				<div className="relative w-1/2  justify-center hidden md:flex">
					<div className="relative w-full h-full transform rotate-[-10deg]">
						<Image
							src="/images/about.png" // Replace with your actual image path
							alt="Suibuy Marketplace"
							width={500}
							height={300}
							className="rounded-lg shadow-lg "
						/>
					</div>
				</div>
			</div>

			{/* Second Section - Problems & Solutions */}
			<div className="flex items-center justify-between w-full mb-20">
				{/* Left Side - Problems */}
				<div className="w-1/2 pr-10 text-transparent bg-clip-text bg-gradient-to-r from-[#cbcbe7] to-[#80badb]">
					<h2 className="text-5xl font-bold mb-6 leading-tight">
						Problems Faced Vendors
					</h2>
					<ul className="text-gray-300 text-xl leading-relaxed space-y-6">
						<li className="flex items-center">
							<FaStore className="text-purple-400 mr-4 text-3xl" />
							Middlemen take 10-20%+ per sale (Jumia, Amazon fees).
						</li>
						<li className="flex items-center">
							<FaShieldAlt className="text-blue-400 mr-4 text-3xl" />
							No easy way to verify vendor/product authenticity.
						</li>
						<li className="flex items-center">
							<FaCoins className="text-yellow-400 mr-4 text-3xl" />
							Delayed & expensive payments via banks.
						</li>
						<li className="flex items-center">
							<FaHandshake className="text-green-400 mr-4 text-3xl" />
							Limited financial access for vendor growth.
						</li>
						<li className="flex items-center">
							<FaRocket className="text-red-400 mr-4 text-3xl" />
							Expensive online store setup & tech barriers.
						</li>
					</ul>
				</div>

				{/* Right Side - Solutions */}
				<div className="w-1/2 text-transparent bg-clip-text bg-gradient-to-r from-[#cbcbe7] to-[#80badb]">
					<h2 className="text-5xl font-bold mb-6 leading-tight">
						How Suibuy Fixes This
					</h2>
					<ul className="text-gray-300 text-xl leading-relaxed space-y-6">
						<li className="flex items-center">
							<FaStore className="text-purple-400 mr-4 text-3xl" />✅ Zero
							middlemen: Direct vendor-to-consumer sales.
						</li>
						<li className="flex items-center">
							<FaShieldAlt className="text-blue-400 mr-4 text-3xl" />✅
							Trustless blockchain payments: Instant transactions.
						</li>
						<li className="flex items-center">
							<FaCoins className="text-yellow-400 mr-4 text-3xl" />✅ On-chain
							reputation system for real reviews.
						</li>
						<li className="flex items-center">
							<FaHandshake className="text-green-400 mr-4 text-3xl" />✅
							Microloans & savings to fund vendor growth.
						</li>
						<li className="flex items-center">
							<FaRocket className="text-red-400 mr-4 text-3xl" />✅ No coding
							needed: Easy store setup & management.
						</li>
					</ul>
				</div>
			</div>

			{/* Third Section - Suibuy Key Features */}
			<div className="flex items-center justify-between w-full">
				{/* Left Side - Key Features List */}
				<div className="w-1/2 pr-10 text-transparent bg-clip-text bg-gradient-to-r from-[#cbcbe7] to-[#80badb]">
					<h2 className="text-5xl font-bold mb-6 leading-tight">
						Suibuy Key Features
					</h2>
					<ul className="text-gray-300 text-xl leading-relaxed space-y-6">
						<li className="flex items-center">
							<FaShoppingCart className="text-purple-400 mr-4 text-3xl" />
							Decentralized Vendor & Product Listings
						</li>
						<li className="flex items-center">
							<FaBolt className="text-yellow-400 mr-4 text-3xl" />
							Trustless Payments (SUI & Stablecoins)
						</li>
						<li className="flex items-center">
							<FaStar className="text-blue-400 mr-4 text-3xl" />
							Reputation & Verified Seller System
						</li>
						<li className="flex items-center">
							<FaLink className="text-green-400 mr-4 text-3xl" />
							On-Chain Proof of Ownership & Authenticity
						</li>
						<li className="flex items-center">
							<FaPiggyBank className="text-red-400 mr-4 text-3xl" />
							Vendor Savings & DeFi Microloans
						</li>
					</ul>
					<button className="mt-6 px-6 py-3 bg-purple-600 rounded-lg text-white hover:bg-purple-800 transition">
						Join the Marketplace →
					</button>
				</div>

				{/* Right Side - Custom Images Grid */}
				<div className="grid grid-cols-2 gap-8 w-1/2">
					<Image
						src="/images/decentralize.png"
						alt="Vendor Product 1"
						width={250}
						height={250}
						className="rounded-lg shadow-lg hidden"
					/>
					<Image
						src="/images/trust.png"
						alt="Vendor Product 2"
						width={250}
						height={250}
						className="rounded-lg shadow-lg"
					/>
					<Image
						src="/images/sui.png"
						alt="Vendor Product 3"
						width={250}
						height={250}
						className="rounded-lg shadow-lg"
					/>
					<Image
						src="/images/custom-image4.png"
						alt="Vendor Product 4"
						width={250}
						height={250}
						className="rounded-lg shadow-lg hidden"
					/>
				</div>
			</div>
		</section>
	);
};

export default About;
