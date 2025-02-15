import FashionSection from './FashionSection';
import ProductSection from './ProductSection';

export default function HomePage() {
  return (
    <div className="container mx-auto p-4">
      <FashionSection />
      <ProductSection />
    </div>
  );
}
