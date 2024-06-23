import React, { useEffect, useRef, useState } from "react";
import "./Parallax.css"; // Ensure you have this CSS file for styling

const Parallax = ({ src }) => {
	const parallaxRef = useRef(null);
	const [imageHeight, setImageHeight] = useState(0);
	const [imageWidth, setImageWidth] = useState(0);
	const [divAspectRatio, setDivAspectRatio] = useState(1); // Default aspect ratio is 1:1

	useEffect(() => {
		const img = new Image();
		img.onload = () => {
			setImageHeight(img.height);
			setImageWidth(img.width);
		};
		img.src = src;

		// Calculate and set the aspect ratio of the Parallax div
		const updateDivAspectRatio = () => {
			if (parallaxRef.current) {
				const rect = parallaxRef.current.getBoundingClientRect();
				const aspectRatio = rect.width / rect.height;
				setDivAspectRatio(aspectRatio);
			}
		};

		// Update aspect ratio initially and on window resize
		updateDivAspectRatio();
		window.addEventListener("resize", updateDivAspectRatio);

		// Cleanup function to remove event listener
		return () => {
			window.removeEventListener("resize", updateDivAspectRatio);
		};
	}, [src]);

	useEffect(() => {
		const handleScroll = () => {
			if (parallaxRef.current) {
				const rect = parallaxRef.current.getBoundingClientRect();
				const parallaxSpeed = 0.3; // Adjust this value to control the parallax speed
				let initialOffset = -500; // Default initial offset for landscape-like divs

				// Check if the Parallax div is in portrait orientation
				if (divAspectRatio < 1) {
					initialOffset = -100; // Adjust this value for portrait-like divs
				}

				const offset = rect.top * parallaxSpeed + initialOffset;
				parallaxRef.current.style.backgroundPositionY = `${offset}px`;
			}
		};

		// Initialize the background position when the component mounts
		handleScroll();

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, [src, divAspectRatio]);

	return (
		<div
			className="parallax"
			ref={parallaxRef}
			style={{
				backgroundImage: `url(${src})`,
				minHeight: "300px",
				height: "60vh",
				backgroundPosition: "center",
			}}
		></div>
	);
};

export default Parallax;
