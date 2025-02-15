// app/computing/page.js

import Link from "next/link";
import Image from "next/image";

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

export default function ComputingPage() {
	return (
		<div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
			{products.map((product) => (
				<Link
					href={`/computing/${product.id}`}
					key={product.id}
					className="block bg-white rounded-lg shadow-lg p-4 hover:shadow-xl transition-shadow"
				>
					<div className="relative w-full h-56 rounded-lg overflow-hidden">
						<Image
							src={product.image}
							alt={product.title}
							layout="fill"
							objectFit="cover"
							className="w-full h-full"
							quality={100}
						/>
					</div>
					<div className="mt-4">
						<h3 className="text-gray-800 font-semibold">{product.title}</h3>
						<p className="text-lg font-bold mt-2">{product.price}</p>
					</div>
				</Link>
			))}
		</div>
	);
}
