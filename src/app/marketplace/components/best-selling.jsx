"use client"; // Ensures it's a client component

import Image from "next/image";
import Link from "next/link";
import { Star } from "lucide-react";

const products = [
	{
		id: 1,
		name: "The North Coat",
		price: 260,
		originalPrice: 360,
		rating: 5,
		image: "/images/marketplace/coat.png",
	},
	{
		id: 2,
		name: "Gucci Duffle Bag",
		price: 960,
		originalPrice: 1160,
		rating: 4,
		image: "/images/marketplace/bag.png",
	},
	{
		id: 3,
		name: "RGB Liquid CPU Cooler",
		price: 160,
		originalPrice: 170,
		rating: 4,
		image: "/images/marketplace/speaker.png",
	},
	{
		id: 4,
		name: "Small Bookshelf",
		price: 360,
		originalPrice: 400,
		rating: 5,
		image: "/images/marketplace/bookshelf.png",
	},
];

export function BestSelling() {
	return (
		<section className="py-12 bg-white">
			<div className="container mx-auto px-4">
				{/* Header Section */}
				<div className="flex items-center justify-between mb-8">
					<h3 className="text-2xl font-semibold text-[#2a2a72]">
						Best Selling Products
					</h3>
					<Link href="/best-selling">
						<button className="px-4 py-2 bg-[#009ffd] text-white rounded-md hover:bg-[#2a2a72] transition">
							View All
						</button>
					</Link>
				</div>

				{/* Product Grid */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
					{products.map((product) => (
						<div key={product.id} className="group">
							{/* Product Image */}
							<div className="aspect-square bg-gray-100 rounded-lg relative overflow-hidden flex items-center justify-center">
								<Image
									src={product.image}
									alt={product.name}
									width={300}
									height={300}
									className="object-cover"
								/>
								{/* Favorite (Wishlist) Button */}
								<button className="absolute top-3 right-3 p-1.5 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow">
									❤️
								</button>
							</div>

							{/* Product Details */}
							<div className="mt-4 space-y-2 text-center">
								<h4 className="font-medium text-[#2a2a72]">{product.name}</h4>
								<div className="flex items-center justify-center space-x-2">
									<span className="text-[#009ffd] font-bold">
										${product.price}
									</span>
									<span className="text-gray-500 line-through">
										${product.originalPrice}
									</span>
								</div>
								{/* Rating */}
								<div className="flex items-center justify-center space-x-1">
									{Array.from({ length: product.rating }).map((_, i) => (
										<Star
											key={i}
											className="w-4 h-4 text-yellow-400 fill-current"
										/>
									))}
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
