"use client"; // Ensure this runs on the client side

import { useEffect, useState } from "react";
import Image from "next/image";
import { Star, ShoppingCart } from "lucide-react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Sample Products
const products = [
	{
		id: 1,
		name: "HAVIT HV-G92 Gamepad",
		price: 120,
		originalPrice: 160,
		rating: 5,
		image: "/images/gamepad.png",
		discount: "-40%",
	},
	{
		id: 2,
		name: "AK-900 Wired Keyboard",
		price: 960,
		originalPrice: 1160,
		rating: 4,
		image: "/images/keyboard.png",
		discount: "-35%",
	},
	{
		id: 3,
		name: "IPS LCD Gaming Monitor",
		price: 370,
		originalPrice: 400,
		rating: 5,
		image: "/images/monitor.png",
		discount: "-30%",
	},
	{
		id: 4,
		name: "S Series Comfort Chair",
		price: 375,
		originalPrice: 400,
		rating: 4,
		image: "/images/chair.png",
		discount: "-25%",
	},
];

// Countdown Timer Logic (FIXED)
const getTimeLeft = (targetDate) => {
	const now = new Date().getTime();
	const difference = targetDate - now;

	if (difference <= 0)
		return { days: "00", hours: "00", minutes: "00", seconds: "00" };

	return {
		days: String(Math.floor(difference / (1000 * 60 * 60 * 24))).padStart(
			2,
			"0"
		),
		hours: String(Math.floor((difference / (1000 * 60 * 60)) % 24)).padStart(
			2,
			"0"
		),
		minutes: String(Math.floor((difference / (1000 * 60)) % 60)).padStart(
			2,
			"0"
		),
		seconds: String(Math.floor((difference / 1000) % 60)).padStart(2, "0"),
	};
};

export function FlashSales() {
	const targetTime = new Date().getTime() + 48 * 60 * 60 * 1000; // 48 hours from now
	const [timeLeft, setTimeLeft] = useState(getTimeLeft(targetTime));

	useEffect(() => {
		const interval = setInterval(() => {
			setTimeLeft(getTimeLeft(targetTime));
		}, 1000);
		return () => clearInterval(interval);
	}, []);

	// Slider Settings
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 4,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 3000,
		arrows: true,
		responsive: [
			{ breakpoint: 1024, settings: { slidesToShow: 3, slidesToScroll: 1 } },
			{ breakpoint: 768, settings: { slidesToShow: 2, slidesToScroll: 1 } },
			{ breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } },
		],
	};

	return (
		<section className="py-12 bg-black text-white">
			<div className="container mx-auto px-4">
				<div className="flex items-center justify-between mb-8">
					{/* Left - Flash Sales Heading */}
					<div>
						<h2 className="text-[#009ffd] font-bold mb-1">Today's</h2>
						<h3 className="text-3xl font-semibold">Flash Sales</h3>
					</div>

					{/* Right - Countdown Timer */}
					<div className="flex space-x-4">
						{["Days", "Hours", "Minutes", "Seconds"].map((label, i) => (
							<div key={label} className="flex flex-col items-center">
								<div className="text-2xl font-bold bg-[#2a2a72] text-white px-3 py-1 rounded">
									{Object.values(timeLeft)[i]}
								</div>
								<span className="text-xs">{label}</span>
							</div>
						))}
					</div>
				</div>

				{/* Product Carousel */}
				<Slider {...settings}>
					{products.map((product) => (
						<div key={product.id} className="p-4">
							<div className="relative bg-white rounded-lg p-4 shadow-lg text-black">
								{/* Discount Badge */}
								<div className="absolute top-3 left-3 bg-red-500 text-white px-2 py-1 rounded-full text-xs z-10">
									{product.discount}
								</div>

								{/* Product Image */}
								<div className="relative aspect-square bg-gray-200 rounded-lg overflow-hidden">
									<Image
										src={product.image}
										alt={product.name}
										fill
										className="object-cover"
									/>
								</div>

								{/* Product Details */}
								<div className="mt-4">
									<h4 className="font-medium text-lg">{product.name}</h4>
									<div className="flex items-center space-x-2">
										<span className="text-red-500 font-bold">
											${product.price}
										</span>
										<span className="text-gray-500 line-through">
											${product.originalPrice}
										</span>
									</div>

									{/* Rating */}
									<div className="flex items-center space-x-1 mt-2">
										{Array.from({ length: product.rating }).map((_, i) => (
											<Star
												key={i}
												className="w-4 h-4 text-yellow-400 fill-current"
											/>
										))}
									</div>

									{/* Add to Cart Button */}
									<button className="mt-4 w-full bg-[#009ffd] hover:bg-[#2a2a72] text-white font-bold py-2 rounded-lg flex items-center justify-center space-x-2">
										<ShoppingCart className="w-5 h-5" />{" "}
										{/* Shopping Cart Icon */}
										<span>Add To Cart</span>
									</button>
								</div>
							</div>
						</div>
					))}
				</Slider>

				{/* View All Products Button */}
				<div className="flex justify-center mt-8">
					<button className="bg-[#2a2a72] hover:bg-red-700 text-white px-6 py-3 rounded-lg text-lg font-bold">
						View All Products
					</button>
				</div>
			</div>
		</section>
	);
}
