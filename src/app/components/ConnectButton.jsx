import {
	addressEllipsis,
	ConnectButton as WalletConnectButton,
	useWallet,
} from "@suiet/wallet-kit";

export default function ConnectBtn({
	connectText = "Connect Wallet",
	disconnectText = "Disconnect",
}) {
	const wallet = useWallet();

	return (
		<div className="relative">
			{wallet.connected ? (
				<div className="group flex items-center space-x-2 bg-[#232429] px-3 py-1 rounded-lg text-white text-sm cursor-pointer hover:bg-[#2c2d33] transition-colors">
					<span>{addressEllipsis(wallet.address)}</span>
					<button
						className="hidden group-hover:block text-xs text-red-500 hover:text-red-600 transition-colors"
						onClick={() => wallet.disconnect()}
					>
						({disconnectText})
					</button>
				</div>
			) : (
				<WalletConnectButton className="px-3 py-1 rounded-lg bg-[#02c0ff] text-white text-sm hover:bg-[#02a0dd] transition-colors">
					{connectText}
				</WalletConnectButton>
			)}
		</div>
	);
}
