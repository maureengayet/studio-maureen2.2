import { styles } from "./Intro.css";

const Intro = () => {
	return (
		<div className="Intro">
			<h1 className="text-7xl dm-serif-display-regular">
				Bespoke <span className="italic">development</span> for unique <span className="italic">frontend</span> solutions.
			</h1>
			<h2 className="text-5xl dm-serif-display-regular">
				Hi. I am Maureen, a Dutch frontend developer and UI/UX designer based in Uddevalla, Sweden.
			</h2>
			<p className="text-base tracking-wide font-bold">A selection of work done between 2019—2024.</p>
		</div>
	);
};

export default Intro;
