import { CheckIcon } from "@heroicons/react/24/solid";

const Packages = () => {
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
			<div key={index} className="package-item flex flex-col gap-y-8 w-full">
				<div className="description">
					<h4 className="small-caps my-4">{object.title}</h4>
					<p className="my-4">{object.text}</p>
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
		<section className="Packages py-36">
			<div className="max-w narrow flex flex-col gap-y-36">
				<div className="section-header">
					<p className="small-caps">Packages</p>
					<h2>Choose the right package for your brand.</h2>
				</div>
				<div className="packages-list flex flex-row gap-x-12 md:gap-x-20">{packagesList}</div>
			</div>
		</section>
	);
};

export default Packages;
