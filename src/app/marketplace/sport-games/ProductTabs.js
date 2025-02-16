// components/ProductTabs.js
"use client";
import { useState } from "react";
import { 
	FaStar, 
	FaStarHalfAlt, 
	FaUserCircle, 
	FaPhoneAlt, 
	FaEnvelope, 
	FaMapMarkerAlt, 
	FaInfoCircle, 
	FaListAlt, 
	FaTruck, 
	FaStore 
} from "react-icons/fa";
import Image from "next/image";

const ProductTabs = () => {
	const [activeTab, setActiveTab] = useState("Product Information");

	const tabs = [
		"Product Information",
		"Specifications",
		"Delivery Information",
		"Verified Reviews",
		"Seller’s Information",
	];

	// Mapping the tabs to an icon
	const tabIcons = {
		"Product Information": <FaInfoCircle className="inline mr-2" />,
		"Specifications": <FaListAlt className="inline mr-2" />,
		"Delivery Information": <FaTruck className="inline mr-2" />,
		"Verified Reviews": <FaStar className="inline mr-2" />,
		"Seller’s Information": <FaStore className="inline mr-2" />,
	};

	const reviews = [
		{
			id: 1,
			name: "Ibukun Daniel",
			date: "20th January, 2024",
			location: "Lagos, Nigeria",
			rating: 4.5,
			text: "Lorem ipsum dolor sit amet consectetur. Donec enim bibendum sed quam et gravida morbi gravida.",
		},
		{
			id: 2,
			name: "Ibukun Daniel",
			date: "20th January, 2024",
			location: "Lagos, Nigeria",
			rating: 4,
			text: "Lorem ipsum dolor sit amet consectetur. Donec enim bibendum sed quam et gravida morbi gravida.",
		},
		{
			id: 3,
			name: "Ibukun Daniel",
			date: "20th January, 2024",
			location: "Lagos, Nigeria",
			rating: 4.5,
			text: "Lorem ipsum dolor sit amet consectetur. Donec enim bibendum sed quam et gravida morbi gravida.",
		},
		{
			id: 4,
			name: "Ibukun Daniel",
			date: "20th January, 2024",
			location: "Lagos, Nigeria",
			rating: 4,
			text: "Lorem ipsum dolor sit amet consectetur. Donec enim bibendum sed quam et gravida morbi gravida.",
		},
		// Add more reviews as needed
	];
	const sellerProducts = [
		{ id: 1, image: "/images/fashion/product1.png" },
		{ id: 2, image: "/images/fashion/product2.png" },
		{ id: 3, image: "/images/fashion/product3.png" },
		{ id: 4, image: "/images/fashion/product4.png" },
		{ id: 5, image: "/images/fashion/product5.png" },
		// Add more product images as necessary
	];

	const renderContent = () => {
		switch (activeTab) {
			case "Product Information":
				return (
					<div className="p-6 bg-orange-50 text-gray-800 leading-relaxed">
						<p>
							Lorem ipsum dolor sit amet consectetur. Donec enim bibendum sed
							quam et gravida morbi gravida. Netus auctor at sen nunc dui
							feugiat et. A donec risus pretium sit dictumst ultrices urna.
							Ultrices scelerisque orci pellentesque sit penatibus. Aliquet
							lectus ultrices nisl arcu nec amet natoque enim. Nulla euismod
							nunc quam vitae nunc varius. Quis amet augue ultrices non mauris
							nec congue diam justo.
						</p>
						<p className="mt-4">
							Lorem ipsum dolor sit amet consectetur. Donec enim bibendum sed
							quam et gravida morbi gravida. Netus auctor at sen nunc dui
							feugiat et. A donec risus pretium sit dictumst ultrices urna.
							Ultrices scelerisque orci pellentesque sit penatibus. Aliquet
							lectus ultrices nisl arcu nec amet natoque enim. Nulla euismod
							nunc quam vitae nunc varius. Quis amet augue ultrices non mauris
							nec congue diam justo.
						</p>
						<p className="mt-4">
							Lorem ipsum dolor sit amet consectetur. Donec enim bibendum sed
							quam et gravida morbi gravida. Netus auctor at sen nunc dui
							feugiat et. A donec risus pretium sit dictumst ultrices urna.
							Ultrices scelerisque orci pellentesque sit penatibus. Aliquet
							lectus ultrices nisl arcu nec amet natoque enim. Nulla euismod
							nunc quam vitae nunc varius. Quis amet augue ultrices non mauris
							nec congue diam justo.
						</p>
					</div>
				);
			case "Specifications":
				return (
					<div className="p-6 bg-gray-50 rounded-lg shadow-md">
						<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
							<div className="flex justify-between p-4 bg-white shadow-sm rounded">
								<span className="text-gray-600">Model:</span>
								<span className="font-bold">2024</span>
							</div>
							<div className="flex justify-between p-4 bg-white shadow-sm rounded">
								<span className="text-gray-600">SKU:</span>
								<span className="font-bold">2TYGDB4726ds</span>
							</div>
							<div className="flex justify-between p-4 bg-white shadow-sm rounded">
								<span className="text-gray-600">Brand:</span>
								<span className="font-bold">Kim’s collections</span>
							</div>
							<div className="flex justify-between p-4 bg-white shadow-sm rounded">
								<span className="text-gray-600">Material:</span>
								<span className="font-bold">Cotton</span>
							</div>
							<div className="flex justify-between p-4 bg-white shadow-sm rounded">
								<span className="text-gray-600">Color:</span>
								<span className="font-bold">White</span>
							</div>
							<div className="flex justify-between p-4 bg-white shadow-sm rounded">
								<span className="text-gray-600">Weight:</span>
								<span className="font-bold">5KG</span>
							</div>
							<div className="flex justify-between p-4 bg-white shadow-sm rounded">
								<span className="text-gray-600">Size:</span>
								<span className="font-bold">Variable</span>
							</div>
						</div>
					</div>
				);
			case "Delivery Information":
				return (
					<div className="p-6 bg-gray-50 rounded-lg shadow-md flex flex-col md:flex-row gap-6">
						<div className="flex-1 bg-white p-4 rounded-lg shadow-md">
							<h3 className="text-lg font-semibold text-gray-800 mb-2">
								Shipping Information
							</h3>
							<p className="text-gray-600 text-sm">
								Estimated shipping date is between Feb 20th - Feb 24th (from
								Lagos to Abuja).
							</p>
						</div>
						<div className="flex-1 bg-white p-4 rounded-lg shadow-md">
							<h3 className="text-lg font-semibold text-gray-800 mb-2">
								Delivery Information
							</h3>
							<p className="text-gray-600 text-sm">
								Estimated delivery date is between Feb 20th - Feb 24th (from
								Lagos to Abuja) - other factors may apply that can further delay
								delivery.
							</p>
						</div>
					</div>
				);
			case "Verified Reviews":
				return (
					<div className="p-6 bg-gray-50 rounded-lg shadow-md">
						{/* Total Ratings */}
						<div className="mb-4">
							<h3 className="text-2xl font-bold text-gray-800">
								Total Ratings
							</h3>
							<div className="flex items-center">
								<FaStar className="text-yellow-500" />
								<FaStar className="text-yellow-500" />
								<FaStar className="text-yellow-500" />
								<FaStar className="text-yellow-500" />
								<FaStarHalfAlt className="text-yellow-500" />
								<span className="ml-2 text-gray-600">4.5/5 ratings</span>
							</div>
						</div>
						{/* All Reviews */}
						<h4 className="text-xl font-bold text-gray-800 mt-4 mb-4">
							All Reviews
						</h4>
						<div className="space-y-6">
							{reviews.map((review) => (
								<div key={review.id} className="flex items-start space-x-4">
									<FaUserCircle className="text-blue w-12 h-12" />
									<div>
										<div className="flex items-center space-x-2">
											<h5 className="text-gray-800 font-semibold">
												{review.name}
											</h5>
											<span className="text-gray-500 text-sm">
												{review.date}
											</span>
											<span className="text-gray-500 text-sm">
												{review.location}
											</span>
										</div>
										<p className="text-gray-600 mt-1">{review.text}</p>
									</div>
								</div>
							))}
						</div>
					</div>
				);
			case "Seller’s Information":
				return (
					<div className="p-6 bg-gray-50 rounded-lg shadow-md">
						{/* Seller Details */}
						<div className="flex items-center space-x-4 bg-white p-4 rounded-lg shadow-lg mb-6">
							<FaUserCircle className="text-blue w-12 h-12" />
							<div>
								<h3 className="text-xl font-bold">Kim’s Collections</h3>
								<p className="text-gray-600 flex items-center">
									<FaMapMarkerAlt className="mr-2" /> Lagos, Nigeria
								</p>
								<p className="text-gray-600 flex items-center">
									<FaPhoneAlt className="mr-2" /> +234 70 5678 6543 56
								</p>
								<p className="text-gray-600 flex items-center">
									<FaEnvelope className="mr-2" /> kimscollections@gmail.com
								</p>
							</div>
						</div>
					</div>
				);
			default:
				return null;
		}
	};

	return (
		<div>
			<div className="flex flex-wrap border-b mb-4 bg-purple text-white">
				{tabs.map((tab) => (
					<button
						key={tab}
						onClick={() => setActiveTab(tab)}
						className={`p-4 flex-1 text-center ${
							activeTab === tab ? "border-b-4 border-blue" : ""
						}`}
					>
						{tabIcons[tab]}
						{tab}
					</button>
				))}
			</div>
			<div className="bg-white rounded shadow p-4">{renderContent()}</div>
			{/* More Products by Vendor */}
			<h4 className="text-lg font-bold text-gray-800 mb-4">
				More Products by Vendor
			</h4>
			<div className="flex space-x-4 overflow-x-auto p-2">
				{sellerProducts.map((product) => (
					<div key={product.id} className="min-w-[120px] flex-shrink-0">
						<Image
							src={product.image}
							alt={`Product ${product.id}`}
							width={120}
							height={120}
							className="rounded-lg"
						/>
					</div>
				))}
			</div>
		</div>
	);
};

export default ProductTabs;
