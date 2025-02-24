
import "./globals.css";
import WalletWrapper from "./WalletWrapper";
import { Metadata } from "next";
import Head from "next/head";

export const metadata = {
	title: "Suibuy Marketplace",
	description: "Web3-Powered Direct-to-Consumer Marketplace",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<Head>
				<title>{metadata.title}</title>
				<meta name="description" content={metadata.description} />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<body>
				<WalletWrapper>
					<main>{children}</main>
				</WalletWrapper>
			</body>
		</html>
	);
}
