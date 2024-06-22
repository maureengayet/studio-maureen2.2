import { styles } from "./Intro.css";

const Intro = () => {
	return (
		<section className="intro-video fade-in-layout wide">
			<video id="background-video" autoPlay loop muted>
				<source src="./video17.mp4" type="video/mp4"></source>
			</video>
			<h1 className="narrow select-none">
				Bespoke <span className="italic">development</span> <span className="new-line">for </span>unique <span className="italic">frontend</span>{" "}
				solutions.
			</h1>
			<h2 className="narrow select-none">
				Crafting exceptional digital <span className="new-line">experiences</span> to elevate your brand.
			</h2>
			<p className="narrow text-base font-bold  select-none">A selection of work done between 2019—2024.</p>
			
		</section>
	);
};

export default Intro;
