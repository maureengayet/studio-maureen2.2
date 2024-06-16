import { Link } from "react-router-dom";
import { styles } from "./Header.css";
import { useState, useRef } from "react";
import ToggleMode from '../../Components/ToggleMode/ToggleMode'; 

const Header = () => {
	const scrollToTop = () => {
		document.documentElement.scrollTo({
		  top: 0,
		  behavior: 'smooth'
		});
	}

	return (
		<header className="App-header fade-in-layout">
			<Link className="Home-link" to="/">
				<h1 className="text-2xl dm-serif-display-regular" onClick={scrollToTop}>Studio Maureen</h1>
				{/* <img src={logo} className="App-logo" alt="logo" /> */}
			</Link>

			<ToggleMode />

			<nav>
				<ul className="uppercase font-bold tracking-wide text-sm">
					<li>
						<Link to="/">Services</Link>
					</li>
					<li>
						<Link to="/">Work</Link>
					</li>
					<li>
						<Link to="/">Contact</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
