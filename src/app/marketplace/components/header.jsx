"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { MdLocationOn, MdComputer } from "react-icons/md";
import { FiShoppingCart, FiHelpCircle, FiUser, FiLogOut } from "react-icons/fi";
import { FaTshirt, FaHome, FaGamepad, FaUtensils } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../../lib/firebaseAuth";
import { motion } from "framer-motion"; // For animations

const Header = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [user, setUser] = useState(null);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	// Firebase Auth - Check user authentication status
	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (user) => {
			if (user) {
				// User is signed in
				setUser(user);
			} else {
				// User is signed out
				setUser(null);
			}
		});

		// Clean up the subscription on unmount
		return () => unsubscribe();
	}, []);

	// Handle user logout
	const handleLogout = async () => {
		await signOut(auth);
		setUser(null);
	};

	return (
		<header className="bg-orange-500 shadow-lg text-white sticky top-0 z-50">
			<div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center py-4">
				{/* Logo and Website Name */}
				<Link href="/" className="flex items-center">
					<Image
						src="/images/easybuylogo.png" // Replace with actual path to your logo
						alt="EasyBuy Logo"
						width={36}
						height={36}
						className="rounded-full"
					/>
					<span className="ml-2 text-xl font-bold">EasyBuy</span>
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

				{/* Desktop View - Full Navigation */}
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
					

					{user ? (
						<>
							<Link href="/dashboard">
								<button className="flex items-center bg-white text-orange-500 px-4 py-2 rounded-lg shadow-lg hover:bg-orange-100 hover:text-orange-700 transition-all">
									Dashboard
								</button>
							</Link>
							<button
								onClick={handleLogout}
								className="flex flex-col items-center text-white sm:text-white bg-orange-500 hover:text-red-700 transition-colors"
							>
								<FiLogOut className="mb-1" /> Logout
							</button>
						</>
					) : (
						<Link
							href="/signup"
							className="flex flex-col items-center text-white"
						>
							<FiUser className="mb-1" /> Sign up or Sign In
						</Link>
					)}
				</div>
			</div>

			{/* Mobile View - Slide-out Menu with animation */}
			<motion.div
				initial={{ height: 0 }}
				animate={{ height: isMenuOpen ? "auto" : 0 }}
				className="overflow-hidden lg:hidden bg-orange-600 text-white"
				transition={{ duration: 0.3 }}
			>
				<div className="px-4 py-2 space-y-2 font-extrabold">
					{user ? (
						<>
							<Link
								href="/dashboard"
								className="flex items-center bg-white text-orange-500 p-2 rounded-lg shadow-lg"
							>
								Dashboard
							</Link>
							<button
								onClick={handleLogout}
								className="flex items-center text-white bg-orange-500 hover:text-red-700 transition-colors"
							>
								<FiLogOut className="mr-1 text-white bg-orange-500 " /> Logout
							</button>
						</>
					) : (
						<Link href="/signup" className="flex items-center">
							<FiUser className="mr-1" /> Sign up or Sign In
						</Link>
					)}
					<Link href="/mycart" className="flex items-center">
						<FiShoppingCart className="mr-1" /> My Cart
					</Link>
					
				</div>

				{/* Secondary Navigation Bar for Mobile View */}
				<div className="flex flex-col bg-orange-600 py-2 text-white font-extrabold space-y-2 px-4">
					<Link href="/categories" className="flex items-center">
						<MdLocationOn className="mr-1" /> All Categories
					</Link>
					<Link href="/fashion" className="flex items-center">
						<FaTshirt className="mr-1" /> Fashion
					</Link>
					<Link href="/electronics" className="flex items-center">
						<MdComputer className="mr-1" /> Electronics
					</Link>
					<Link href="/computing" className="flex items-center">
						<MdComputer className="mr-1" /> Computing
					</Link>
					<Link href="/groceries" className="flex items-center">
						<FaUtensils className="mr-1" /> Groceries
					</Link>
					<Link href="/home-office" className="flex items-center">
						<FaHome className="mr-1" /> Home & Office
					</Link>
					<Link href="/sport-games" className="flex items-center">
						<FaGamepad className="mr-1" /> Sport & Games
					</Link>
				</div>
			</motion.div>

			{/* Secondary Navigation Bar for Desktop View */}
			<div className="hidden lg:flex bg-orange-600 py-2">
				<div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 flex space-x-4 text-white font-extrabold">
					{user ? (
						<Link
							href="/dashboard"
							className="bg-white text-orange-500 px-4 py-2 rounded-lg shadow-lg hover:bg-orange-100 hover:text-orange-700 transition-all"
						>
							Dashboard
						</Link>
					) : (
						<Link
							href="/signup"
							className="bg-white text-orange-500 px-4 py-2 rounded-lg shadow-lg hover:bg-orange-100 hover:text-orange-700 transition-all"
						>
							Start Selling
						</Link>
					)}
					<Link href="/categories" className="flex items-center">
						<MdLocationOn className="mr-1" /> All Categories
					</Link>
					<Link href="/fashion" className="flex items-center">
						<FaTshirt className="mr-1" /> Fashion
					</Link>
					<Link href="/electronics" className="flex items-center">
						<MdComputer className="mr-1" /> Electronics
					</Link>
					<Link href="/groceries" className="flex items-center">
						<FaUtensils className="mr-1" /> Groceries
					</Link>
					<Link href="/home-office" className="flex items-center">
						<FaHome className="mr-1" /> Home & Office
					</Link>
					<Link href="/sport-games" className="flex items-center">
						<FaGamepad className="mr-1" /> Sport & Games
					</Link>
				</div>
			</div>
		</header>
	);
};

export default Header;
