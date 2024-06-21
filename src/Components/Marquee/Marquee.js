import React, { useEffect, useRef } from "react";
import "./Marquee.css";

const Marquee = ({ text }) => {
	const marqueeRef = useRef(null);

	useEffect(() => {
		const marqueeContent = marqueeRef.current;
		if (marqueeContent) {
			const contentWidth = marqueeContent.scrollWidth;
			const containerWidth = marqueeContent.parentElement.offsetWidth;

			// Duplicate content to ensure seamless scrolling
			if (contentWidth < containerWidth) {
				const repeatCount = Math.ceil(containerWidth / contentWidth);
				marqueeContent.innerHTML = text.repeat(repeatCount + 1);
			}
		}
	}, [text]);

	return (
		<div className="marquee-container">
			<div className="marquee" ref={marqueeRef}>
				{text}
			</div>
		</div>
	);
};

export default Marquee;
