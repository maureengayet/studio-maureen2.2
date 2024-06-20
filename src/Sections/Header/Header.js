import { Link, useLocation } from "react-router-dom";
import { styles } from "./Header.css";
import ToggleMode from "../../Components/ToggleMode/ToggleMode";

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
		<li key={index} className={location.pathname === link.url ? "current" : ""}>
			<Link onClick={() => scrollToTop(link.url)} to={link.url}>
				{link.breadcrumb}
			</Link>
		</li>
	));

	return (
		<header className="App-header fade-in-layout">
			<Link className="Home-link" to="/" onClick={() => scrollToTop("/")}>
				<h1 className="text-2xl">Studio Maureen</h1>
			</Link>

			<nav>
				<ToggleMode />
				<ul className="small-caps">{navigationList}</ul>
			</nav>
		</header>
	);
};

export default Header;
