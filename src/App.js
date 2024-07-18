import "./App.css";
import Header from "./Sections/Header";
import Footer from "./Sections/Footer";
import React, { useState, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";

function App() {
	const [showLayout, setShowLayout] = useState(false);
	const location = useLocation();

	useEffect(() => {
		const timer = setTimeout(() => {
			setShowLayout(true);
		}, 500);

		return () => clearTimeout(timer);
	}, []);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						entry.target.classList.add("visible");
						observer.unobserve(entry.target);
					}
				});
			},
			{ threshold: 0.1 } // Adjust as needed
		);

		const elements = document.querySelectorAll(".fade-in");
		elements.forEach((element) => observer.observe(element));

		return () => {
			elements.forEach((element) => observer.unobserve(element));
		};
	}, [location]);

	return (
		<div className={`App ${showLayout ? "show-layout" : ""}`}>
			<Header />
			<Outlet />
			<Footer />
		</div>
	);
}

export default App;
