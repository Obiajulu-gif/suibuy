"use client";

import { WalletProvider } from "@suiet/wallet-kit";
import "@suiet/wallet-kit/style.css";
export default function WalletWrapper({ children }) {
	return <WalletProvider>{children}</WalletProvider>;
}
