import Navbar from "./components/Navbar"; // ✅ Corrected path (assuming it's in the same folder)

import Hero from "./components/Hero";
import About from "./components/About";
import WhySuibuy from "./components/Whysuibuy";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import CardDesc from "./components/CardDesc";
import { Services } from "./components/services";
import WhyUs from "./components/WhyUS"
export default function Home() {
	return (
		<div>
			<Navbar />
			<Hero />
			<CardDesc/>
			<WhyUs/>
			<WhySuibuy />
			<About />
			<Services />
			<FAQ />

			<Footer />
		</div>
	);
}
