// app/electronics/page.js

import Link from "next/link";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import { products } from "./products";

export default function ElectronicsPage() {
  

  return (
		<div className="py-8 px-4 bg-gradient-to-r from-purple to-indigo-500 min-h-screen">
			<h1 className="text-center text-3xl font-bold mb-8 text-white">
				Electronics Marketplace
			</h1>
			<div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
				{products.map((product) => (
					<Link
						href={`/marketplace/electronics/${product.id}`}
						key={product.id}
						className="group block bg-white rounded-lg shadow transition-all hover:shadow-xl overflow-hidden"
					>
						<div className="relative w-full h-56">
							<Image
								src={product.image}
								alt={product.title}
								layout="fill"
								objectFit="cover"
								className="transform group-hover:scale-105 transition-transform duration-300"
								quality={100}
							/>
						</div>
						<div className="p-4 flex flex-col justify-between height-full">
							<div>
								<h3 className="text-purple text-xl font-semibold mb-2">
									{product.title}
								</h3>
								<p className="text-gray-600 text-lg font-bold">
									{product.price}
								</p>
							</div>
							<div className="mt-4 flex justify-end">
								<FaArrowRight className="text-gray-500 group-hover:text-gray-800 transition-colors duration-300" />
							</div>
						</div>
					</Link>
				))}
			</div>
		</div>
	);
}
