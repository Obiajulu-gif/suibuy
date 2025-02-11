"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState, useCallback } from "react";
import Particles from "react-tsparticles";
import { particlesOptions } from "./particlesConfig";
import { loadSlim } from "tsparticles-slim";export default function Hero() {
	  const particlesInit = useCallback(async (engine) => {
			await loadSlim(engine);
		}, []);

	return (
		<section className="w-full flex flex-col items-center justify-center py-8 px-6 bg-black">
			{/* Hero Content */}
			<div className="relative max-w-7xl w-full bg-gradient-to-r from-[#2a2a72] to-[#009ffd] rounded-3xl p-14 text-white overflow-hidden">
				{/* Particle Background */}
				<Particles
					id="tsparticles"
					init={particlesInit}
					options={particlesOptions}
					className="absolute inset-0 z-0"
				/>

				{/* Floating Cube */}
				<motion.div
					animate={{ y: [-5, 5, -5] }}
					transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
					className="absolute top-1 right-8 hidden md:block"
				>
					<Image src="/images/hero.png" alt="cube" width={450} height={450} />
				</motion.div>

				{/* Hero Content */}
				<div className="relative z-10">
					<h1 className="text-4xl md:text-6xl font-extrabold uppercase">
						Sell Directly <br />
						Earn More.
					</h1>
					<p className="mt-4 text-lg text-gray-200 max-w-xl">
						Cut out the middlemen, reduce fees, and take full control of your
						business with blockchain-powered trust and instant payments.
					</p>

					{/* Explore Button */}
					<Link
						href="/explore"
						className="mt-6 inline-flex items-center bg-black text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-gray-800 transition"
					>
						Start Selling Now
					</Link>
				</div>
			</div>

			{/* Stats Section */}
			<div className="max-w-5xl w-full mt-6 bg-black p-4 rounded-2xl flex justify-between items-center shadow-lg">
				<StatBox number={40000} label="Reach" />
				<StatBox number={2000} label="Community" />
				<StatBox number={100} label="Validators" />
			</div>
		</section>
	);
}

// Reusable Component for Animated Stats
function StatBox({ number, label }) {
	const [count, setCount] = useState(0);

	useEffect(() => {
		let start = 0;
		const end = number;
		const duration = 2000; // Animation duration in ms
		const increment = (end - start) / (duration / 30); // Adjust speed

		const timer = setInterval(() => {
			start += increment;
			if (start >= end) {
				start = end;
				clearInterval(timer);
			}
			setCount(Math.floor(start));
		}, 30);

		return () => clearInterval(timer);
	}, [number]);

	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.8 }}
			className="flex-1 text-center text-white py-6 px-4 bg-gradient-to-r from-[#111] to-[#222] rounded-xl mx-2"
		>
			<h2 className="text-2xl font-bold">{count.toLocaleString()}+</h2>
			<p className="text-gray-400 uppercase">{`{ ${label} }`}</p>
		</motion.div>
	);
}
