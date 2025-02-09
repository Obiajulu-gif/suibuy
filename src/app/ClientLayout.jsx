"use client"; 

import Navbar from "./components/Navbar"; // ✅ Corrected path (assuming it's in the same folder)

export default function ClientLayout({ children }) {
	return (
		<>
			<Navbar />
			{children}
		</>
	);
}
