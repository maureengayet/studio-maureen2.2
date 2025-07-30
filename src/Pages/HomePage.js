import Intro from "./../Sections/Intro";
import About from "../Sections/About";
import Work from "./../Sections/Work";
import Contact from "../Sections/Contact";
import Clients from "../Sections/Clients";

const HomePage = () => {
	return (
		<section className="home">
			<Intro />
			<About />
			<Work />
			{/* <Clients /> */}
			<Contact />
		</section>
	);
};

export default HomePage;
