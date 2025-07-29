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
		<p key={index} className={`${location.pathname === link.url ? "current" : ""} font-semibold text-small small-caps`}>
			<Link onClick={() => scrollToTop(link.url)} to={link.url}>
				{link.breadcrumb}
			</Link>
		</p>
	));

	return (
		<header id="header" className="wide">
			<Link className="Home-link" to="/" onClick={() => scrollToTop("/")}>
				<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
					<rect width="40" height="40" rx="20" fill="var(--logo-fill)" />
					<path
						d="M9.86914 28.6673V28.4047L10.4032 28.2209C11.0084 28.0283 11.3111 27.5293 11.3111 26.7239V13.2774C11.3111 12.9273 11.2666 12.6471 11.1775 12.437C11.1063 12.2269 10.9016 12.0518 10.5634 11.9118L9.86914 11.5966V11.334H15.0227L19.9626 24.0451L24.6088 11.334H29.8691V11.5966L29.4419 11.7542C29.1037 11.8767 28.8723 12.0518 28.7477 12.2794C28.623 12.4895 28.5607 12.7697 28.5607 13.1198V26.8552C28.5607 27.2054 28.6052 27.4767 28.6942 27.6693C28.7832 27.8619 28.9969 28.0283 29.3351 28.1683L29.8691 28.4047V28.6673H23.2203V28.4047L23.781 28.1683C24.1193 28.0283 24.3329 27.8619 24.4219 27.6693C24.5109 27.4767 24.5554 27.2054 24.5554 26.8552V20.9461L24.6088 13.435L19.028 28.6673H17.6929L11.8718 13.6188L11.9519 20.1582V26.7764C11.9519 27.1616 12.0053 27.4767 12.1121 27.7219C12.2367 27.9495 12.4682 28.1158 12.8064 28.2209L13.3938 28.4047V28.6673H9.86914Z"
						fill="var(--logo-text)"
					/>
				</svg>
			</Link>

			<nav>
				<ToggleMode />
				{navigationList}
			</nav>
		</header>
	);
};

export default Header;
