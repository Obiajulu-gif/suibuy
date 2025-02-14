"use client"; // Needed for Next.js App Router

import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose, AiOutlineUser } from "react-icons/ai";
import Link from "next/link";
import { Search, ShoppingCart, User } from "lucide-react";

export default function Navbar() {
	const [navOpen, setNavOpen] = useState(false);

	return (
		<nav className="w-full flex justify-center bg-black py-3">
			<div className="w-[95%] max-w-7xl bg-black border border-blue-500 rounded-full px-6 py-3 flex items-center justify-between">
				<Link href="/">
					<div className="flex items-center space-x-4">
						<img src="/logo.png" alt="DecentraClasses" className="w-12 h-12" />
						<div className="text-white">
							<h1 className="text-2xl font-bold">SUIBUY</h1>
							<p className="text-sm tracking-widest text-gray-400">
								SAVE | EARN | GROW
							</p>
						</div>
					</div>
				</Link>

				<div className="flex-1 flex justify-end text-blue">
					<nav className="hidden md:flex items-center space-x-8 font-bold">
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
					</nav>
				</div>

				<div className="flex items-center space-x-6 text-purple">
					<button className="p-2">
						<ShoppingCart className="h-10 w-10" />
					</button>
					<AiOutlineUser className="text-white text-2xl cursor-pointer" />
				</div>
				<button
					className="md:hidden text-white"
					onClick={() => setNavOpen(!navOpen)}
				>
					{navOpen ? true : <AiOutlineMenu size={28} />}
				</button>
			</div>

			{/* Mobile Menu */}
			{navOpen && (
				<div className="absolute top-0 left-1/2 w-1/2 h-full bg-black bg-opacity-90 text-white flex flex-col items-center py-4 z-10 transition-all duration-300 ease-in-out">
					<button
						className="absolute top-4 right-4 text-white"
						onClick={() => setNavOpen(false)}
					>
						<AiOutlineClose size={28} />
					</button>
					<ul className="flex flex-col space-y-4 text-lg font-bold mt-20">
						<li className="hover:text-gray-400 cursor-pointer">
							<Link href="/saving"> Saving</Link>
						</li>
						<li className="hover:text-gray-400 cursor-pointer">
							<Link href="/loan"> Micro Loan</Link>
						</li>
						<li className="hover:text-gray-400 cursor-pointer">
							<Link href="/marketplace"> Marketplace</Link>
						</li>
						<li className="hover:text-gray-400 cursor-pointer">
							<Link href="/cohorts">About</Link>
						</li>
					</ul>
					<button className="mt-4 flex items-center bg-black text-white px-4 py-2 rounded-full border border-white">
						⚡ <span className="ml-1">0 XP</span>
					</button>
					<AiOutlineUser className="text-white text-2xl cursor-pointer mt-2" />
				</div>
			)}
		</nav>
	);
}
