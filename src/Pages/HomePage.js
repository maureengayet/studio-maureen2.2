import Intro from "./../Sections/Intro/Intro";
import Services from "./../Sections/Services/Services";
import Work from "./../Sections/Work/Work";
import Pricing from "./../Sections/Pricing/Pricing";
import Contact from "../Sections/Contact/Contact";

const HomePage = () => {
	return (
		<section className="">
			<Intro />
			<Services />
			<Work />
			<Pricing />
			<Contact />
		</section>
	);
};

export default HomePage;
