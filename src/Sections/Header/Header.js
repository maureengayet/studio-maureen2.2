import { Link } from "react-router-dom";
import { styles } from "./Header.css";
import { useState, useEffect, useRef } from "react";

const Header = () => {
	const [isOpen, setIsOpen] = useState(false);
	const menuRef = useRef(null);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	const closeMenu = () => {
		setIsOpen(false);
	};

	//   useEffect(() => {
	//     const handleClickOutside = (event) => {
	//       if (menuRef.current && !menuRef.current.contains(event.target)) {
	//         console.log('Clicked outside');
	//         closeMenu();
	//       }
	//     };

	//     document.addEventListener('mousedown', handleClickOutside);
	//     return () => {
	//       document.removeEventListener('mousedown', handleClickOutside);
	//     };
	//   }, [menuRef]);

	return (
		<header className="App-header fade-in-layout">
			<Link className="Home-link" to="/">
				<h1 className="text-2xl dm-serif-display-regular">Studio Maureen</h1>
				{/* <img src={logo} className="App-logo" alt="logo" /> */}
			</Link>

			{/* <div onClick={toggleMenu} className={isOpen ? "hamburger-menu open" : "hamburger-menu"}>
				<div className="bar"></div>
				<div className="bar"></div>
				<div className="bar"></div>
			</div> */}

			<nav ref={menuRef} className={isOpen ? "nav-menu open" : "nav-menu closed"}>
				<ul className="uppercase font-bold tracking-wide text-sm" onClick={closeMenu}>
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
