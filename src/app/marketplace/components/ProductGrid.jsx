// components/ProductGrid.js
import Image from "next/image";

const products = [
	{
		id: 1,
		image: "/images/marketplace/product1.png",
		title: "Handmade Woven Mat",
		price: "₦4,000.00",
	},
	{
		id: 2,
		image: "/images/marketplace/product2.png",
		title: "African Bead Necklace",
		price: "₦8,000.00",
	},
	{
		id: 3,
		image: "/images/marketplace/product3.png",
		title: "Men's African Print Shirt",
		price: "₦5,500.00",
	},
	{
		id: 4,
		image: "/images/marketplace/product4.png",
		title: "Colorful African Fabric",
		price: "₦3,200.00",
	},
	{
		id: 5,
		image: "/images/marketplace/product5.png",
		title: "Colorful Bead",
		price: "₦3,200.00",
	},
	{
		id: 6,
		image: "/images/marketplace/product1.png",
		title: "Handmade Woven Mat",
		price: "₦4,000.00",
	},
	{
		id: 7,
		image: "/images/marketplace/product2.png",
		title: "African Bead Necklace",
		price: "₦8,000.00",
	},
	{
		id: 8,
		image: "/images/marketplace/product3.png",
		title: "Men's African Print Shirt",
		price: "₦5,500.00",
	},
	{
		id: 9,
		image: "/images/marketplace/product4.png",
		title: "Colorful African Fabric",
		price: "₦3,200.00",
	},
	{
		id: 10,
		image: "/images/marketplace/product5.png",
		title: "Colorful Bead",
		price: "₦3,200.00",
	},
	{
		id: 11,
		image: "/images/marketplace/product1.png",
		title: "Handmade Woven Mat",
		price: "₦4,000.00",
	},
	{
		id: 12,
		image: "/images/marketplace/product2.png",
		title: "African Bead Necklace",
		price: "₦8,000.00",
	},
	{
		id: 13,
		image: "/images/marketplace/product3.png",
		title: "Men's African Print Shirt",
		price: "₦5,500.00",
	},
	{
		id: 14,
		image: "/images/marketplace/product4.png",
		title: "Colorful African Fabric",
		price: "₦3,200.00",
	},
	{
		id: 15,
		image: "/images/marketplace/product5.png",
		title: "Colorful Bead",
		price: "₦3,200.00",
	},
	{
		id: 16,
		image: "/images/marketplace/product3.png",
		title: "Men's African Print Shirt",
		price: "₦5,500.00",
	},
];

const ProductGrid = () => {
  return (
    <section className="px-4 py-8">
      {/* Section Heading */}
      <h1 className="max-w-screen-xl text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-gray-800 text-center md:text-left px-8">
        All products
      </h1>

      {/* Product Grid */}
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 ease-in-out"
          >
            <div className="relative w-full h-64 rounded-lg overflow-hidden">
              <Image
                src={product.image}
                alt={product.title}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
              />
            </div>
            <div className="mt-4 text-center">
              <h2 className="text-sm text-gray-600 truncate">{product.title}</h2>
              <p className="text-lg font-bold text-gray-800 mt-1">{product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductGrid;
