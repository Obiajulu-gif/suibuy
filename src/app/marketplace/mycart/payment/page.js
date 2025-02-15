// eslint-disable-next-line react/no-unescaped-entities
"use client";
import Link from "next/link";
import { useState } from "react";

const CartCheckoutPage = () => {
	const [subtotal] = useState(50000); // Example subtotal amount

	return (
		<div className="p-4 space-y-8 md:flex md:space-y-0 md:space-x-8">
			{/* Left Column - Address and Payment Information */}
			<div className="md:w-2/3 space-y-4">
				{/* Address Section */}
				<section className="bg-white rounded-lg shadow p-4">
					<h2 className="text-lg font-bold mb-2">My Address</h2>
					<p className="text-gray-600">
						No address information available.{" "}
						<Link
							href="/mycart/payment/address"
							className="text-orange-500 font-semibold"
						>
							Add an address
						</Link>
					</p>
				</section>

				{/* Payment Information Section */}
				<section className="bg-white rounded-lg shadow p-4">
					<h2 className="text-lg font-bold mb-2">My Payments</h2>
					<p className="text-gray-600">
						No payment information available.{" "}
						<Link
							href="/mycart/payment/"
							className="text-orange-500 font-semibold"
						>
							Add card info
						</Link>
					</p>
				</section>
			</div>

			{/* Right Column - Order Summary */}
			<div className="md:w-1/3 bg-white rounded-lg shadow p-4">
				<h2 className="text-lg font-bold mb-4">Order Summary</h2>
				<div className="flex justify-between mb-2">
					<span>Item's Total</span>
					<span>2 Qty</span>
				</div>
				<div className="flex justify-between mb-2">
					<span>VAT</span>
					<span>₦0.00</span>
				</div>
				<div className="flex justify-between font-bold text-lg mb-4">
					<span>Sub Total</span>
					<span>₦{subtotal.toLocaleString()}</span>
				</div>
				<button className="bg-orange-500 text-white w-full py-2 rounded-lg hover:bg-orange-600">
					Proceed to checkout
				</button>
			</div>
		</div>
	);
};

export default CartCheckoutPage;
