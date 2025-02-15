// src/components/ReviewList.js
"use client";
import { FaStar, FaRegThumbsUp, FaRegThumbsDown } from "react-icons/fa";
import Image from "next/image"
const reviews = [
	{
		id: 1,
		name: "Ibukun Daniel",
		date: "20th January, 2024",
		location: "Lagos, Nigeria",
		rating: 0, // rating out of 5
		helpfulCount: 234,
		review:
			"Lorem ipsum dolor sit amet consectetur. Donec enim bibendum sed quam et gravida morbi gravida. Natus auctor at sem nunc dui feugiat et. A donec risus pretium sit dictumst ultricies urna.",
	},
	{
		id: 2,
		name: "Ibukun Daniel",
		date: "20th January, 2024",
		location: "Lagos, Nigeria",
		rating: 0, // rating out of 5
		helpfulCount: 234,
		review:
			"Lorem ipsum dolor sit amet consectetur. Donec enim bibendum sed quam et gravida morbi gravida. Natus auctor at sem nunc dui feugiat et. A donec risus pretium sit dictumst ultricies urna.",
	},
	{
		id: 3,
		name: "Ibukun Daniel",
		date: "20th January, 2024",
		location: "Lagos, Nigeria",
		rating: 0, // rating out of 5
		helpfulCount: 234,
		review:
			"Lorem ipsum dolor sit amet consectetur. Donec enim bibendum sed quam et gravida morbi gravida. Natus auctor at sem nunc dui feugiat et. A donec risus pretium sit dictumst ultricies urna.",
	},
	// Additional review objects can be added here
];

const ReviewList = () => {
  return (
		<div className="p-4 rounded-lg">
			{reviews.map((review) => (
				<div
					key={review.id}
					className="bg-white p-4 rounded-lg shadow-md mb-4 flex flex-col md:flex-row md:justify-between"
				>
					{/* Reviewer's Information */}
					<div className="flex items-center mb-4 md:mb-0">
						<div className="mr-4">
							<Image
								src="/images/easybuylogo.png"
                                alt={`${review.name} avatar`}
                                width={40}
                                height={40}
							/>
						</div>
						<div>
							<h3 className="font-semibold text-gray-800">{review.name}</h3>
							<p className="text-gray-500">{review.date}</p>
							<p className="text-gray-500 flex items-center">
								<span className="mr-1">📍</span>
								{review.location}
							</p>
						</div>
					</div>

					{/* Review Content */}
					<div className="flex-1 md:ml-6">
						{/* Rating Stars */}
						<div className="flex items-center mb-2">
							{[...Array(5)].map((_, index) => (
								<FaStar
									key={index}
									className={
										index < review.rating ? "text-yellow-500" : "text-gray-300"
									}
								/>
							))}
							<span className="text-gray-500 ml-2">
								({review.helpfulCount})
							</span>
						</div>

						{/* Review Text */}
						<p className="text-gray-700 text-sm mb-4">{review.review}</p>

						{/* Helpful Options */}
						<div className="flex items-center text-gray-600">
							<p className="mr-2">Found this helpful?</p>
							<button className="flex items-center border border-gray-300 rounded-full px-3 py-1 mr-2 hover:bg-gray-100 transition">
								<FaRegThumbsUp className="mr-1" /> Yes
							</button>
							<button className="flex items-center border border-gray-300 rounded-full px-3 py-1 hover:bg-gray-100 transition">
								<FaRegThumbsDown className="mr-1" /> No
							</button>
						</div>
					</div>
				</div>
			))}
		</div>
	);
};

export default ReviewList;
