import Intro from "./../Sections/Intro";
import About from "../Sections/About";
import Services from "./../Sections/Services";
import Work from "./../Sections/Work";
import Packages from "../Sections/Packages";
import Contact from "../Sections/Contact";

const HomePage = () => {
	return (
		<section className="">
			<Intro />
			<About />
			{/* <Services /> */}
			<Work />
			<Packages />
			<Contact />
		</section>
	);
};

export default HomePage;
