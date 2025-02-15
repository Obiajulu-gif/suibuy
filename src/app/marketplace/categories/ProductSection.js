// components/ProductSection.js
"use client";
import { useState } from "react";
import Image from "next/image";
import { FaFilter } from "react-icons/fa";
import products from "./products"
const filters = {
	category: ["Men’s Wear", "Women’s Wear", "Adult’s Wear", "Kid’s Wear"],
	brand: ["Brand A", "Brand B", "Brand C"],
	price: ["Under $50", "$50 - $100", "Above $100"],
	size: ["Small", "Medium", "Large"],
	materials: ["Cotton", "Polyester", "Leather"],
	color: ["Red", "Blue", "Green"],
	availability: ["In Stock", "Out of Stock"],
};


const ProductSection = () => {
	const [selectedFilters, setSelectedFilters] = useState({});
	const [isFilterOpen, setIsFilterOpen] = useState(false);

	// Toggle Sidebar Visibility on Mobile
	const toggleFilter = () => {
		setIsFilterOpen(!isFilterOpen);
	};

	// Handle Filter Selection (Placeholder Functionality)
	const handleFilterChange = (filterType, filterValue) => {
		setSelectedFilters({
			...selectedFilters,
			[filterType]: filterValue,
		});
	};

	return (
		<section className="flex flex-col md:flex-row p-4 bg-gray-50">
			{/* Filter Toggle Button on Mobile */}
			<button
				onClick={toggleFilter}
				className="md:hidden mb-4 bg-orange-500 text-white px-4 py-2 rounded flex items-center space-x-2"
			>
				<FaFilter />
				<span>Filter Categories</span>
			</button>

			{/* Sidebar Filters */}
			<aside
				className={`${
					isFilterOpen ? "block" : "hidden"
				} md:block w-full md:w-1/4 p-4 bg-white rounded-lg shadow-lg mb-4 md:mb-0 md:mr-4`}
			>
				<h2 className="font-bold text-lg mb-4">All Categories</h2>
				{Object.keys(filters).map((filterType) => (
					<div key={filterType} className="mb-4">
						<h3 className="font-semibold text-gray-700">
							{filterType.charAt(0).toUpperCase() + filterType.slice(1)}
						</h3>
						<ul className="mt-2 space-y-1">
							{filters[filterType].map((filterValue) => (
								<li key={filterValue}>
									<label className="flex items-center text-gray-600">
										<input
											type="radio"
											name={filterType}
											value={filterValue}
											onChange={() =>
												handleFilterChange(filterType, filterValue)
											}
											className="mr-2"
										/>
										{filterValue}
									</label>
								</li>
							))}
						</ul>
					</div>
				))}
			</aside>

			{/* Product Grid */}
			<div className="w-full md:w-3/4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
				{products.map((product) => (
					<div key={product.id} className="bg-white rounded-lg shadow-lg p-4">
						<div className="relative w-full h-56 rounded-lg overflow-hidden">
							<Image
								src={product.image}
								alt={product.title}
								layout="fill"
								objectFit="cover"
								className="w-full h-full"
							/>
						</div>
						<div className="mt-4">
							<h3 className="text-gray-800 font-semibold">{product.title}</h3>
							<p className="text-lg font-bold mt-2">{product.price}</p>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default ProductSection;
