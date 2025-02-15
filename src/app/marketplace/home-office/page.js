import Link from "next/link";
import Image from "next/image";

// Dummy product data for Home & Office
const products = [
    {
        id: 1,
        title: "Office Setup",
        image: "/images/home-office/flower.jpg",  // Use the uploaded image paths
        price: "₦150,000",
    },
    {
        id: 2,
        title: "Modern Lamp",
        image: "/images/home-office/office-lamp.jpg",
        price: "₦25,000",
    },
    {
        id: 3,
        title: "Stylish Office Chair",
        image: "/images/home-office/officechair.jpg",
        price: "₦45,000",
    },
    {
        id: 4,
        title: "Wall Clock",
        image: "/images/home-office/clock.jpg",
        price: "₦10,000",
    },
    {
        id: 5,
        title: "Living Room Setup",
        image: "/images/home-office/tv.jpg",
        price: "₦200,000",
    },
    {
        id: 6,
        title: "Flower Pot",
        image: "/images/home-office/pot-of-flower.jpg",
        price: "₦5,000",
    },
];

export default function HomeOfficePage() {
    return (
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
				{products.map((product) => (
					<Link
						href={`/home-office/${product.id}`} // Dynamic link to the product page
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
