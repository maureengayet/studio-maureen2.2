import React, { useEffect, useRef } from "react";
import "./Marquee.css";

const Marquee = ({ text }) => {
	const marqueeRef = useRef(null);

	useEffect(() => {
		const marqueeContent = marqueeRef.current;
		if (marqueeContent) {
			const contentWidth = marqueeContent.scrollWidth;
			const narrowWidth = marqueeContent.parentElement.offsetWidth;

			// Duplicate content to ensure seamless scrolling
			if (contentWidth < narrowWidth) {
				const repeatCount = Math.ceil(narrowWidth / contentWidth);
				marqueeContent.innerHTML = text.repeat(repeatCount + 1);
			}
		}
	}, [text]);

	return (
		<div className="marquee-narrow pointer-events-none">
			<div className="marquee" ref={marqueeRef}>
				{text}
			</div>
		</div>
	);
};

export default Marquee;
