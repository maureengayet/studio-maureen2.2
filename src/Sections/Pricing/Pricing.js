import { styles } from "./Pricing.css";
import { CheckIcon } from "@heroicons/react/24/solid";

const Pricing = () => {
	const packages = [
		{
			title: "Shopify/WordPress",
			text: "Theme Development for your WordPress or Shopify site, designed to fit your needs and preferences.",
			list: ["Provide your own design", "Easy customization", "Responsive design", "Fast loading times", "SEO-friendly"],
		},
		{
			title: "UI/UX Design and Development",
			text: "Expert UI/UX design and app development services to create intuitive experiences.",
			list: ["Custom icon design", "User centered design", "Enhanced user engagement", "Scalable solutions"],
		},
		{
			title: "Custom",
			text: "From small adjustments to major projects, I offer a customisable service to meet any of your digital needs.",
			list: ["Flexible scope", "Personalised solutions", "End-to-end support", "High-quality deliverables"],
		},
	];

	let packagesList = [];

	packages.forEach((object, index) => {
		packagesList.push(
			<div key={index} className="package">
				<div className="description">
					<h4 className="small-caps">{object.title}</h4>
					<p>{object.text}</p>
				</div>
				<ul>
					{object.list.map((item, index) => (
						<li key={index}>
							<CheckIcon className="size-5 text-accent inline mr-2" /> {item}
						</li>
					))}
				</ul>
			</div>
		);
	});

	return (
		<section className="Pricing">
			<div className="section-header">
				<p className="small-caps">Packages</p>
				<h2>Choose the right service for you.</h2>
			</div>
			<div className="packages">{packagesList}</div>
		</section>
	);
};

export default Pricing;
