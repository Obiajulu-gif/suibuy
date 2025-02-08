// app/ClientLayout.js
"use client";
import { WalletKitProvider } from "@mysten/wallet-kit";

export default function ClientLayout({ children }) {
	return <WalletKitProvider>{children}</WalletKitProvider>;
}
