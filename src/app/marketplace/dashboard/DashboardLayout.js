// src/components/DashboardLayout.js
"use client";
import Link from "next/link";
import { useState } from "react";
import {
	FaBars,
	FaTimes,
	FaUser,
	FaBox,
	FaShoppingCart,
	FaStar,
	FaHeart,
} from "react-icons/fa";

const DashboardLayout = ({ children, activeMenu, setActiveMenu }) => {
	const [isSidebarOpen, setIsSidebarOpen] = useState(false);

	const menuItems = [
		{ id: "profile", label: "My Profile Details", icon: <FaUser /> },
		{ id: "products", label: "My Products", icon: <FaBox /> },
		{ id: "orders", label: "My Orders", icon: <FaShoppingCart /> },
		{ id: "reviews", label: "My Reviews", icon: <FaStar /> },
		{ id: "favorites", label: "My Favourites", icon: <FaHeart /> },
	];

	const toggleSidebar = () => {
		setIsSidebarOpen(!isSidebarOpen);
	};

	return (
		<div className="flex min-h-screen bg-gray-50">
			{/* Mobile Menu Toggle Button */}
			<button
				onClick={toggleSidebar}
				className="lg:hidden fixed top-4 left-4 z-20 bg-orange-500 hover:text-orange-500 text-white p-2 rounded-lg focus:outline-none"
			>
				{isSidebarOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
			</button>

			{/* Sidebar */}
			<aside
				className={`fixed lg:relative z-10 inset-y-0 left-0 w-60 bg-white shadow-lg p-4 transition-transform transform ${
					isSidebarOpen ? "translate-x-0" : "-translate-x-full"
				} lg:translate-x-0 lg:block`}
			>
				<ul>
					{menuItems.map((item) => (
						<li key={item.id} className="mb-2">
							<div
								onClick={() => {
									setActiveMenu(item.id);
									setIsSidebarOpen(false); // Close sidebar on mobile after selection
								}}
								className={`flex items-center space-x-2 p-2 mt-10 rounded-lg w-full ${
									activeMenu === item.id
										? "bg-orange-100 text-orange-800 font-bold"
										: "text-gray-700"
								}`}
							>
								<span className="text-orange-500">{item.icon}</span>
								<span>{item.label}</span>
							</div>
						</li>
					))}
				</ul>
			</aside>

			{/* Overlay when Sidebar is Open on Mobile */}
			{isSidebarOpen && (
				<div
					onClick={toggleSidebar}
					className="fixed inset-0 bg-black opacity-50 lg:hidden z-5"
				></div>
			)}

			{/* Content */}
			<div className="flex-1 p-4 lg:ml-10">
				<div className="bg-white rounded-lg p-2">{children}</div>
			</div>
		</div>
	);
};

export default DashboardLayout;
