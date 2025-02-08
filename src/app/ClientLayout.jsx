"use client"; // Ensure this file is a Client Component

import { WalletKitProvider } from "@mysten/wallet-kit";
import Navbar from "./components/Navbar";
export default function ClientLayout({ children }) {
	return <WalletKitProvider>
		<Navbar/>
		{children}</WalletKitProvider>;
}
