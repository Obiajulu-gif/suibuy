import "./globals.css";
import ClientLayout from "./ClientLayout"; // Import the new client-side layout
import { Providers } from "./providers"

export const metadata = {
	title: "Suibuy Marketplace",
	description: "Web3-Powered Direct-to-Consumer Marketplace",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>
<Providers>
				<ClientLayout>{children}</ClientLayout>
				</Providers>
			</body>
		</html>
	);
}
