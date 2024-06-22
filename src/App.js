import "./App.css";
import Header from "./Sections/Header";
import Footer from "./Sections/Footer";
import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";

function App() {
	const [showLayout, setShowLayout] = useState(false);

	useEffect(() => {
		const timer = setTimeout(() => {
			setShowLayout(true);
		}, 500);

		return () => clearTimeout(timer);
	}, []);

	return (
		<div className={`App ${showLayout ? "show-layout" : ""}`}>
			<Header />
			<Outlet></Outlet>
			<Footer />
		</div>
	);
}

export default App;
