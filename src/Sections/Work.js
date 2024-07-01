const Work = () => {
	return (
		<section className="Work max-w narrow mb-20">
			<div className="project flex flex-col gap-y-6 gap-x-4 md:flex-row">
				<h4 className="small-caps md:w-5/12 lg:w-3/12"></h4>
				<h4 className="serif text-5xl py-20 w-full">Work</h4>
			</div>

			<div className="project fade-in mb-10 md:mb-20 flex flex-col gap-y-6 gap-x-4 md:flex-row">
				<h4 className="small-caps md:w-5/12 lg:w-3/12">Voltact</h4>
				<div className="project-content w-full flex flex-col gap-y-3">
					<p className="md:w-8/12 lg:w-5/12  ">
						Developed a cohesive brand identity for Voltact by designing a unique logo, intuitive user interface, and engaging web design. Ensured a
						consistent visual theme that enhances user experience and effectively communicates the company's values and offerings.
					</p>
					<p className="md:w-8/12 lg:w-5/12  ">
						See project{" "}
						<a href="https://voltact.nl" target="_blank">
							<span className="underline">here</span>
						</a>
						.
					</p>
					<ul className="skills small-caps flex gap-x-2 my-6">
						<li className="py-1 px-2 bg-2 text-xs rounded">Logo</li>
						<li className="py-1 px-2 bg-2 text-xs rounded">UI/UX Design</li>
						<li className="py-1 px-2 bg-2 text-xs rounded">Web Design</li>
					</ul>
					{/* <img src="./voltact.jpg" alt="Voltact" className="rounded-2xl w-7/12" /> */}
				</div>
			</div>

			<div className="project fade-in mb-10 md:mb-20 flex flex-col gap-y-6 gap-x-4 md:flex-row">
				<h4 className="small-caps md:w-5/12 lg:w-3/12">Melano Jewelry</h4>
				<div className="project-content w-full flex flex-col gap-y-3">
					<p className="md:w-8/12 lg:w-5/12  ">
						Worked in close partnership with Melano to develop a customizable Shopify theme, offering flexibility in managing content, colors, and
						typography. Implemented a responsive design strategy to ensure optimal display across various devices and screen sizes.
					</p>
					<p className="md:w-8/12 lg:w-5/12  ">
						See project{" "}
						<a href="https://melano-jewelry.com/" target="_blank">
							<span className="underline">here</span>
						</a>
						.
					</p>
					<ul className="skills small-caps flex gap-x-2 my-6">
						<li className="py-1 px-2 bg-2 text-xs rounded">Development</li>
						<li className="py-1 px-2 bg-2 text-xs rounded">Shopify</li>
					</ul>
					<div className="images grid">{/* <img src="./melano.jpeg" alt="Melano" className="rounded-2xl w-7/12" /> */}</div>
				</div>
			</div>

			<div className="project fade-in mb-10 md:mb-20 flex flex-col gap-y-6 gap-x-4 md:flex-row">
				<h4 className="small-caps md:w-5/12 lg:w-3/12">Shop Ateljé</h4>
				<div className="project-content w-full flex flex-col gap-y-3">
					<p className="md:w-8/12 lg:w-5/12 ">
						For Shop Ateljé, I developed a versatile Shopify theme with several customizable sections, offering flexibility in layout and design. The
						theme includes unique features such as icon mouse cursors and interactive elements to enhance user engagement and create a distinctive
						shopping experience.
					</p>
					<p className="md:w-8/12 lg:w-5/12  ">
						See project{" "}
						<a href="https://shopatelje.com/" target="_blank">
							<span className="underline">here</span>
						</a>
						.
					</p>
					<ul className="skills small-caps flex gap-x-2 my-6">
						<li className="py-1 px-2 bg-2 text-xs rounded">Development</li>
						<li className="py-1 px-2 bg-2 text-xs rounded">Shopify</li>
					</ul>
					<div className="images grid">{/* <img src="./melano.jpeg" alt="Melano" className="rounded-2xl w-7/12" /> */}</div>
				</div>
			</div>

			<div className="project fade-in mb-10 md:mb-20 flex flex-col gap-y-6 gap-x-4 md:flex-row">
				<h4 className="small-caps md:w-5/12 lg:w-3/12">Day Zero</h4>
				<div className="project-content w-full flex flex-col gap-y-3">
					<p className="md:w-8/12 lg:w-5/12  ">Designed the visual interface and icon for Day Zero.</p>
					<ul className="skills small-caps flex gap-x-2 my-6">
						<li className="py-1 px-2 bg-2 text-xs rounded">App Icon</li>
						<li className="py-1 px-2 bg-2 text-xs rounded">UI/UX Design</li>
					</ul>
					<div className="images grid">{/* <img src="./melano.jpeg" alt="Melano" className="rounded-2xl w-7/12" /> */}</div>
				</div>
			</div>

			<div className="project fade-in mb-10 md:mb-20 flex flex-col gap-y-6 gap-x-4 md:flex-row">
				<h4 className="small-caps md:w-5/12 lg:w-3/12">Alfa Laval</h4>
				<div className="project-content w-full flex flex-col gap-y-3">
					<p className="md:w-8/12 lg:w-5/12  ">
						Providing consulting services as a UI/UX Designer and Frontend Developer for Alfa Laval. Focussing on improving user experience and
						interface design, while also implementing front-end solutions to enhance overall HMI performance and usability.
					</p>
					<ul className="skills small-caps flex gap-x-2 my-6">
						<li className="py-1 px-2 bg-2 text-xs rounded">HMI</li>
						<li className="py-1 px-2 bg-2 text-xs rounded">UI/UX Design</li>
						<li className="py-1 px-2 bg-2 text-xs rounded">Angular</li>
						<li className="py-1 px-2 bg-2 text-xs rounded">Frontend Development</li>
					</ul>
					<div className="images grid">{/* <img src="./melano.jpeg" alt="Melano" className="rounded-2xl w-7/12" /> */}</div>
				</div>
			</div>
		</section>
	);
};

export default Work;
