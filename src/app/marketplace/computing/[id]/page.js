// app/computing/[id]/page.js

import Image from "next/image";

export default function ProductDetailPage({ params }) {
	const { id } = params;
	const products = [
		{
			id: 1,
			title: "AMD Ryzen AI Chip",
			image: "/images/computing/ryzen.jpg",
			price: "₦450,000",
			description:
				"Powerful AMD Ryzen AI processing unit for advanced computing.",
		},
		{
			id: 2,
			title: "Circuit Board",
			image: "/images/computing/border.jpg",
			price: "₦150,000",
			description: "High-performance circuit board for modern applications.",
		},
		{
			id: 3,
			title: "AMD Ryzen AI 300 Chip",
			image: "/images/computing/ryzenai.jpg",
			price: "₦500,000",
			description: "The next generation of AI chips for computing.",
		},
		{
			id: 4,
			title: "Programming Workstation",
			image: "/images/computing/computer.jpg",
			price: "₦250,000",
			description: "Workstation setup for developers and programmers.",
		},
		{
			id: 5,
			title: "Transistor Assembly",
			image: "/images/computing/transitor.jpg",
			price: "₦120,000",
			description: "Precise transistor assembly for custom electronics.",
		},
		{
			id: 6,
			title: "Processing Chip",
			image: "/images/computing/chip.jpg",
			price: "₦300,000",
			description: "High-end processing chip for advanced systems.",
		},
	];

	const product = products.find((p) => p.id === parseInt(id));

	if (!product) {
		return <p>Product not found</p>;
	}

	return (
		<div className="max-w-4xl mx-auto p-4 flex flex-wrap bg-gray-50 rounded-lg shadow-lg">
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
			</div>

			<div className="w-full md:w-1/2 md:pl-8">
				<h1 className="text-3xl font-bold mb-2">{product.title}</h1>
				<p className="text-xl font-bold text-orange-600 mb-4">
					{product.price}
				</p>
				<p className="text-gray-600 mb-4">{product.description}</p>

				<button className="w-full bg-orange-500 text-white py-2 rounded-lg mb-4">
					Add to cart
				</button>

				{/* Add shipping, payment, and return info here as needed */}
			</div>
		</div>
	);
}
