// src/pages/dashboard.js
"use client";
import { useState } from "react";
import DashboardLayout from "./DashboardLayout";
import ProfileDetails from "./ProfileDetail";
import DashboardProducts from "./DashboardProducts";
import MyOrders from "./MyOrders";
import ReviewList from "./ReviewList";
import PrivateRoute from "../PrivateRoute";
export default function Dashboard() {
	const [activeComponent, setActiveComponent] = useState("profile");

	const renderComponent = () => {
		switch (activeComponent) {
			case "profile":
				return <ProfileDetails />;
			case "products":
				return <DashboardProducts />;
			case "orders":
				return <MyOrders />;
			case "reviews":
				return <ReviewList />; // Replace with actual component
			// case "favorites":
			// 	return <MyFavorites />; // Replace with actual component
			default:
				return <ProfileDetails />;
		}
	};

	return (
		<PrivateRoute>
			<DashboardLayout
				activeMenu={activeComponent}
				setActiveMenu={setActiveComponent}
			>
				{renderComponent()}
			</DashboardLayout>
		</PrivateRoute>
	);
}
