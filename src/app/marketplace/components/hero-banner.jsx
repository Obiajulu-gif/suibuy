"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, ChevronRight, Circle, Apple, Store } from "lucide-react";
import { Shirt, Monitor, ShoppingCart, Home, Dumbbell } from "lucide-react";
export function HeroBanner() {
	// State for dropdown menu
	const [openDropdown, setOpenDropdown] = useState(null);

	const toggleDropdown = (category) => {
		setOpenDropdown(openDropdown === category ? null : category);
	};

	return (
		<div className="flex bg-[#2a2a72] text-white min-h-[400px]">
			{/* Left Sidebar */}
			<div className="w-1/4 bg-[#1593db] p-8 border-r border-gray-200 hidden lg:block">
				<ul className="space-y-6  font-bold">
					<li className="flex justify-between items-center cursor-pointer hover:text-gray-200">
						<Link
							href="/marketplace/fashion"
							className="flex items-center justify-between w-full"
						>
							<div className="flex items-center space-x-3">
								<Shirt size={20} />
								<span>Fashion</span>
							</div>
							<ChevronRight size={18} />
						</Link>
					</li>

					<li className="flex justify-between items-center cursor-pointer hover:text-gray-200">
						<Link
							href="/marketplace/electronics"
							className="flex items-center justify-between w-full"
						>
							<div className="flex items-center space-x-3">
								<Monitor size={20} />
								<span>Electronics</span>
							</div>
							<ChevronRight size={18} />
						</Link>
					</li>

					<li className="flex justify-between items-center cursor-pointer hover:text-gray-200">
						<Link
							href="/marketplace/groceries"
							className="flex items-center justify-between w-full"
						>
							<div className="flex items-center space-x-3">
								<ShoppingCart size={20} />
								<span>Groceries</span>
							</div>
							<ChevronRight size={18} />
						</Link>
					</li>

					<li className="flex justify-between items-center cursor-pointer hover:text-gray-200">
						<Link
							href="/marketplace/home-office"
							className="flex items-center justify-between w-full"
						>
							<div className="flex items-center space-x-3">
								<Home size={20} />
								<span>Home & Office</span>
							</div>
							<ChevronRight size={18} />
						</Link>
					</li>

					<li className="flex justify-between items-center cursor-pointer hover:text-gray-200">
						<Link
							href="/marketplace/sport-games"
							className="flex items-center justify-between w-full"
						>
							<div className="flex items-center space-x-3">
								<Dumbbell size={20} />
								<span>Sport & Games</span>
							</div>
							<ChevronRight size={18} />
						</Link>
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

						<h1 className="text-5xl font-bold leading-tight">
							Up to <span className="text-[#009ffd]">10% off</span> <br />{" "}
							Voucher
						</h1>

						<button className="mt-4 px-6 py-3 bg-[#009ffd] text-white rounded-full font-extrabold transition-all duration-300 hover:bg-[#0086da] flex items-center space-x-2 animate-pulse">
							<span>Become a Merchant</span> <ChevronRight size={18} />{" "}
							<Store size={25} />
						</button>
					</div>

					{/* Image Section */}
					<div className="relative w-1/2 h-[350px] hidden md:block">
						<Image
							src="/images/marketplace/iphone.png" // Replace with actual image path
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
