import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import "./Intro2.css";

const Intro2 = () => {
	const [scrolled, setScrolled] = useState(0);
	const parallaxRef = useRef(null);

	useEffect(() => {
		const handleScroll = () => {
			const scrollTop = window.scrollY;
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
		<section id="parallax" className="intro wide fade-in-layout" ref={parallaxRef}>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 0.5, duration: 0.5 }}
				className="background-image"
				style={{ transform: `translateY(${scrolled * 0.5}px)` }}
			></motion.div>

			<motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1, duration: 1 }}>
				<h1 className="max-w narrow select-none">
					Bespoke <span className="italic new-line">development</span> for unique <span className="italic">frontend</span> solutions.
				</h1>{" "}
			</motion.div>
			<motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.8, duration: 0.8 }}>
				<h2 className="max-w narrow select-none">Crafting exceptional digital experiences to elevate your brand.</h2>
			</motion.div>
		</section>
	);
};

export default Intro2;
