import React, { memo } from "react";
import Link from "next/link";
import Image from "next/image";
import { products } from "./products";
import { FaShoppingCart } from "react-icons/fa";

const FashionHero = () => {
	return (
		<div className="min-h-screen mx-auto p-4 bg-gradient-to-r from-purple to-indigo-500">
			<header className="mb-8 space-x-2">
				<h1 className="text-3xl text-center font-bold text-white">
					Fashion Marketplace
				</h1>
			</header>

			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
				{products.map((product) => (
					<Link
						href={`/marketplace/fashion/${product.id}`}
						key={product.id}
						className="block bg-white rounded-lg shadow hover:shadow-xl transition duration-200 transform hover:-translate-y-1 border border-gray-200 hover:border-blue-500"
					>
						<div className="relative w-full h-56 rounded-t-lg overflow-hidden flex items-center justify-center bg-gray-100">
							<Image
								src={product.image}
								alt={product.title}
								layout="fill"
								objectFit="contain"
								quality={100}
							/>
						</div>

						<div className="p-4">
							<div className="flex justify-between items-center">
								<h3 className="text-purple font-semibold text-xl">
									{product.title}
								</h3>
								<FaShoppingCart className="text-blue text-xl" />
							</div>
							<p className="text-lg font-bold mt-2 text-gray-800">
								{product.price}
							</p>
						</div>
					</Link>
				))}
			</div>
		</div>
	);
};

// Wrapping with `React.memo()` to optimize performance
export default memo(FashionHero);
