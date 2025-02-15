// components/Recommendations.js
import Image from 'next/image';

const products = [
  { id: 1, image: '/images/product1.png', title: 'Product 1', price: 84000 },
  { id: 2, image: '/images/product2.png', title: 'Product 2', price: 84000 },
  { id: 3, image: '/images/product3.png', title: 'Product 3', price: 84000 },
  { id: 4, image: '/images/product4.png', title: 'Product 4', price: 84000 },
  { id: 5, image: '/images/product5.png', title: 'Product 5', price: 84000 },
];

const ProductGrid = ({ title }) => {
  return (
    <section className="p-4">
      <h2 className="text-xl font-bold mb-4">{title}</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow p-4">
            <Image
              src={product.image}
              alt={product.title}
              width={200}
              height={200}
              className="object-cover w-full h-40 rounded-md"
            />
            <h3 className="mt-2 text-sm font-semibold">{product.title}</h3>
            <p className="text-orange-500 font-bold">₦{product.price.toLocaleString()}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default function Recommendations() {
  return (
    <div>
      <ProductGrid title="Similar Products for you" />
      <ProductGrid title="Recommendations" />
    </div>
  );
}
