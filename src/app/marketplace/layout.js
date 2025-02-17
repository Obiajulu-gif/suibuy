import React from "react";
import Header from "./components/Header";  // ✅ If layout.js is inside src/app/marketplace

export const metadata = {
	title: "Marketplace - E-commerce",
	description: "Your one-stop shop for all things exclusive",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<head>
				<title>{metadata.title}</title>
				<meta name="description" content={metadata.description} />
			</head>
			<body>
				<Header /> {/* ✅ Ensures Header is always visible */}
				<main>{children}</main> {/* ✅ Ensures all pages render properly */}
			</body>
		</html>
	);
}
