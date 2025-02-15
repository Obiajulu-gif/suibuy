// components/AddressForm.js
"use client"
import { useState } from "react";
import Link from "next/link";

const AddressForm = () => {
	const [address, setAddress] = useState({
		firstName: "",
		lastName: "",
		country: "",
		state: "",
		city: "",
		postalCode: "",
		phoneNumber: "",
		defaultAddress: false,
	});

	const handleChange = (e) => {
		const { name, value, type, checked } = e.target;
		setAddress((prev) => ({
			...prev,
			[name]: type === "checkbox" ? checked : value,
		}));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		// Handle form submission
		console.log("Address saved:", address);
	};

	return (
		<div className="p-4 space-y-8">
			{/* My Address Section */}
			<section className="bg-white rounded-lg shadow p-6">
				<h2 className="text-lg font-bold mb-4">My Address</h2>
				<form
					onSubmit={handleSubmit}
					className="grid grid-cols-1 md:grid-cols-2 gap-4"
				>
					<div>
						<label className="block text-sm font-medium">First Name</label>
						<input
							type="text"
							name="firstName"
							value={address.firstName}
							onChange={handleChange}
							placeholder="First Name here"
							className="w-full border rounded-lg p-2"
							required
						/>
					</div>
					<div>
						<label className="block text-sm font-medium">Last Name</label>
						<input
							type="text"
							name="lastName"
							value={address.lastName}
							onChange={handleChange}
							placeholder="Last Name here"
							className="w-full border rounded-lg p-2"
							required
						/>
					</div>
					<div>
						<label className="block text-sm font-medium">Country</label>
						<select
							name="country"
							value={address.country}
							onChange={handleChange}
							className="w-full border rounded-lg p-2"
							required
						>
							<option value="">Select country</option>
							<option value="Nigeria">Nigeria</option>
							<option value="Ghana">Ghana</option>
							{/* Add more countries as needed */}
						</select>
					</div>
					<div>
						<label className="block text-sm font-medium">State</label>
						<select
							name="state"
							value={address.state}
							onChange={handleChange}
							className="w-full border rounded-lg p-2"
							required
						>
							<option value="">Select state</option>
							<option value="Lagos">Lagos</option>
							<option value="Abuja">Abuja</option>
							{/* Add more states as needed */}
						</select>
					</div>
					<div>
						<label className="block text-sm font-medium">City</label>
						<input
							type="text"
							name="city"
							value={address.city}
							onChange={handleChange}
							placeholder="Select City"
							className="w-full border rounded-lg p-2"
							required
						/>
					</div>
					<div>
						<label className="block text-sm font-medium">Postal Code</label>
						<input
							type="text"
							name="postalCode"
							value={address.postalCode}
							onChange={handleChange}
							placeholder="Postal Code here"
							className="w-full border rounded-lg p-2"
							required
						/>
					</div>
					<div>
						<label className="block text-sm font-medium">Phone Number</label>
						<input
							type="tel"
							name="phoneNumber"
							value={address.phoneNumber}
							onChange={handleChange}
							placeholder="+234 000 000 0000"
							className="w-full border rounded-lg p-2"
							required
						/>
					</div>
					<div className="col-span-1 md:col-span-2 flex items-center mt-2">
						<input
							type="checkbox"
							name="defaultAddress"
							checked={address.defaultAddress}
							onChange={handleChange}
							className="mr-2"
						/>
						<label className="text-sm font-medium">
							Use for default delivery address
						</label>
					</div>
					<div className="col-span-1 md:col-span-2">
						<button
							type="submit"
							className="w-full md:w-auto bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600"
						>
							Save address
						</button>
					</div>
				</form>
			</section>

			{/* My Payments Section */}
			<section className="bg-white rounded-lg shadow p-6">
				<h2 className="text-lg font-bold mb-4">My Payments</h2>
				<p className="text-gray-600">
					No payment information available.{" "}
					<Link href="#" className="text-orange-500 font-semibold">
						Add card info
					</Link>
				</p>
			</section>
		</div>
	);
};

export default AddressForm;
