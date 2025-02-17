import React from "react";
import Head from "next/head"; // ✅ Use Next.js Head component
import Navbar from "./components/navbar"
export const metadata = {
	title: "Marketplace - E-commerce",
	description: "Your one-stop shop for all things exclusive",
};

export default function RootLayout({ children }) {
	return (
		<>
			<Head>
				<title>{metadata.title}</title>
				<meta name="description" content={metadata.description} />
			</Head>
			<div>
				<Navbar /> 
				<main>{children}</main> {/* ✅ Ensures all pages render properly */}
			</div>
		</>
	);
}
