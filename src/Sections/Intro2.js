import React, { useState, useEffect, useRef } from "react";
import styles from "./Intro2.css"; // Import your CSS file

const Intro2 = () => {
	const [scrolled, setScrolled] = useState(0);
	const parallaxRef = useRef(null);

	useEffect(() => {
		const handleScroll = () => {
			const scrollTop = window.scrollY;
			const parallaxHeight = parallaxRef.current.offsetHeight;
			setScrolled(scrollTop);
		};

		// Event listener to track scroll position
		window.addEventListener("scroll", handleScroll);

		// Clean up the event listener
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<section id="parallax" className="intro fade-in-layout" ref={parallaxRef}>
			<div className="background-image" style={{ transform: `translateY(${scrolled * 0.5}px)` }}></div>
			{/* <div className="flex flex-col"> */}
			<h1 className="max-w narrow select-none">
				Bespoke <span className="italic">development</span> <span className="new-line">for </span>unique <span className="italic">frontend</span>{" "}
				solutions.
			</h1>
			<h2 className="max-w narrow select-none">
				Crafting exceptional digital <span className="new-line">experiences</span> to elevate your brand.
			</h2>
			{/* </div> */}
		</section>
	);
};

export default Intro2;
