
import React from "react";

const ProfileDetails = () => {
	return (
		<div className="p-2  min-h-screen flex items-center justify-center">

			<div className="w-full max-w-4xl bg-white p-2 rounded-lg ">
				<h2 className="text-2xl font-semibold mb-6">Account Information</h2>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
					{/* Personal Information Section */}
					<div className="text-gray-900">
						<h3 className="text-xl font-bold mb-4">Personal Information</h3>
						<p className="text-sm mb-4">
							This includes your personal information like names, phone number,
							and other information.
						</p>
						<div className="space-y-4">
							<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
								<input
									type="text"
									placeholder="First Name"
									className="p-3 border rounded-lg w-full focus:outline-none focus:border-orange-500"
								/>
								<input
									type="text"
									placeholder="Last Name"
									className="p-3 border rounded-lg w-full focus:outline-none focus:border-orange-500"
								/>
							</div>
							<input
								type="text"
								placeholder="Phone Number"
								className="p-3 border rounded-lg w-full focus:outline-none focus:border-orange-500"
							/>
							<input
								type="email"
								placeholder="Email Address"
								className="p-3 border rounded-lg w-full focus:outline-none focus:border-orange-500"
							/>
							<button className="bg-orange-500 text-white w-full py-3 rounded-lg hover:bg-orange-600 transition-colors">
								Save
							</button>
						</div>
					</div>

					{/* Address Information Section */}
					<div className="text-gray-900">
						<h3 className="text-xl font-bold mb-4">Address Information</h3>
						<p className="text-sm mb-4">
							This includes your default and saved shipping address information.
						</p>
						<div className="space-y-4">
							<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
								<select className="p-3 border rounded-lg w-full focus:outline-none focus:border-orange-500">
									<option>Nigeria</option>
									{/* Other countries can be added here */}
								</select>
								<select className="p-3 border rounded-lg w-full focus:outline-none focus:border-orange-500">
									<option>Lagos</option>
									{/* Other states can be added here */}
								</select>
							</div>
							<input
								type="text"
								placeholder="City"
								className="p-3 border rounded-lg w-full focus:outline-none focus:border-orange-500"
							/>
							<input
								type="text"
								placeholder="Postal Code"
								className="p-3 border rounded-lg w-full focus:outline-none focus:border-orange-500"
							/>
							<button className="bg-orange-500 text-white w-full py-3 rounded-lg hover:bg-orange-600 transition-colors">
								Save
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProfileDetails;
