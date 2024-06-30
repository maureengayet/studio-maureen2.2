import { ArrowDownCircleIcon } from "@heroicons/react/24/solid";

const About = () => {
	return (
		<section className="About relative max-w  w-full ">
			<p className="serif narrow mt-32 text-2xl sm:text-3xl lg:text-4xl leading-snug lg:leading-snug md:w-11/12">
				Hi there! I'm Maureen Gayet, an experienced freelance developer dedicated to creating innovative web and mobile solutions. With over 8 years
				of expertise, I specialize in crafting high-quality, user-friendly applications tailored to meet your unique needs. Whether you're a startup
				looking to build your first app or an established business seeking to enhance your digital presence, I'm here to bring your ideas to life.
			</p>
			<p className="max-w narrow small-caps mt-24 mb-32">
				<ArrowDownCircleIcon className="size-5 inline mr-4 mb-1" /> A selection of work done between 2019 — 2024.
			</p>

			{/* <img className="absolute -bottom-72 right-0 w-5/12 rounded-2xl" src="./contact.jpg"></img> */}
		</section>
	);
};

export default About;
