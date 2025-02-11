"use client";
import { FaTwitter, FaFacebookF, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
	return (
		<footer className="bg-black py-10 px-6 md:px-16 border-t border-gray-200">
			<div className="flex flex-col md:flex-row justify-between items-start space-y-8 md:space-y-0">
				{/* Left Section - About Suibuy & Social Links */}
				<div className="md:w-1/3">
					<div className="flex items-center space-x-2">
						<span className="text-orange-500 text-2xl font-bold">🛒</span>
						<span className="text-lg font-semibold text-gray-300">Suibuy</span>
					</div>
					<p className="text-gray-300 mt-2">
						Suibuy is a decentralized marketplace empowering small vendors,
						artisans, and local businesses to sell directly to customers with
						zero middlemen and trustless blockchain transactions.
					</p>
					{/* Social Media Icons */}
					<div className="flex space-x-4 mt-3">
						<a href="#" className="text-gray-600 hover:text-blue-500">
							<FaTwitter size={18} />
						</a>
						<a href="#" className="text-gray-600 hover:text-blue-700">
							<FaFacebookF size={18} />
						</a>
						<a href="#" className="text-gray-600 hover:text-blue-600">
							<FaLinkedinIn size={18} />
						</a>
					</div>
				</div>

				{/* Middle Left - Marketplace Features */}
				<div className="md:w-1/6">
					<h4 className="text-lg font-semibold text-gray-300 mb-3">
						Marketplace
					</h4>
					<ul className="space-y-2 text-gray-300">
						<li>
							<a href="#" className="hover:text-gray-800">
								Decentralized Listings
							</a>
						</li>
						<li>
							<a href="#" className="hover:text-gray-800">
								Trustless Payments
							</a>
						</li>
						<li>
							<a href="#" className="hover:text-gray-800">
								Vendor Reputation
							</a>
						</li>
						<li>
							<a href="#" className="hover:text-gray-800">
								On-Chain Authenticity
							</a>
						</li>
					</ul>
				</div>

				{/* Middle Right - About Suibuy */}
				<div className="md:w-1/6">
					<h4 className="text-lg font-semibold text-gray-300 mb-3">
						About Suibuy
					</h4>
					<ul className="space-y-2 text-gray-300">
						<li>
							<a href="#" className="hover:text-gray-800">
								Our Vision
							</a>
						</li>
						<li>
							<a href="#" className="hover:text-gray-800">
								How It Works
							</a>
						</li>
						<li>
							<a href="#" className="hover:text-gray-800">
								Success Stories
							</a>
						</li>
						<li>
							<a href="#" className="hover:text-gray-800">
								Contact Us
							</a>
						</li>
					</ul>
				</div>

				{/* Right - Contact & Support */}
				<div className="md:w-1/6">
					<h4 className="text-lg font-semibold text-gray-300 mb-3">Support</h4>
					<p className="text-gray-500">Need help? Contact us:</p>
					<p className="text-gray-500 mt-2">📞 +1 800-SUI-BUY</p>
					<p className="text-gray-500">📧 support@suibuy.io</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
