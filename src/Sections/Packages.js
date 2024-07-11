import { useState } from "react";
import { CheckIcon } from "@heroicons/react/24/solid";
import { MinusIcon, PlusIcon } from "@heroicons/react/24/outline";

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
			text: "From small adjustments to major projects, I offer a customizable service to meet any of your digital needs.",
			list: ["Flexible scope", "Personalised solutions", "End-to-end support", "High-quality deliverables"],
		},
	];

	const [openIndexes, setOpenIndexes] = useState([]);

	const togglePackage = (index) => {
		if (openIndexes.includes(index)) {
			setOpenIndexes(openIndexes.filter((item) => item !== index));
		} else {
			setOpenIndexes([...openIndexes, index]);
		}
	};

	const isOpen = (index) => {
		return openIndexes.includes(index);
	};

	return (
		<section className="bg-1 py-36">
			<div className="package-container max-w narrow flex flex-col gap-y-36">
				<div className="packages flex flex-col items-start">
					<p className="small-caps my-4">Packages</p>
					<h2 className="serif text-6xl leading-tight w-11/12 sm:w-10/12 md:text-7xl md:w-8/12 md:leading-tight lg:w-7/12">
						Choose the right package for your brand.
					</h2>
				</div>
				<div className="package-container fade-in max-w">
					<div className="packages-list overflow-hidden flex flex-col">
						{packages.map((pkg, index) => (
							<div key={index} className="package-item flex flex-col w-full">
								<div onClick={() => togglePackage(index)} className="description cursor-pointer">
									<h4 className="small-caps my-5 flex flex-row justify-between items-center">
										{pkg.title}
										{isOpen(index) ? <MinusIcon className="size-5" /> : <PlusIcon className="size-5" />}
									</h4>
									<div className={`transition-max-height duration-300 ease-in-out max-h-0 overflow-hidden ${isOpen(index) && "max-h-96"}`}>
										<p className="my-4">{pkg.text}</p>
										<ul className="my-4 mb-8">
											{pkg.list.map((item, i) => (
												<li key={i}>
													<CheckIcon className="size-5 text-accent inline mr-2" /> {item}
												</li>
											))}
										</ul>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Packages;
