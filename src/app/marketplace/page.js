import Navbar from "../components/Navbar";
import { HeroBanner } from "./components/hero-banner";
import { FlashSales } from "./components/flash-sales";
import { CategoryBrowse } from "./components/category-browse";
import { BestSelling } from "./components/best-selling";
import { FeaturedProduct } from "./components/featured-product";
import { ExploreProducts } from "./components/explore-products";
import { NewArrival } from "./components/new-arrival";
import { Services } from "./components/services";
import {Footer} from "./components/footer";
export default function Home() {
	return (
		<div className="flex min-h-screen flex-col">
			{/* <Navbar /> */}
			<main className="flex-1">
				<HeroBanner />
				<FlashSales />
				<CategoryBrowse />
				<BestSelling />
				<FeaturedProduct />
				<ExploreProducts />
				<NewArrival />
				<Services />
			</main>
			<Footer />
		</div>
	);
}
