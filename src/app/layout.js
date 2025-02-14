import "./globals.css";
import ClientLayout from "./ClientLayout"; // Import the new client-side layout

export const metadata = {
	title: "Suibuy Marketplace",
	description: "Web3-Powered Direct-to-Consumer Marketplace",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>

				<ClientLayout>{children}</ClientLayout>
			</body>
		</html>
	);
}
