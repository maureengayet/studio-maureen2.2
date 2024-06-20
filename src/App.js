import "./App.css";
import Header from "./Sections/Header/Header";
import Footer from "./Sections/Footer/Footer";
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
			<div className="page">
				<Outlet></Outlet>
			</div>
			<Footer />
		</div>
	);
}

export default App;
