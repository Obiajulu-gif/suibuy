
import Image from "next/image";
import { products } from "../products"; // Adjust path as needed
import ProductTabs from "../ProductTabs";
import { FaStar, FaShoppingCart, FaShippingFast, FaCreditCard, FaUndo } from "react-icons/fa";

export default function ProductDetailPage({ params }) {
	const { id } = params;

	// Convert id from string to number, if necessary, depending on how it's stored in products
	const product = products.find((p) => p.id === parseInt(id));

	// Handle case where product is not found
	if (!product) {
		return <p>Product not found</p>;
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
					objectFit="cover"
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
				<h1 className="text-3xl font-bold mb-2 text-purple">{product.title}</h1>
				<p className="text-xl font-bold text-orange-600 mb-4">
					{product.price}
				</p>
				<p className="text-gray-600 mb-4">{product.description}</p>

				<div className="flex items-center mb-4">
					<FaStar className="text-yellow-500" />
					<span className="ml-1">{product.rating}</span>
					<span className="text-gray-600 ml-2">
						({product.reviews} reviews)
					</span>
				</div>

				<div className="mb-4">
					<label className="font-semibold">Size:</label>
					<div className="flex items-center mt-2 space-x-2">
						{(product.sizes || []).map((size) => (
							<button key={size} className="px-3 py-1 border rounded-md">
								{size}
							</button>
						))}
					</div>
				</div>

				<div className="mb-4">
					<label className="font-semibold">Quantity:</label>
					<input
						type="number"
						defaultValue={1}
						min={1}
						className="ml-2 border p-1 rounded-md w-16"
					/>
				</div>

				<button className="w-full bg-purple text-white py-2 rounded-lg mb-4 flex items-center justify-center">
					<FaShoppingCart className="mr-2" />
					Add to cart
				</button>

				<div className="mt-6">
					<h3 className="font-bold flex items-center">
						<FaShippingFast className="mr-2" />
						Shipping Information
					</h3>
					{(product.shippingInfo || []).map((info, index) => (
						<p key={index} className="text-gray-600 text-sm mt-2">
							{info}
						</p>
					))}
				</div>

				<div className="mt-4">
					<h3 className="font-bold flex items-center">
						<FaCreditCard className="mr-2" />
						Payment Information
					</h3>
					<p className="text-gray-600 text-sm">{product.paymentInfo}</p>
				</div>

				<div className="mt-4">
					<h3 className="font-bold flex items-center">
						<FaUndo className="mr-2" />
						Return Information
					</h3>
					<p className="text-gray-600 text-sm">{product.returnInfo}</p>
				</div>
			</div>
			<ProductTabs />
		</div>
	);
}
