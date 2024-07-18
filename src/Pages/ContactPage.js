import Contact from "../Sections/Contact";
import ReactGA from "react-ga4";

ReactGA.send({ hitType: "pageview", page: "/contact", title: "Contact" });

const ContactPage = () => {
	return (
		<div className="full-height">
			<Contact></Contact>
		</div>
	);
};

export default ContactPage;
