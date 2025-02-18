"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function CardDesc() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const cards = [
    {
      id: 1,
      title: "Saving",
      description: "Deposit & watch your money grow.",
      image: "/images/vault.png", 
      rotate: -25,
    },
    {
      id: 2,
      title: "Marketplace",
      description: "Shop and earn rewards effortlessly.",
      image: "/images/percentage.png",
      rotate: 0,
    },
    {
      id: 3,
      title: "Loan",
      description: "Instant micro-loans with no hassle.",
      image: "/images/envelop.png", 
      rotate: 25,
    },
  ];

  return (
		<div className="min-h-screen bg-gradient-to-r from-[#000c24] to-[#001e4d] flex flex-col items-center justify-center overflow-hidden">
			<h1 className="text-4xl md:text-5xl font-bold text-white mb-20 text-center px-4">
				SUIBUY is for Marketplace, Saving & Loans
			</h1>

			<div
				ref={ref}
				className="relative w-full max-w-[1200px] h-[400px] flex items-center justify-center"
			>
				<div className="relative w-[300px] h-[400px] perspective-[1000px]">
					{cards.map((card, index) => (
						<motion.div
							key={card.id}
							className="absolute top-0 left-0 w-[300px] h-[400px] rounded-2xl bg-[#031942] 
                         shadow-[0_0_20px_rgba(0,0,0,0.3)] backdrop-blur-sm 
                         flex flex-col items-center justify-center p-6 overflow-hidden origin-[60%_180%]"
							initial={{
								rotateY: 0,
								rotateZ: 0,
								scale: 0.9,
								opacity: 0,
							}}
							animate={
								isInView
									? {
											rotateY: 0,
											rotateZ: card.rotate,
											scale: 1,
											opacity: 1,
											x: card.rotate * 3, // Slight horizontal offset
											transition: {
												duration: 1,
												delay: index * 0.2,
												ease: [0.23, 1, 0.32, 1], // Smooth animation
											},
									  }
									: {}
							}
							style={{
								zIndex: index === 1 ? 3 : 1,
							}}
						>
							{/* Image inside the card */}
							<div className="relative w-full h-2/3 rounded-t-2xl overflow-hidden">
								<Image
									src={card.image}
									alt={card.title}
									layout="fill"
									objectFit="cover"
									className="rounded-t-2xl"
								/>
							</div>

							{/* Text Content */}
							<div className="p-4 text-center">
								<h2 className="text-2xl font-bold text-white mb-2">
									{card.title}
								</h2>
								<p className="text-gray-400">{card.description}</p>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</div>
	);
}
