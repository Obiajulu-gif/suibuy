// components/Navbar.js
"use client";
import { ConnectButton } from "@mysten/wallet-kit";
import Link from "next/link";

export default function Navbar() {
	return (
		<nav className="bg-white border-b border-gray-200 fixed w-full z-10">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex justify-between h-16 items-center">
					

					<div className="flex items-center gap-4">
						<ConnectButton className="!bg-indigo-600 !text-white !px-4 !py-2 !rounded-lg hover:!bg-indigo-700" />
					</div>
				</div>
			</div>
		</nav>
	);
}
