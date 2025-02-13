"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronDown, ChevronRight, Circle, Apple } from "lucide-react";

export function HeroBanner() {
	// State for dropdown menu
	const [openDropdown, setOpenDropdown] = useState(null);

	const toggleDropdown = (category) => {
		setOpenDropdown(openDropdown === category ? null : category);
	};

	return (
		<div className="flex bg-[#2a2a72] text-white min-h-[400px]">
			{/* Left Sidebar */}
			<div className="w-1/4 bg-[#009ffd] p-8 border-r border-gray-200 hidden lg:block">
				<ul className="space-y-3 text-black font-medium">
					<li
						className="flex justify-between items-center cursor-pointer hover:text-gray-200"
						onClick={() => toggleDropdown("womens")}
					>
						<span>Woman’s Fashion</span>
						<ChevronDown size={16} />
					</li>
					{openDropdown === "womens" && (
						<ul className="ml-4 space-y-2 text-gray-200">
							<li className="hover:text-white cursor-pointer">Dresses</li>
							<li className="hover:text-white cursor-pointer">Shoes</li>
							<li className="hover:text-white cursor-pointer">Accessories</li>
						</ul>
					)}

					<li
						className="flex justify-between items-center cursor-pointer hover:text-gray-200"
						onClick={() => toggleDropdown("mens")}
					>
						<span>Men’s Fashion</span>
						<ChevronDown size={16} />
					</li>
					{openDropdown === "mens" && (
						<ul className="ml-4 space-y-2 text-gray-200">
							<li className="hover:text-white cursor-pointer">T-Shirts</li>
							<li className="hover:text-white cursor-pointer">Shoes</li>
							<li className="hover:text-white cursor-pointer">Watches</li>
						</ul>
					)}

					<li className="hover:text-gray-200 cursor-pointer">Electronics</li>
					<li className="hover:text-gray-200 cursor-pointer">
						Home & Lifestyle
					</li>
					<li className="hover:text-gray-200 cursor-pointer">Medicine</li>
					<li className="hover:text-gray-200 cursor-pointer">
						Sports & Outdoor
					</li>
					<li className="hover:text-gray-200 cursor-pointer">Baby’s & Toys</li>
					<li className="hover:text-gray-200 cursor-pointer">
						Groceries & Pets
					</li>
					<li className="hover:text-gray-200 cursor-pointer">
						Health & Beauty
					</li>
				</ul>
			</div>

			{/* Right Section - Hero Banner */}
			<div className="relative w-full lg:w-3/4 bg-[#2a2a72] text-white rounded-lg overflow-hidden">
				<div className="flex flex-col md:flex-row items-center justify-between px-20 py-8">
					{/* Text Section */}
					<div className="space-y-3 md:w-1/2">
						{/* Apple Logo & Tag */}
						<div className="flex items-center space-x-2 text-gray-300">
							<Apple size={40} />
							<span className="text-sm tracking-wide">iPhone 14 Series</span>
						</div>

						{/* Heading */}
						<h1 className="text-5xl font-bold leading-tight">
							Up to <span className="text-[#009ffd]">10% off</span> <br />{" "}
							Voucher
						</h1>

						{/* Shop Now Button */}
						<button className="mt-4 px-6 py-3 bg-[#009ffd] text-black rounded-full font-medium transition-all duration-300 hover:bg-[#0086da] flex items-center space-x-2">
							<span>Shop Now</span> <ChevronRight size={18} />
						</button>
					</div>

					{/* Image Section */}
					<div className="relative w-1/2 h-[350px] hidden md:block">
						<Image
							src="/images/iphone.png" // Replace with actual image path
							alt="iPhone 14"
							fill
							className="object-contain"
						/>
					</div>
				</div>

				{/* Dots for Carousel */}
				<div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
					<Circle size={10} className="text-gray-500" />
					<Circle size={10} className="text-[#009ffd]" />
					<Circle size={10} className="text-gray-500" />
					<Circle size={10} className="text-gray-500" />
					<Circle size={10} className="text-gray-500" />
				</div>
			</div>
		</div>
	);
}
