import Navbar from "../components/Navbar";
import LoanInterface from "./components/loan-interface";
import LoanTable from "./components/loan-table";

export default function Home() {
	return (
		<div className="min-h-screen bg-gray-900 text-white">
			<Navbar/>
			<LoanInterface />
			<LoanTable/>
		</div>
	);
}
