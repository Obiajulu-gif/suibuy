// components/PaymentSummary.js
"use client"
import { useState } from "react";
import Image from "next/image";

const PaymentSummary = () => {
	// Mock data for items and payment details
	const [items] = useState([
		{
			id: 1,
			image: "/images/product1.png",
			name: "Nike air Jordan sneakers, 40,46, 48 men size",
			quantity: 1,
			price: 84000,
		},
		{
			id: 2,
			image: "/images/product2.png",
			name: "Smart rechargeable fan green",
			quantity: 2,
			price: 56000,
		},
	]);

	const [paymentMethod] = useState({
		type: "Card",
		cardNumber: "•••• •••• •••• 6543",
		cardType: "mastercard",
	});

	const [totalItems] = useState(3);
	const [itemAmount] = useState(200000);
	const [tax] = useState(1000);
	const totalAmount = itemAmount + tax;

	return (
		<div className="p-4 bg-white rounded-lg shadow-lg">
			<h2 className="text-lg font-bold mb-4">My Payments</h2>

			{/* Item Summary */}
			<div className="space-y-4">
				{items.slice(0, 2).map((item) => (
					<div key={item.id} className="flex items-center justify-between">
						<div className="flex items-center">
							<Image
								src={item.image}
								alt={item.name}
								width={40}
								height={40}
								className="rounded-lg"
							/>
							<p className="ml-2 text-sm">{item.name}</p>
						</div>
						<p className="text-sm">
							{" "}
							{item.quantity} X ₦{item.price.toLocaleString()}
						</p>
					</div>
				))}
				<p className="text-orange-500 text-center">+ 2 more</p>
			</div>

			{/* Payment Details */}
			<div className="mt-4">
				<p className="flex items-center space-x-2 text-sm text-gray-600">
					<span className="material-icons-outlined">shield</span>
					<span>Safe payment checkout</span>
				</p>

				<div className="mt-4 space-y-2">
					<div className="flex items-center justify-between text-sm">
						<span>Payment Method</span>
						<span className="flex items-center">
							<Image
								src={`/${paymentMethod.cardType}.png`}
								alt={paymentMethod.type}
								width={24}
								height={24}
								className="mr-2"
							/>
							{paymentMethod.type} - {paymentMethod.cardNumber}
							<a href="#" className="ml-2 text-orange-500">
								Edit
							</a>
						</span>
					</div>
					<div className="flex items-center justify-between text-sm">
						<span>Item Quantity</span>
						<span>{totalItems} Qty</span>
					</div>
					<div className="flex items-center justify-between text-sm">
						<span>Item Amount</span>
						<span>₦{itemAmount.toLocaleString()}</span>
					</div>
					<div className="flex items-center justify-between text-sm">
						<span>Tax</span>
						<span>₦{tax.toLocaleString()}</span>
					</div>
					<div className="flex items-center justify-between font-bold text-lg">
						<span>Total Amount</span>
						<span>₦{totalAmount.toLocaleString()}</span>
					</div>
				</div>
			</div>

			{/* Complete Payment Button */}
			<button className="w-full mt-6 bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600">
				Complete Payment
			</button>
		</div>
	);
};

export default PaymentSummary;
