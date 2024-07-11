import Intro2 from "./../Sections/Intro2";
import About from "../Sections/About";
import Services from "./../Sections/Services";
import Intro from "../Sections/Intro";
import Work from "./../Sections/Work";
import Packages from "../Sections/Packages";
import Contact from "../Sections/Contact";

const HomePage = () => {
	return (
		<section className="home">
			{/* <Intro></Intro> */}
			<Intro2 />
			<About />
			{/* <Services /> */}
			<Packages />
			<Work />

			<Contact />
		</section>
	);
};

export default HomePage;
