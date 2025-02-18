"use client";
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const FAQ = () => {
	// FAQ Data
	const faqs = [
		{
			question: "What is Suibuy?",
			answer:
				"A Web3 marketplace designed to help local businesses, artisans, and small vendors sell directly to consumers.",
		},
		{
			question: "How secure is my data?",
			answer:
				"We use blockchain encryption to ensure that your data and transactions remain safe and trustless.",
		},
		{
			question: "Can Suibuy help businesses grow?",
			answer:
				"Yes! We offer microloans, vendor savings, and a decentralized reputation system to help businesses scale.",
		},
	];

	// State for toggling FAQs
	const [openIndex, setOpenIndex] = useState(null);

	const toggleFAQ = (index) => {
		setOpenIndex(openIndex === index ? null : index);
	};

	return (
		<section className="py-16 px-6 md:px-16 bg-gradient-to-r from-[#2a2a72] to-[#009ffd] ">
			<div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-10">
				{/* Left Section - Title & Description */}
				<div className="md:w-1/2">
					<p className="text-3xl text-gray-100 mb-2 flex items-center">
						Frequently Asked Questions
					</p>
					<h2 className="text-4xl font-bold text-gray-200">
						Do You Have Any Questions?
					</h2>
					
					<button className="mt-6 px-6 py-3 bg-purple text-white rounded-lg shadow-lg hover:bg-[#e68a00] transition">
						Contact Us
					</button>
				</div>

				{/* Right Section - FAQ Accordion */}
				<div className="md:w-1/2 space-y-4">
					{faqs.map((faq, index) => (
						<div
							key={index}
							className="bg-white border border-gray-200 rounded-lg shadow-sm"
						>
							<button
								className="w-full flex justify-between items-center px-5 py-4 text-lg font-semibold text-gray-800"
								onClick={() => toggleFAQ(index)}
							>
								{faq.question}
								<FaChevronDown
									className={`transition-transform ${
										openIndex === index
											? "rotate-180 text-[#ff9800]"
											: "text-gray-500"
									}`}
								/>
							</button>
							{openIndex === index && (
								<div className="px-5 pb-4 text-gray-600 text-base">
									{faq.answer}
								</div>
							)}
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default FAQ;
