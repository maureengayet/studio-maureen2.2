import { styles } from "./Intro.css";

const Intro = () => {
	return (
		<div className="Intro">
			<section className="intro-video fade-in-layout inner-padding-y">
				<video id="background-video" autoPlay loop muted>
					<source src="./video17.mp4" type="video/mp4"></source>
				</video>
				<h1 className="dm-serif-display-regular">
					Bespoke <span className="italic">development</span> <span className="new-line">for </span>unique <span className="italic">frontend</span> solutions.
				</h1>
				<h2 className="dm-serif-display-regular">Crafting exceptional digital <span className="new-line">experiences</span> to elevate your brand.</h2>
				<p className="text-base tracking-wide font-bold">A selection of work done between 2019—2024.</p>
			</section>
			<section className="intro-text inner-padding-y">
				<p className="dm-serif-display-regular leading-snug subheading w-11/12">
					Hi there! I'm Maureen Gayet, an experienced freelance developer dedicated to creating innovative web and mobile solutions. With over 8 years
					of expertise, I specialize in crafting high-quality, user-friendly applications tailored to meet your unique needs. Whether you're a startup
					looking to build your first app or an established business seeking to enhance your digital presence, I'm here to bring your ideas to life.
				</p>
			</section>
		</div>
	);
};

export default Intro;
