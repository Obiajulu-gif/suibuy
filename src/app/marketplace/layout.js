import React from "react";
import Header from "./components/Header"; // Ensure correct path
import Head from "next/head"; // ✅ Use Next.js Head component

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
				<Header /> {/* ✅ Ensures Header is always visible */}
				<main>{children}</main> {/* ✅ Ensures all pages render properly */}
			</div>
		</>
	);
}
