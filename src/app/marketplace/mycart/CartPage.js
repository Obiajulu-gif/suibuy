// eslint-disable-next-line react/no-unescaped-entities
"use client";
import { useState } from "react";
import Image from "next/image";
import { FaTrashAlt, FaHeart } from "react-icons/fa";
import Link from "next/link";

const initialCartItems = [
	{
		id: 1,
		image: "/images/product1.png",
		title: "Nike air Jordan sneakers, 40,46, 48 men size",
		price: 84000,
		quantity: 1,
		size: "X",
	},
	{
		id: 2,
		image: "/images/product2.png",
		title: "Nike air Jordan sneakers, 40,46, 48 men size",
		price: 84000,
		quantity: 1,
		size: "X",
	},
	{
		id: 3,
		image: "/images/product3.png",
		title: "Nike air Jordan sneakers, 40,46, 48 men size",
		price: 84000,
		quantity: 1,
		size: "X",
	},
];

const CartPage = () => {
	const [cartItems, setCartItems] = useState(initialCartItems);

	const updateQuantity = (id, newQuantity) => {
		setCartItems((items) =>
			items.map((item) =>
				item.id === id ? { ...item, quantity: newQuantity } : item
			)
		);
	};

	const handleSizeChange = (id, newSize) => {
		setCartItems((items) =>
			items.map((item) => (item.id === id ? { ...item, size: newSize } : item))
		);
	};

	const handleRemoveItem = (id) => {
		setCartItems((items) => items.filter((item) => item.id !== id));
	};

	const subtotal = cartItems.reduce(
		(total, item) => total + item.price * item.quantity,
		0
	);

	return (
		<div className="p-4 md:flex md:space-x-8">
			{/* Cart Items Section */}
			<div className="md:w-3/4 space-y-6">
				<h1 className="text-2xl font-bold mb-4">My Cart</h1>
				{cartItems.map((item) => (
					<div
						key={item.id}
						className="bg-white rounded-lg shadow-lg p-4 flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-4"
					>
						<Image
							src={item.image}
							alt={item.title}
							width={100}
							height={100}
							className="rounded-md"
						/>
						<div className="flex-1">
							<h2 className="font-semibold text-lg">{item.title}</h2>
							<p className="text-orange-500 font-bold mt-2">
								₦{item.price.toLocaleString()}
							</p>
						</div>
						<div className="flex flex-col md:flex-row md:space-x-4 items-center">
							<div className="flex items-center">
								<span className="mr-2">Quantity</span>
								<input
									type="number"
									value={item.quantity}
									min="1"
									onChange={(e) =>
										updateQuantity(item.id, parseInt(e.target.value))
									}
									className="border rounded p-1 w-16 text-center"
								/>
							</div>
							<div className="flex items-center mt-2 md:mt-0">
								<span className="mr-2">Size</span>
								<select
									value={item.size}
									onChange={(e) => handleSizeChange(item.id, e.target.value)}
									className="border rounded p-1"
								>
									<option value="S">S</option>
									<option value="M">M</option>
									<option value="L">L</option>
									<option value="XL">XL</option>
								</select>
							</div>
						</div>
						<div className="flex items-center space-x-4 mt-2 md:mt-0">
							<button
								onClick={() => handleRemoveItem(item.id)}
								className="text-red-500 hover:text-red-700 flex items-center space-x-1"
							>
								<FaTrashAlt /> <span>Delete Item</span>
							</button>
							<button className="text-gray-500 hover:text-gray-700 flex items-center space-x-1">
								<FaHeart /> <span>Save for later</span>
							</button>
						</div>
					</div>
				))}
			</div>

			{/* Order Summary Section */}
			<div className="md:w-1/4 mt-6 md:mt-0">
				<div className="bg-white rounded-lg shadow-lg p-4">
					<h2 className="text-xl font-bold mb-4">Order Summary</h2>
					<div className="flex justify-between mb-2">
						<span>Item's Total</span>
						<span>{cartItems.length} Qty</span>
					</div>
					<div className="flex justify-between mb-2">
						<span>VAT</span>
						<span>₦0.00</span>
					</div>
					<div className="flex justify-between font-bold text-lg">
						<span>Sub Total</span>
						<span>₦{subtotal.toLocaleString()}</span>
					</div>
					<Link href="/mycart/payment">
						<button className="bg-orange-500 text-white w-full py-2 rounded-lg mt-4 hover:bg-orange-600">
							Proceed to checkout
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default CartPage;
