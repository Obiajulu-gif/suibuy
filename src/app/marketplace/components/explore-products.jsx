import Image from "next/image";
import { Star } from "lucide-react";

const products = [
	{
		name: "Breed Dry Dog Food",
		price: 100,
		rating: 5,
		image: "/images/marketplace/dog-food.png",
	},
	{
		name: "CANON EOS DSLR Camera",
		price: 360,
		rating: 4,
		image: "/images/marketplace/camera.png",
	},
	{
		name: "ASUS FHD Gaming Laptop",
		price: 700,
		rating: 5,
		image: "/images/marketplace/laptop.png",
	},
	{
		name: "Curology Product Set",
		price: 500,
		rating: 4,
		image: "/images/marketplace/curology.png",
	},
	{
		name: "Kids Electric Car",
		price: 960,
		rating: 5,
		image: "/images/marketplace/car.png",
		new: true,
	},
	{
		name: "Jr. Zoom Soccer Cleats",
		price: 1160,
		rating: 5,
		image: "/images/marketplace/shoe.png",
	},
	{
		name: "GP11 Shooter USB Gamepad",
		price: 660,
		rating: 4,
		image: "/images/marketplace/gamepad.png",
		new: true,
	},
	{
		name: "Quilted Satin Jacket",
		price: 660,
		rating: 4,
		image: "/images/marketplace/jacket.png",
	},
];

export function ExploreProducts() {
	return (
		<section className="py-12 bg-white">
			<div className="container mx-auto px-4">
				{/* Header Section */}
				<div className="flex items-center justify-between mb-8">
					<h2 className="text-3xl font-bold text-purple">
						Explore Our Products
					</h2>
					<div className="flex space-x-2">
						<button className="p-2 border border-gray-300 rounded-full hover:bg-gray-100">
							←
						</button>
						<button className="p-2 border border-gray-300 rounded-full hover:bg-gray-100">
							→
						</button>
					</div>
				</div>

				{/* Product Grid */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
					{products.map((product, index) => (
						<div
							key={index}
							className="group p-4 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition"
						>
							{/* Product Image Section */}
							<div className="relative aspect-square bg-gray-100 rounded-lg overflow-hidden flex items-center justify-center">
								<Image
									src={product.image}
									alt={product.name}
									width={200}
									height={200}
									className="object-cover"
								/>
								{/* Wishlist & Quick View Icons */}
								<div className="absolute top-3 right-3 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
									<button className="p-1.5 bg-white rounded-full shadow">
										❤️
									</button>
									<button className="p-1.5 bg-white rounded-full shadow">
										👁️
									</button>
								</div>
								{/* New Badge */}
								{product.new && (
									<div className="absolute top-3 left-3 bg-green-500 text-white px-2 py-1 text-xs rounded">
										NEW
									</div>
								)}
								{/* Add to Cart Button */}
								{index === 1 && (
									<button className="absolute bottom-2 left-1/2 transform -translate-x-1/2 px-4 py-2 bg-black text-white text-sm rounded-md">
										Add To Cart
									</button>
								)}
							</div>

							{/* Product Info */}
							<div className="mt-4 text-center space-y-2">
								<h3 className="font-medium text-purple">{product.name}</h3>
								<div className="text-blue font-semibold">
									${product.price}
								</div>
								{/* Star Ratings */}
								<div className="flex justify-center space-x-1">
									{Array.from({ length: product.rating }).map((_, i) => (
										<Star key={i} className="w-4 h-4 text-yellow-400" />
									))}
								</div>
							</div>
						</div>
					))}
				</div>

				{/* View All Button */}
				<div className="text-center mt-8">
					<button className="bg-purple text-white px-6 py-2 rounded-md hover:bg-red-600 transition">
						View All Products
					</button>
				</div>
			</div>
		</section>
	);
}
