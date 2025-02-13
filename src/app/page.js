import Hero from "./components/Hero";
import About from "./components/About";
import WhySuibuy from "./components/Whysuibuy";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import { Services } from "./components/services";
export default function Home() {
	return (
		<div >
			<Hero />
			<WhySuibuy />	
			<About />
			<Services/>
			<FAQ />

			<Footer/>
		</div>
	);
}
