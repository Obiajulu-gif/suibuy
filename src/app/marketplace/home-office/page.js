import React from "react";
import Link from "next/link";
import Image from "next/image";
import { products } from "./products";
import { FaArrowRight } from "react-icons/fa";

export default function HomeOfficePage() {
	return (
		<div className="min-h-screen bg-gradient-to-r from-purple to-indigo-600  py-10">
			{/* Page Header */}
			<header className="mb-12 text-center">
				<h1 className="text-4xl font-extrabold text-white tracking-wide">
					Home Office Collection
				</h1>
				<p className="mt-2 text-lg text-gray-100">
					Curated pieces to upgrade your workspace
				</p>
			</header>

			{/* Product Grid */}
			<div className="container mx-auto px-4">
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
					{products.map((product) => (
						<Link
							href={`/marketplace/home-office/${product.id}`}
							key={product.id}
							className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
						>
							{/* Product Image */}
							<div className="relative w-full h-64">
								<Image
									src={product.image}
									alt={product.title}
									fill
									className="object-cover"
									quality={100}
								/>
							</div>

							{/* Product Details */}
							<div className="p-6">
								<div className="flex items-center justify-between">
									<h3 className="text-gray-800 text-xl font-medium">
										{product.title}
									</h3>
									<FaArrowRight className="text-gray-500 w-6 h-6" />
								</div>
								<p className="mt-4 text-lg font-bold text-gray-900">
									{product.price}
								</p>
							</div>
						</Link>
					))}
				</div>
			</div>
		</div>
	);
}
