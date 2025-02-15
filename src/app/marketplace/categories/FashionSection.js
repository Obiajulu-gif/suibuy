// components/FashionSection.js
"use client"
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { FiHeart } from 'react-icons/fi';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const products = [
  { id: 1, image: "/images/product1.png", name: "African Fabric" },
  { id: 2, image: "/images/product2.png", name: "Woven Mat" },
  { id: 3, image: "/images/product3.png", name: "Beaded Necklace" },
  { id: 4, image: "/images/product4.png", name: "Men's Shirt" },
  { id: 5, image: "/images/product5.png", name: "Bead Jewelry" },
  // Add more products as needed
];

const FashionSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Move to the next product
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
  };

  // Move to the previous product
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + products.length) % products.length);
  };

  // Auto slide every 1 second
  useEffect(() => {
    const interval = setInterval(nextSlide, 2000); // 1000ms = 1 second
    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  return (
    <section className="bg-orange-50 p-4 rounded-lg shadow-md relative">
      {/* Header */}
      <div className="flex justify-between items-center border-b pb-2 mb-4">
        <h1 className="text-2xl font-bold text-gray-800">Fashion</h1>
        <div className="flex items-center space-x-2">
          <FiHeart className="text-gray-600" />
          <button className="text-gray-600 text-sm">
            Sort By
          </button>
        </div>
      </div>

      {/* Carousel */}
      <div className="relative flex items-center">
        {/* Left Arrow */}
        <button 
          onClick={prevSlide} 
          className="absolute left-0 z-10 p-2 text-gray-800 bg-white rounded-full shadow-md hover:bg-gray-200 transition"
        >
          <FaChevronLeft size={20} />
        </button>

        {/* Product */}
        <div className="w-full flex justify-center items-center overflow-hidden">
          {products.map((product, index) => (
            <div 
              key={product.id} 
              className={`min-w-[160px] flex-shrink-0 transition-transform duration-500 ease-in-out transform ${index === currentIndex ? 'translate-x-0' : 'translate-x-full'}`}
              style={{ display: index === currentIndex ? 'block' : 'none' }}
            >
              <div className="rounded-lg overflow-hidden shadow-lg bg-white w-40 h-40">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={160}
                  height={160}
                  objectFit="cover"
                  className="w-full h-full"
                />
                <div className="p-2 text-center">
                  <p className="text-gray-800 text-sm font-medium truncate">{product.name}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button 
          onClick={nextSlide} 
          className="absolute right-0 z-10 p-2 text-gray-800 bg-white rounded-full shadow-md hover:bg-gray-200 transition"
        >
          <FaChevronRight size={20} />
        </button>
      </div>
    </section>
  );
};

export default FashionSection;
