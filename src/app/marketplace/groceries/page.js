import Link from "next/link";
import Image from "next/image";
import { FaShoppingBag } from "react-icons/fa"; // added product icon
import { products } from "./products";

export default function GroceriesPage() {
	return (
		<div className="min-h-screen bg-gradient-to-r from-purple to-indigo-500 py-12">
			<div className="container mx-auto px-4">
				<header className="mb-12 text-center">
					<h1 className="text-4xl font-extrabold text-white flex justify-center items-center gap-4">
						Groceries Gallery
					</h1>
					<p className="text-lg text-gray-200 mt-2">
						Discover our premium selection of groceries
					</p>
				</header>
				<div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
					{products.map((product) => (
						<Link
							href={`/marketplace/groceries/${product.id}`}
							key={product.id}
							className="group block bg-white rounded-xl overflow-hidden shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl"
						>
							<div className="relative h-56">
								<Image
									src={product.image}
									alt={product.title}
									fill
									className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
									quality={100}
								/>
							</div>
							<div className="p-6">
								<div className="flex items-center gap-2 mb-2">
									<FaShoppingBag size={20} className="text-green-500" />{" "}
									{/* product icon */}
									<h3 className="text-xl font-semibold text-purple-700 group-hover:text-indigo-600 transition-colors">
										{product.title}
									</h3>
								</div>
								<p className="text-lg font-bold text-gray-800 mb-2">
									{product.price}
								</p>
								<p className="text-gray-600 line-clamp-3">
									{product.description}
								</p>
							</div>
						</Link>
					))}
				</div>
			</div>
		</div>
	);
}