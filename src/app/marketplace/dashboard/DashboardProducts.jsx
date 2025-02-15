"use client"
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {products} from "./products"
const DashboardProducts = () => {
	const [activeTab, setActiveTab] = useState("myProducts");

	const tabs = [
		{ id: "myProducts", label: "My Products" },
		{ id: "sellingProducts", label: "Selling Products" },
	];

	return (
		<div className="p-4">
			<h2 className="text-xl font-bold mb-4">Account Information</h2>

			<div className="flex mb-6">
				{tabs.map((tab) => (
					<button
						key={tab.id}
						onClick={() => setActiveTab(tab.id)}
						className={`mr-4 pb-2 bg-white ${
							activeTab === tab.id
								? "text-orange-500 border-b-2 border-orange-500 font-semibold"
								: "text-gray-500"
						}`}
					>
						{tab.label}
					</button>
				))}
			</div>

			<div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
				{products.map((product) => (
					<div
						key={product.id}
						className="bg-white p-4 rounded-lg shadow-lg flex flex-col items-center"
					>
						<Image
							src={product.image}
							alt={product.title}
							width={150}
							height={150}
							className="rounded-lg mb-4"
							objectFit="cover"
						/>
						<h3 className="text-sm font-semibold text-gray-700 text-center mb-2">
							{product.title}
						</h3>
						<p className="text-lg font-bold text-gray-800">{product.price}</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default DashboardProducts;
