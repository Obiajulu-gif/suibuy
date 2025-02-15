"use client"; // Ensure client-side rendering

import Link from "next/link";
import { Shirt, Monitor, ShoppingCart, Home, Dumbbell } from "lucide-react";

const categories = [
	{ name: "Fashion", icon: Shirt, link: "/marketplace/fashion" },
	{ name: "Electronics", icon: Monitor, link: "/marketplace/electronics" },
	{ name: "Groceries", icon: ShoppingCart, link: "/marketplace/groceries" },
	{ name: "Home & Office", icon: Home, link: "/marketplace/home-office" },
	{ name: "Sport & Games", icon: Dumbbell, link: "/marketplace/sport-games" },
];

export function CategoryBrowse() {
	return (
		<section className="py-12 bg-white">
			<div className="container mx-auto px-4">
				{/* Header Section */}
				<div className="flex items-center justify-between mb-8">
					<h3 className="text-2xl font-semibold text-[#2a2a72]">
						Browse By Category
					</h3>
					{/* Navigation Arrows (Placeholder for Future Carousel) */}
					<div className="flex space-x-2">
						<button className="p-2 border border-gray-300 rounded-full text-[#2a2a72] hover:bg-gray-100 transition">
							←
						</button>
						<button className="p-2 border border-gray-300 rounded-full text-[#2a2a72] hover:bg-gray-100 transition">
							→
						</button>
					</div>
				</div>

				{/* Category Grid */}
				<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
					{categories.map((category) => (
						<Link key={category.name} href={category.link}>
							<div className="flex flex-col items-center justify-center p-6 border border-gray-200 rounded-md cursor-pointer hover:border-[#009ffd] transition-all">
								<category.icon className="w-8 h-8 mb-2 text-[#009ffd]" />
								<span className="text-sm font-medium text-[#2a2a72]">
									{category.name}
								</span>
							</div>
						</Link>
					))}
				</div>
			</div>
		</section>
	);
}
