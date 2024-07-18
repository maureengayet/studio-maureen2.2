import Intro2 from "./../Sections/Intro2";
import About from "../Sections/About";
import Work from "./../Sections/Work";
import Packages from "../Sections/Packages";
import Contact from "../Sections/Contact";
import ReactGA from "react-ga4";

ReactGA.send({ hitType: "pageview", page: "/home", title: "Homepage" });

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
