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
			<div key={index} className="package-item flex flex-col w-full">
				<div className="description max-w-sm">
					<h4 className="small-caps my-4">{object.title}</h4>
					<p className="my-4">{object.text}</p>
				</div>
				<ul className="my-4">
					{object.list.map((item, index) => (
						<li key={index}>
							<CheckIcon className="size-5 text-accent  inline mr-2" /> {item}
						</li>
					))}
				</ul>
			</div>
		);
	});

	return (
		<section className="Packages bg-1 py-36">
			<div className="package-container max-w narrow flex flex-col gap-y-36">
				<div className="packages flex flex-col items-start">
					<p className="small-caps my-4">Packages</p>
					<h2 className="serif text-6xl leading-tight w-11/12 sm:w-10/12 md:text-7xl md:w-8/12 md:leading-tight lg:w-7/12">
						Choose the right package for your brand.
					</h2>
				</div>
				<div className="package-container max-w">
					<div className="packages-list bg overflow-hidden rounded-2xl bg flex flex-col lg:flex-row p-10 gap-x-10 gap-y-14 lg:gap-x-20">
						{packagesList}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Packages;
