import Image from "next/image"

export function FeaturedProduct() {
  return (
		<section className="bg-black text-white py-12">
			<div className="container mx-auto px-4">
				<div className="flex flex-col md:flex-row items-center">
					<div className="md:w-1/2 mb-8 md:mb-0">
						<h2 className="text-3xl font-bold mb-4">
							Enhance Your Music Experience
						</h2>
						<div className="flex space-x-4 mb-6">
							{["headphones", "speaker", "watch", "mobile"].map(
								(item, index) => (
									<div
										key={index}
										className="w-3 h-3 bg-gray-500 rounded-full"
									/>
								)
							)}
						</div>
						<button className="bg-purple text-white px-6 py-2 rounded-md">
							Buy Now!
						</button>
					</div>
					<div className="md:w-1/2">
						<Image
							src="/images/big-speaker.png"
							alt="JBL Speaker"
							width={500}
							height={300}
							className="object-contain"
						/>
					</div>
				</div>
			</div>
		</section>
	);
}

