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
		<section className="relative flex flex-col items-center px-6 md:px-16 py-16 text-white">
			{/* First Section - About Suibuy */}
			<div className="flex flex-col md:flex-row items-center justify-between w-full mb-20">
				{/* Left Section (Text) */}
				<div className="w-full md:w-1/2 md:pr-10 text-center md:text-left">
					<h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
						Web3 Marketplace for <br className="hidden md:block" /> Local
						Businesses
					</h2>
					<p className="text-transparent bg-clip-text bg-gradient-to-r from-[#cbcbe7] to-[#80badb] text-lg md:text-xl leading-relaxed">
						Suibuy is a blockchain-based marketplace designed to empower local
						businesses, artisans, and small vendors, allowing them to sell
						directly to consumers without middlemen. Our platform ensures
						trustless payments, verified reputation, and proof of authenticity,
						making it easier for businesses to maximize sales and access
						microloans.
					</p>
				</div>

				{/* Right Section (Large Image) */}
				<div className="w-full md:w-1/2 flex justify-center md:justify-end mt-10 md:mt-0">
					<Image
						src="/images/about.png"
						alt="Suibuy Marketplace"
						width={400}
						height={250}
						className="rounded-lg shadow-lg"
					/>
				</div>
			</div>

			{/* Second Section - Problems & Solutions */}
			<div className="flex flex-col md:flex-row items-start justify-between w-full mb-20">
				{/* Left Side - Problems */}
				<div className="w-full md:w-1/2 md:pr-10 text-center md:text-left">
					<h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
						Problems Faced Vendors
					</h2>
					<ul className="text-gray-300 text-lg md:text-xl leading-relaxed space-y-6">
						<li className="flex items-center justify-center md:justify-start">
							<FaStore className="text-purple-400 mr-4 text-2xl md:text-3xl" />
							Middlemen take 10-20%+ per sale (Jumia, Amazon fees).
						</li>
						<li className="flex items-center justify-center md:justify-start">
							<FaShieldAlt className="text-blue-400 mr-4 text-2xl md:text-3xl" />
							No easy way to verify vendor/product authenticity.
						</li>
						<li className="flex items-center justify-center md:justify-start">
							<FaCoins className="text-yellow-400 mr-4 text-2xl md:text-3xl" />
							Delayed & expensive payments via banks.
						</li>
					</ul>
				</div>

				{/* Right Side - Solutions */}
				<div className="w-full md:w-1/2 text-center md:text-left mt-10 md:mt-0">
					<h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
						How Suibuy Fixes This
					</h2>
					<ul className="text-gray-300 text-lg md:text-xl leading-relaxed space-y-6">
						<li className="flex items-center justify-center md:justify-start">
							<FaStore className="text-purple-400 mr-4 text-2xl md:text-3xl" />
							✅ Zero middlemen: Direct vendor-to-consumer sales.
						</li>
						<li className="flex items-center justify-center md:justify-start">
							<FaShieldAlt className="text-blue-400 mr-4 text-2xl md:text-3xl" />
							✅ Trustless blockchain payments: Instant transactions.
						</li>
						<li className="flex items-center justify-center md:justify-start">
							<FaCoins className="text-yellow-400 mr-4 text-2xl md:text-3xl" />
							✅ On-chain reputation system for real reviews.
						</li>
					</ul>
				</div>
			</div>

			{/* Third Section - Suibuy Key Features */}
			<div className="flex flex-col md:flex-row items-start justify-between w-full">
				{/* Left Side - Key Features List */}
				<div className="w-full md:w-1/2 md:pr-10 text-center md:text-left">
					<h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
						Suibuy Key Features
					</h2>
					<ul className="text-gray-300 text-lg md:text-xl leading-relaxed space-y-6">
						<li className="flex items-center justify-center md:justify-start">
							<FaShoppingCart className="text-purple-400 mr-4 text-2xl md:text-3xl" />
							Decentralized Vendor & Product Listings
						</li>
						<li className="flex items-center justify-center md:justify-start">
							<FaBolt className="text-yellow-400 mr-4 text-2xl md:text-3xl" />
							Trustless Payments (SUI & Stablecoins)
						</li>
					</ul>
					<button className="mt-6 px-6 py-3 bg-purple-600 rounded-lg text-white hover:bg-purple-800 transition">
						Join the Marketplace →
					</button>
				</div>

				{/* Right Side - Custom Images Grid */}
				<div className="grid grid-cols-2 md:grid-cols-2 gap-6 w-full md:w-1/2 mt-10 md:mt-0">
					<Image
						src="/images/decentralize.png"
						alt="Vendor Product 1"
						width={200}
						height={200}
						className="rounded-lg shadow-lg"
					/>
					<Image
						src="/images/trust.png"
						alt="Vendor Product 2"
						width={200}
						height={200}
						className="rounded-lg shadow-lg"
					/>
					<Image
						src="/images/sui.png"
						alt="Vendor Product 3"
						width={200}
						height={200}
						className="rounded-lg shadow-lg"
					/>
					<Image
						src="/images/custom-image4.png"
						alt="Vendor Product 4"
						width={200}
						height={200}
						className="rounded-lg shadow-lg"
					/>
				</div>
			</div>
		</section>
	);
};

export default About;
