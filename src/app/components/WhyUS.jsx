"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaStore, FaPiggyBank, FaMoneyCheckAlt } from "react-icons/fa"; // ✅ Import React Icons

export default function WhyUs() {
	return (
		<div className="min-h-screen bg-gradient-to-r from-[#000c24] to-[#001e4d] flex flex-col items-center justify-center p-6">
			<div className="w-full max-w-6xl">
				{/* Section Title */}
				<h1 className="text-4xl md:text-5xl font-extrabold text-white text-center mb-12 uppercase">
					Our Mission
				</h1>

				{/* Content Card */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					className="bg-[#001233]/70 backdrop-blur-md rounded-3xl p-8 md:p-12 relative shadow-xl"
				>
					<div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
						{/* Left Side - Text Content */}
						<div className="flex-1 space-y-6">
							<h2 className="text-[#3b82f6] text-2xl font-semibold uppercase tracking-wide">
								The Future of Digital Commerce
							</h2>
							<h3 className="text-3xl md:text-4xl font-bold text-white leading-snug">
								Marketplace, Savings & Loans – All in One Platform!
							</h3>
							<p className="text-gray-300 text-lg leading-relaxed">
								SUIBUY is more than just a platform – it's an ecosystem designed
								to <span className="font-bold text-white">empower users</span>.
								Whether you want to{" "}
								<span className="font-bold text-white">shop smarter</span>,
								<span className="font-bold text-white"> save securely</span>, or{" "}
								<span className="font-bold text-white">
									access instant loans
								</span>
								, we provide a seamless experience.
							</p>

							{/* Feature List with Icons */}
							<ul className="text-gray-300 text-lg space-y-4">
								<li className="flex items-center gap-3">
									<FaStore className="text-[#3b82f6] text-2xl" />
									<span className="font-bold text-white">
										Decentralized Marketplace
									</span>{" "}
									– Secure and seamless shopping.
								</li>
								<li className="flex items-center gap-3">
									<FaPiggyBank className="text-[#3b82f6] text-2xl" />
									<span className="font-bold text-white">Save & Earn</span> –
									Deposit funds and grow your wealth.
								</li>
								<li className="flex items-center gap-3">
									<FaMoneyCheckAlt className="text-[#3b82f6] text-2xl" />
									<span className="font-bold text-white">Quick Loans</span> – No
									paperwork, no hassle – just instant access.
								</li>
							</ul>
						</div>

						{/* Right Side - Image Section */}
						<motion.div
							initial={{ scale: 0.8, rotate: -10 }}
							animate={{ scale: 1, rotate: 0 }}
							transition={{
								duration: 0.6,
								delay: 0.3,
								ease: "easeOut",
							}}
							className="w-48 h-48 md:w-64 md:h-64 relative flex-shrink-0"
						>
							<div className="relative w-full h-full rounded-2xl overflow-hidden">
								<Image
									src="/images/sheild.png" // ✅ Upload your image to /public/images/
									alt="Secure & Trusted"
									fill
									className="object-cover bg-transparents"
								/>
							</div>
						</motion.div>
					</div>
				</motion.div>
			</div>
		</div>
	);
}
