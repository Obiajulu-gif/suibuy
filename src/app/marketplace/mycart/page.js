import CartPage from "./CartPage"
import Recommendations from "./Recommendations"
export default function HomePage() {
  return (
    <div className="container mx-auto p-4">
      <CartPage />
      <Recommendations/>
    </div>
  );
}
