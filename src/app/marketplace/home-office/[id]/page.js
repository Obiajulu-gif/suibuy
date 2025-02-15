import Image from "next/image";

// Dummy product data for Home & Office (use the same array as in the listing page)
const products = [
    {
        id: 1,
        title: "Office Setup",
        image: "/images/home-office/flower.jpg",
        price: "₦150,000",
        description: "Complete office setup for a productive work environment.",
        shippingInfo: ["Ships within 3-5 days"],
        paymentInfo: "Cash on delivery or online payment",
        returnInfo: "Return within 7 days",
    },
    {
        id: 2,
        title: "Modern Lamp",
        image: "/images/home-office/office-lamp.jpg",
        price: "₦25,000",
        description: "Sleek modern lamp to light up your workspace.",
        shippingInfo: ["Ships within 3-5 days"],
        paymentInfo: "Cash on delivery or online payment",
        returnInfo: "Return within 7 days",
    },
    {
        id: 3,
        title: "Stylish Office Chair",
        image: "/images/home-office/officechair.jpg",
        price: "₦45,000",
        description: "Comfortable office chair for long working hours.",
        shippingInfo: ["Ships within 3-5 days"],
        paymentInfo: "Cash on delivery or online payment",
        returnInfo: "Return within 7 days",
    },
    {
        id: 4,
        title: "Wall Clock",
        image: "/images/home-office/clock.jpg",
        price: "₦10,000",
        description: "Classic wall clock to add elegance to your office.",
        shippingInfo: ["Ships within 3-5 days"],
        paymentInfo: "Cash on delivery or online payment",
        returnInfo: "Return within 7 days",
    },
    {
        id: 5,
        title: "Living Room Setup",
        image: "/images/home-office/tv.jpg",
        price: "₦200,000",
        description: "Luxury living room setup to enhance your home.",
        shippingInfo: ["Ships within 3-5 days"],
        paymentInfo: "Cash on delivery or online payment",
        returnInfo: "Return within 7 days",
    },
    {
        id: 6,
        title: "Flower Pot",
        image: "/images/home-office/pot-of-flower.jpg",
        price: "₦5,000",
        description: "Beautiful flower pot to brighten up your space.",
        shippingInfo: ["Ships within 3-5 days"],
        paymentInfo: "Cash on delivery or online payment",
        returnInfo: "Return within 7 days",
    },
];

export default function ProductDetailPage({ params }) {
    const { id } = params;

    // Find the product by ID
    const product = products.find((p) => p.id === parseInt(id));

    if (!product) {
        return <p>Product not found</p>;
    }

    return (
        <div className="max-w-4xl mx-auto p-4 flex flex-wrap bg-gray-50 rounded-lg shadow-lg">
            {/* Product Image */}
            <div className="w-full md:w-1/2 mb-4 md:mb-0">
                <Image
                    src={product.image}
                    alt={product.title}
                    width={500}
                    height={500}
                    objectFit="cover"
                    className="rounded-lg"
                    quality={100}
                />
            </div>

            {/* Product Details */}
            <div className="w-full md:w-1/2 md:pl-8">
                <h1 className="text-3xl font-bold mb-2">{product.title}</h1>
                <p className="text-xl font-bold text-orange-600 mb-4">
                    {product.price}
                </p>
                <p className="text-gray-600 mb-4">{product.description}</p>

                <button className="w-full bg-orange-500 text-white py-2 rounded-lg mb-4">
                    Add to cart
                </button>

                <div className="mt-6">
                    <h3 className="font-bold">Shipping Information</h3>
                    <p className="text-gray-600 text-sm">{product.shippingInfo}</p>
                </div>

                <div className="mt-4">
                    <h3 className="font-bold">Payment Information</h3>
                    <p className="text-gray-600 text-sm">{product.paymentInfo}</p>
                </div>

                <div className="mt-4">
                    <h3 className="font-bold">Return Information</h3>
                    <p className="text-gray-600 text-sm">{product.returnInfo}</p>
                </div>
            </div>
        </div>
    );
}
