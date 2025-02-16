"use client"; // Needed for Next.js App Router

import { useState, useEffect } from "react";
import { AiOutlineMenu, AiOutlineClose, AiOutlineUser } from "react-icons/ai";
import Link from "next/link";
import { ShoppingCart } from "lucide-react";

export default function Navbar() {
	const [navOpen, setNavOpen] = useState(false);
	const [isScrolled, setIsScrolled] = useState(false);

	// Track scroll position for transparency effect
	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 50);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<>
			{/* Navbar Wrapper (Prevents Overflow) */}
			<div className="w-full overflow-hidden">
				{/* Navbar */}
				<nav
					className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
						isScrolled
							? "bg-black/70 backdrop-blur-md shadow-lg"
							: "bg-transparent"
					}`}
				>
					<div className="w-full max-w-7xl mx-auto flex items-center justify-between py-3 px-4 md:px-6 border border-blue-500 rounded-full">
						{/* Logo */}
						<Link href="/">
							<div className="flex items-center space-x-4">
								<img
									src="/logo.png"
									alt="SUIBUY"
									className="w-10 h-10 md:w-12 md:h-12"
								/>
								<div className="text-white">
									<h1 className="text-lg md:text-2xl font-bold">SUIBUY</h1>
									<p className="text-xs md:text-sm tracking-widest text-gray-400">
										SAVE | EARN | GROW
									</p>
								</div>
							</div>
						</Link>

						{/* Desktop Navigation */}
						<div className="hidden md:flex items-center space-x-8 font-bold text-[#009ffd]">
							<Link href="/saving" className="text-lg">
								Saving
							</Link>
							<Link href="/loan" className="text-lg">
								Micro Loan
							</Link>
							<Link href="/marketplace" className="text-lg">
								Marketplace
							</Link>
							<Link href="/about" className="text-lg">
								About
							</Link>
						</div>

						{/* Icons & Explore Button */}
						<div className="flex items-center space-x-4 md:space-x-6">
							<button className="p-2">
								<ShoppingCart className="h-6 w-6 md:h-10 md:w-10 text-white" />
							</button>
							<AiOutlineUser className="text-white text-xl md:text-2xl cursor-pointer" />
							<Link href="/explore">
								<button className="hidden md:block bg-[#009ffd] hover:bg-[#2a2a72] text-white font-bold py-2 px-4 rounded-lg">
									Explore Now
								</button>
							</Link>

							{/* Mobile Menu Toggle */}
							<button
								className="md:hidden text-white"
								onClick={() => setNavOpen(true)}
							>
								<AiOutlineMenu size={28} />
							</button>
						</div>
					</div>
				</nav>

				{/* Mobile Menu (Sliding from Right) */}
				<div
					className={`fixed top-0 right-0 h-full w-1/2 bg-black bg-opacity-95 text-white flex flex-col items-center py-6 z-50 transform ${
						navOpen ? "translate-x-0" : "translate-x-full"
					} transition-transform duration-300 ease-in-out`}
				>
					<button
						className="absolute top-4 right-4 text-white"
						onClick={() => setNavOpen(false)}
					>
						<AiOutlineClose size={28} />
					</button>

					<ul className="w-full flex flex-col items-center space-y-6 text-lg font-bold mt-16">
						<li className="w-full text-center">
							<Link
								href="/saving"
								className="block py-2 w-full hover:bg-gray-800"
							>
								Saving
							</Link>
						</li>
						<li className="w-full text-center">
							<Link
								href="/loan"
								className="block py-2 w-full hover:bg-gray-800"
							>
								Micro Loan
							</Link>
						</li>
						<li className="w-full text-center">
							<Link
								href="/marketplace"
								className="block py-2 w-full hover:bg-gray-800"
							>
								Marketplace
							</Link>
						</li>
						<li className="w-full text-center">
							<Link
								href="/about"
								className="block py-2 w-full hover:bg-gray-800"
							>
								About
							</Link>
						</li>
					</ul>

					{/* Mobile Explore Button */}
					<Link href="/explore">
						<button className="mt-6 bg-[#009ffd] hover:bg-[#2a2a72] text-white font-bold py-2 px-6 rounded-lg">
							Explore Now
						</button>
					</Link>
				</div>

				{/* Margin to prevent overlap */}
				<div className="mt-20 md:mt-24"></div>
			</div>
		</>
	);
}
