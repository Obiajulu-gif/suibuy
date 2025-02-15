import Image from "next/image";

const arrivals = [
	{
		title: "PlayStation 5",
		description: "Black and White version of the PS5 coming out on sale.",
		image: "/images/marketplace/playstation.png",
		size: "lg",
	},
	{
		title: "Women's Collections",
		description: "Featured woman collections that give you another vibe.",
		image: "/images/marketplace/woman-collection.png",
		size: "md",
	},
	{
		title: "Speakers",
		description: "Amazon wireless speakers",
		image: "/images/marketplace/three-speaker.png",
		size: "sm",
	},
	{
		title: "Perfume",
		description: "GUCCI INTENSE OUD EDP",
		image: "/images/marketplace/perfume.png",
		size: "sm",
	},
];

export function NewArrival() {
	return (
		<section className="py-12 bg-gray-50">
			<div className="container mx-auto px-6">
				{/* Header */}
				<div className="mb-8">
					<span className="text-purple font-medium text-sm uppercase">
						Featured
					</span>
					<h2 className="text-3xl font-bold text-gray-900">New Arrival</h2>
				</div>

				{/* Grid Layout */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					{/* Large PlayStation 5 Card */}
					<div className="lg:col-span-1 relative overflow-hidden rounded-lg">
						<Image
							src={arrivals[0].image}
							alt={arrivals[0].title}
              width={700}
              height={700}
							className="object-cover p-12"
						/>
						<div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-end p-6 text-white">
							<h3 className="text-2xl font-semibold">{arrivals[0].title}</h3>
							<p className="text-sm">{arrivals[0].description}</p>
							<a href="#" className="mt-3 text-sm underline">
								Shop Now
							</a>
						</div>
					</div>

					{/* Other Cards */}
					<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
						{arrivals.slice(1).map((item, index) => (
							<div key={index} className="relative overflow-hidden rounded-lg">
								<Image
									src={item.image}
									alt={item.title}
									fill
									className="object-cover"
								/>
								<div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-end p-4 text-white">
									<h3 className="text-lg font-semibold">{item.title}</h3>
									<p className="text-xs">{item.description}</p>
									<a href="#" className="mt-2 text-xs underline">
										Shop Now
									</a>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
