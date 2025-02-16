import Image from "next/image";
import { products } from "../products"; // Ensure the correct path
import ProductTabs from "../ProductTabs";
import {
	FaStar,
	FaShoppingCart,
	FaShippingFast,
	FaCreditCard,
	FaUndo,
} from "react-icons/fa";

export default function ProductDetailPage({ params }) {
	const { id } = params;

	// Convert id to a number and find the product
	const product = products.find((p) => p.id === parseInt(id));

	// Handle case where product is not found
	if (!product) {
		return (
			<p className="text-center text-red-500 text-lg">Product not found</p>
		);
	}

	return (
		<div className="max-w-4xl mx-auto p-4 flex flex-wrap bg-gray-50 rounded-lg shadow-lg">
			{/* Product Image and Thumbnails */}
			<div className="w-full md:w-1/2 mb-4 md:mb-0">
				<Image
					src={product.image}
					alt={product.title}
					width={500}
					height={500}
					className="rounded-lg"
					quality={100}
				/>
				<div className="flex mt-4 space-x-2">
					<Image
						src={product.image}
						alt={product.title}
						width={60}
						height={60}
						className="border rounded-lg"
					/>
				</div>
			</div>

			{/* Product Details */}
			<div className="w-full md:w-1/2 md:pl-8">
				<h1 className="text-3xl font-bold mb-2 text-[#2a2a72]">
					{product.title}
				</h1>
				<p className="text-xl font-bold text-orange-600 mb-4">
					{product.price}
				</p>
				<p className="text-gray-600 mb-4">{product.description}</p>

				{/* Ratings */}
				<div className="flex items-center mb-4">
					<FaStar className="text-yellow-500" />
					<span className="ml-1">{product.rating || "No ratings"}</span>
					<span className="text-gray-600 ml-2">
						({product.reviews || 0} reviews)
					</span>
				</div>

				{/* Sizes Section (Fix for `map` error) */}
				{product.sizes && product.sizes.length > 0 && (
					<div className="mb-4">
						<label className="font-semibold">Size:</label>
						<div className="flex items-center mt-2 space-x-2">
							{product.sizes.map((size) => (
								<button key={size} className="px-3 py-1 border rounded-md">
									{size}
								</button>
							))}
						</div>
					</div>
				)}

				{/* Quantity Input */}
				<div className="mb-4">
					<label className="font-semibold">Quantity:</label>
					<input
						type="number"
						defaultValue={1}
						min={1}
						className="ml-2 border p-1 rounded-md w-16"
					/>
				</div>

				{/* Add to Cart Button */}
				<button className="w-full bg-[#009ffd] hover:bg-[#2a2a72] text-white py-2 rounded-lg mb-4 flex items-center justify-center">
					<FaShoppingCart className="mr-2" />
					Add to cart
				</button>

				{/* Shipping Information (Fix for undefined) */}
				{product.shippingInfo && product.shippingInfo.length > 0 && (
					<div className="mt-6">
						<h3 className="font-bold flex items-center">
							<FaShippingFast className="mr-2" />
							Shipping Information
						</h3>
						{product.shippingInfo.map((info, index) => (
							<p key={index} className="text-gray-600 text-sm mt-2">
								{info}
							</p>
						))}
					</div>
				)}

				{/* Payment Information (Fix for undefined) */}
				{product.paymentInfo && (
					<div className="mt-4">
						<h3 className="font-bold flex items-center">
							<FaCreditCard className="mr-2" />
							Payment Information
						</h3>
						<p className="text-gray-600 text-sm">{product.paymentInfo}</p>
					</div>
				)}

				{/* Return Policy (Fix for undefined) */}
				{product.returnInfo && (
					<div className="mt-4">
						<h3 className="font-bold flex items-center">
							<FaUndo className="mr-2" />
							Return Information
						</h3>
						<p className="text-gray-600 text-sm">{product.returnInfo}</p>
					</div>
				)}
			</div>

			<ProductTabs />
		</div>
	);
}
