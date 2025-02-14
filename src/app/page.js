import Navbar from "./components/Navbar"; // ✅ Corrected path (assuming it's in the same folder)

import Hero from "./components/Hero";
import About from "./components/About";
import WhySuibuy from "./components/Whysuibuy";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import { Services } from "./components/services";
export default function Home() {
	return (
		<div>
			<Navbar />
			<Hero />
			<WhySuibuy />
			<About />
			<Services />
			<FAQ />

			<Footer />
		</div>
	);
}
