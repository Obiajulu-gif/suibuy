"use client"; // Needed for Next.js App Router

import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose, AiOutlineUser } from "react-icons/ai";

export default function Navbar() {
	const [navOpen, setNavOpen] = useState(false);

	return (
		<nav className="w-full flex justify-center bg-black py-3">
			<div className="w-[95%] max-w-7xl bg-black border border-blue-500 rounded-full px-6 py-3 flex items-center justify-between">
				{/* Logo */}
				<div className="flex items-center space-x-2">
					<img src="/logo.png" alt="DecentraClasses" className="w-10 h-10" />
					<div className="text-white">
						<h1 className="text-lg font-semibold">SUIBUY</h1>
						<p className="text-xs tracking-widest text-gray-400">
							SAVE | EARN | GROW
						</p>
					</div>
				</div>

				

				{/* XP & Wallet Connect (Desktop) */}
				<div className="hidden md:flex items-center space-x-4">
					<button className="flex items-center bg-black text-white px-4 py-2 rounded-full border border-white">
						⚡ <span className="ml-1">0 XP</span>
					</button>
					<AiOutlineUser className="text-white text-2xl cursor-pointer" />
				</div>

				{/* Mobile Menu Button */}
				<button
					className="md:hidden text-white"
					onClick={() => setNavOpen(!navOpen)}
				>
					{navOpen ? <AiOutlineClose size={28} /> : <AiOutlineMenu size={28} />}
				</button>
			</div>

			{/* Mobile Menu */}
			{navOpen && (
				<div className="absolute top-16 left-0 w-full bg-black text-white flex flex-col items-center py-4">
					<ul className="flex flex-col space-y-4 text-lg">
						<li className="hover:text-gray-400 cursor-pointer">Home</li>
						<li className="hover:text-gray-400 cursor-pointer">Courses</li>
						<li className="hover:text-gray-400 cursor-pointer">Contests</li>
						<li className="hover:text-gray-400 cursor-pointer">Cohorts</li>
						<li className="hover:text-gray-400 cursor-pointer">Jobs</li>
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
