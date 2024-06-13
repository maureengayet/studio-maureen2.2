import "./App.css";
import Header from "./Sections/Header/Header";
import Footer from "./Sections/Footer/Footer";
import Intro from "./Sections/Intro/Intro";
import Contact from "./Sections/Contact/Contact";
import React, { useState, useEffect } from "react";

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
			<Intro />
			{/* <Contact /> */}
			<Footer />
		</div>
	);
}

export default App;
