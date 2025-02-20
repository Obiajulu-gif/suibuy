"use client";

import { WalletKitProvider } from "@mysten/wallet-kit";

export function Providers({ children }) {
	return <WalletKitProvider>{children}</WalletKitProvider>;
}
