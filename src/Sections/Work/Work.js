import { styles } from "./Work.css";

const Work = () => {
	return (
		<section className="Work">
			<div className="project">
				<h4>Melano Jewelry</h4>
				<ul className="skills">
					<li>Development</li>
					<li>Shopify</li>
				</ul>
				<img src="./melano.jpeg" alt="Melano" className="project-bg" />
			</div>
			<div className="project">
				<h4>Voltact</h4>
				<ul className="skills">
					<li>UI/UX Design</li>
					<li>Logo</li>
				</ul>
				<img src="./voltact.jpg" alt="Voltact" className="project-bg" />
			</div>
			<div className="project">
				<h4>Shop Ateljé</h4>
				<ul className="skills">
					<li>Development</li>
					<li>Shopify</li>
				</ul>
				<img src="./atelje.jpeg" alt="Atelej" className="project-bg" />
			</div>
		</section>
	);
};

export default Work;
