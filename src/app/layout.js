// app/layout.js
import Navbar from "./components/Navbar";
import ClientLayout from "./ClientLayout";

export const metadata = {
	title: "Suibuy Marketplace",
	description: "Web3-Powered Direct-to-Consumer Marketplace",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>
				<ClientLayout>
					<Navbar />
					{children}
				</ClientLayout>
			</body>
		</html>
	);
}
