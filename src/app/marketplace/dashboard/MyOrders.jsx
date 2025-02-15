// src/components/MyOrders.js
"use client";
import { useState } from "react";
import Image from "next/image";
import { products } from "./products"; // Make sure this path is correct and points to your products data
import Link from "next/link";
const tabs = [
  { id: "all", label: "All Orders" },
  { id: "running", label: "Running Orders" },
  { id: "disputed", label: "Disputed Orders" },
  { id: "completed", label: "Completed Orders" },
];

const MyOrders = () => {
  const [activeTab, setActiveTab] = useState("all");

  // Filter products based on the selected tab
  const filteredOrders = products.filter((product) => {
    if (activeTab === "all") return true;
    // Add specific filtering logic for other tabs
    // For this example, all products are shown in each tab
    return true;
  });

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">My Orders</h2>

      {/* Tabs */}
      <div className="flex mb-6">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`mr-4 pb-2 bg-white ${
              activeTab === tab.id
                ? "text-orange-500 border-b-2 border-orange-500 font-semibold"
                : "text-gray-500"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Orders List */}
      <div className="space-y-4">
        {filteredOrders.map((order) => (
          <div
            key={order.id}
            className="flex items-center bg-white p-4 rounded-lg shadow-lg"
          >
            <Image
              src={order.image}
              alt={order.title}
              width={80}
              height={80}
              className="rounded-lg mr-4"
            />
            <div className="flex-1">
              <h3 className="font-semibold text-gray-700">{order.title}</h3>
              <p className="text-gray-500">Order Number: 109845TV</p>
              <Link href={`/orders/${order.id}`} className="text-orange-500">
                View Details
              </Link>
            </div>
            <div className="flex items-center">
              <span
                className={`px-2 py-1 rounded-full text-white text-xs ${
                  activeTab === "disputed"
                    ? "bg-red-500"
                    : activeTab === "running"
                    ? "bg-yellow-500"
                    : "bg-green-500"
                }`}
              >
                {activeTab === "disputed" ? "Disputed" : "Successful"}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyOrders;
