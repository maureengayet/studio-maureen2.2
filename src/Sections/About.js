const About = () => {
	return (
		<section id="about" className="relative max-w w-full leading-snug lg:leading-snug">
			<div className="max-w w-full h-px mt-10 sm:mt-24 bg-[var(--color-white)] opacity-30"></div>
			<div className="flex flex-col sm:flex-row gap-y-10 my-10 sm:my-24 inner-p-x">
				<div className="small-caps text-small w-1/5 font-semibold">Introduction</div>
				<div className="sm:w-4/5 text-2xl sm:text-3xl">
					<p className="mb-8">
						<span className="sm:ml-12">An </span>experienced freelance web designer and developer dedicated to creating innovative digital solutions.
						With over 8 years of expertise, I specialise in crafting high-quality, user-friendly applications tailored to meet your unique needs.
					</p>
					<p>
						Whether you're a startup looking to build your first app or an established business seeking to enhance your digital presence, I'm here to
						bring your ideas to life.
					</p>
				</div>
			</div>
			<div className="img wide relative overflow-hidden h-[500px] md:h-[750px] lg:h-[850px] b-10 sm:mb-24">
				<img
					className="transition-colors rounded-2xl 4 bg-[--bg-cards] absolute inset-0 object-cover h-full w-full"
					src="./cards.png"
					alt="Studio Maureen Cards"
				/>
			</div>
		</section>
	);
};

export default About;
