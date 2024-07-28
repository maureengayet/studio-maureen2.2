import Intro from "./../Sections/Intro";
import About from "../Sections/About";
import Work from "./../Sections/Work";
import Packages from "../Sections/Packages";
import Contact from "../Sections/Contact";
import ReactGA from "react-ga4";

ReactGA.send({ hitType: "pageview", page: "/home", title: "Homepage" });

const HomePage = () => {
	return (
		<section className="home">
			<Intro />
			<About />
			{/* <Services /> */}
			{/* <Packages /> */}
			<Work />
			<Contact />
		</section>
	);
};

export default HomePage;
