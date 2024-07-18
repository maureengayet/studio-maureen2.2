import "./Header.css";
import { Link, useLocation } from "react-router-dom";
import ToggleMode from "../Components/ToggleMode/ToggleMode";

const Header = () => {
	const location = useLocation();

	const scrollToTopSmooth = () => {
		document.documentElement.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	const scrollToTopInstant = () => {
		window.scrollTo(0, 0);
	};

	const scrollToTop = (url) => {
		if (location.pathname === url) {
			scrollToTopSmooth();
		} else {
			scrollToTopInstant();
		}
	};

	const navigation = [{ breadcrumb: "Contact", url: "/contact" }];

	const navigationList = navigation.map((link, index) => (
		<p key={index} className={`${location.pathname === link.url ? "current" : ""} small-caps`}>
			<Link onClick={() => scrollToTop(link.url)} to={link.url}>
				{link.breadcrumb}
			</Link>
		</p>
	));

	return (
		<header className="App-header fade-in-layout wide">
			<Link className="Home-link" to="/" onClick={() => scrollToTop("/")}>
				<h1 className="text-2xl select-none serif">Studio Maureen</h1>
			</Link>

			<nav>
				<ToggleMode />
				{navigationList}
			</nav>
		</header>
	);
};

export default Header;
