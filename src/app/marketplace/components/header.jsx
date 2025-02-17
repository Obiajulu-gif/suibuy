"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { MdLocationOn, MdComputer } from "react-icons/md";
import { FiShoppingCart } from "react-icons/fi";
import { FaTshirt, FaHome, FaGamepad, FaUtensils } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";
import { motion } from "framer-motion"; // For animations

const Header = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	return (
		<header className="bg-transparent bg-black text-white sticky top-0 z-50">
			<div className="w-full bg-black max-w-7xl mx-auto flex items-center justify-between py-3 px-4 md:px-6 border border-blue-500 rounded-full">
				{/* Logo and Website Name */}
				<Link href="/" className="flex items-center">
					<Image
						src="/images/logo.png" // ✅ Replace with actual SUIBUY logo
						alt="SUIBUY Logo"
						width={36}
						height={36}
						className="rounded-full"
					/>
					<span className="ml-2 text-xl font-bold">SUIBUY</span>
				</Link>

				{/* Mobile Menu Icon */}
				<button
					onClick={toggleMenu}
					className="text-white lg:hidden bg-none focus:outline-none"
				>
					{isMenuOpen ? (
						<HiX className="w-6 h-6" />
					) : (
						<HiMenu className="w-6 h-6" />
					)}
				</button>

				{/* Desktop Navigation */}
				<div className="hidden lg:flex flex-1 items-center justify-center space-x-4">
					<div className="flex items-center">
						<MdLocationOn className="mr-1 text-white" />
						<span>Lagos, Nigeria</span>
					</div>
					<input
						type="text"
						placeholder="Search by name, brand or product"
						className="ml-4 px-4 py-2 border border-gray-300 rounded-lg w-1/2 text-gray-800"
					/>
					<Link
						href="/mycart"
						className="flex flex-col items-center text-white"
					>
						<FiShoppingCart className="mb-1" /> My Cart
					</Link>

					{/* Connect Button */}
					<button className="bg-blue hover:bg-blue-700 px-4 py-2 rounded-lg text-white font-bold transition-all">
						Connect
					</button>
				</div>
			</div>

			{/* Mobile View - Slide-out Menu */}
			<motion.div
				initial={{ width: 0 }}
				animate={{ width: isMenuOpen ? "50%" : 0 }}
				className="fixed top-0 right-0 h-full bg-purple text-white overflow-hidden z-50"
				transition={{ duration: 0.3 }}
			>
				<div className="px-4 py-4 space-y-4 font-extrabold">
					<button
						onClick={toggleMenu}
						className="absolute top-4 right-4 text-white"
					>
						<HiX size={28} />
					</button>
					<Link href="/mycart" className="flex items-center">
						<FiShoppingCart className="mr-1" /> My Cart
					</Link>

					{/* Connect Button in Mobile View */}
					<button className="w-full bg-blue hover:bg-blue-700 py-2 mt-4 rounded-lg text-white font-bold transition-all">
						Connect
					</button>
				</div>

				{/* Mobile Secondary Navigation */}
				<div className="flex flex-col py-2 text-white font-extrabold space-y-2 px-4">
					<Link href="/marketplace" className="flex items-center">
						<MdLocationOn className="mr-1" /> All Categories
					</Link>
					<Link href="/marketplace/fashion" className="flex items-center">
						<FaTshirt className="mr-1" /> Fashion
					</Link>
					<Link href="/marketplace/electronics" className="flex items-center">
						<MdComputer className="mr-1" /> Electronics
					</Link>
					<Link href="/marketplace/groceries" className="flex items-center">
						<FaUtensils className="mr-1" /> Groceries
					</Link>
					<Link href="/marketplace/home-office" className="flex items-center">
						<FaHome className="mr-1" /> Home & Office
					</Link>
					<Link href="/marketplace/sport-games" className="flex items-center">
						<FaGamepad className="mr-1" /> Sport & Games
					</Link>
				</div>
			</motion.div>

			{/* Desktop Secondary Navigation */}
			<div className="hidden lg:flex bg-purple py-2">
				<div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 flex space-x-4 text-white font-extrabold">
					<Link href="/marketplace" className="flex items-center">
						<MdLocationOn className="mr-1" /> All Categories
					</Link>
					<Link href="/marketplace/fashion" className="flex items-center">
						<FaTshirt className="mr-1" /> Fashion
					</Link>
					<Link href="/marketplace/electronics" className="flex items-center">
						<MdComputer className="mr-1" /> Electronics
					</Link>
					<Link href="/marketplace/groceries" className="flex items-center">
						<FaUtensils className="mr-1" /> Groceries
					</Link>
					<Link href="/marketplace/home-office" className="flex items-center">
						<FaHome className="mr-1" /> Home & Office
					</Link>
					<Link href="/marketplace/sport-games" className="flex items-center">
						<FaGamepad className="mr-1" /> Sport & Games
					</Link>
				</div>
			</div>
		</header>
	);
};

export default Header;
