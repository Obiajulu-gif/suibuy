import React, { memo } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaShoppingBag } from "react-icons/fa"; // Added product icon
import { products } from "./products";

const GroceriesPage = () => {
	return (
		<div className="min-h-screen bg-gradient-to-r from-purple to-indigo-500 py-12">
			<div className="container mx-auto px-4">
				{/* Header Section */}
				<header className="mb-12 text-center">
					<h1 className="text-4xl font-extrabold text-white flex justify-center items-center gap-4">
						Groceries Gallery
					</h1>
					<p className="text-lg text-gray-200 mt-2">
						Discover our premium selection of groceries
					</p>
				</header>

				{/* Product Grid */}
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
					{products.map((product) => (
						<Link
							href={`/marketplace/groceries/${product.id}`}
							key={product.id}
							className="group block bg-white rounded-xl overflow-hidden shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl"
						>
							{/* Product Image */}
							<div className="relative h-56">
								<Image
									src={product.image}
									alt={product.title}
									fill
									className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
									quality={100}
									priority={product.id === 1} // Prioritize loading for the first product
								/>
							</div>

							{/* Product Details */}
							<div className="p-6">
								<div className="flex items-center gap-2 mb-2">
									<FaShoppingBag size={20} className="text-green-500" />
									<h3 className="text-xl font-semibold text-purple-700 group-hover:text-indigo-600 transition-colors truncate">
										{product.title}
									</h3>
								</div>
								<p className="text-lg font-bold text-gray-800 mb-2">
									{product.price}
								</p>
								<p className="text-gray-600 line-clamp-2">
									{product.description}
								</p>
							</div>
						</Link>
					))}
				</div>
			</div>
		</div>
	);
};

// **Optimize with React.memo()**
export default memo(GroceriesPage);
