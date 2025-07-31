import "./App.css";
import Header from "./Sections/Header";
import Footer from "./Sections/Footer";
import { Outlet } from "react-router-dom";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import CookieConsent, { getCookieConsentValue } from "react-cookie-consent";
import PageTracker from "./Components/PageTracker";
import { ParallaxProvider } from "react-scroll-parallax";

function App() {
	const [gaInitialized, setGaInitialized] = useState(false);

	useEffect(() => {
		const consent = getCookieConsentValue("CookieConsent");
		if (consent === "true" && !gaInitialized) {
			loadGoogleAnalytics();
			setGaInitialized(true);
		}
	}, [gaInitialized]);

	const handleAcceptCookies = () => {
		if (!gaInitialized) {
			loadGoogleAnalytics();
			setGaInitialized(true);
		}
	};

	const loadGoogleAnalytics = () => {
		if (window.gtag) return;

		const gaId = process.env.REACT_APP_GA_ID;
		if (!gaId) {
			console.warn("Google Analytics ID not found in environment variables.");
			return;
		}

		const script = document.createElement("script");
		script.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`;
		script.async = true;
		document.head.appendChild(script);

		window.dataLayer = window.dataLayer || [];
		function gtag() {
			window.dataLayer.push(arguments);
		}
		window.gtag = gtag;

		gtag("js", new Date());
		gtag("config", gaId, {
			anonymize_ip: true,
		});
	};

	return (
		<>
			{gaInitialized && <PageTracker />}

			<ParallaxProvider>
				<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2, duration: 0.7 }}>
					<Header />
					<Outlet />
					<Footer />
				</motion.div>
			</ParallaxProvider>

			<CookieConsent
				disableStyles={true}
				location="bottom"
				buttonText="Accept"
				declineButtonText="Decline"
				enableDeclineButton
				onAccept={handleAcceptCookies}
				cookieName="Cookie-consent"
				containerClasses="fixed bottom-0 left-0 m-[1.3rem] rounded-md w-[calc(100%-2.6rem)] text-center sm:text-left z-[9999] bg-[var(--bg-color-1)] text-[var(--text-color)] text-sm px-6 py-4 flex flex-col sm:flex-row justify-between items-center gap-8"
				buttonWrapperClasses="flex flex-row gap-2 justify-center sm:justify-end"
				buttonClasses="bg-[var(--color-purple)] text-[var(--color-green-dark)] text-sm px-4 py-2 rounded hover:bg-[var(--color-purple)] transition"
				declineButtonClasses="bg-white text-[var(--color-green-dark)] text-sm px-4 py-2 rounded transition"
			>
				This website uses third-party cookies to personalize content and analyze site traffic.{" "}
				<a href="/privacy" className="underline hover:text-[var(--color-purple)]">
					Learn more
				</a>
			</CookieConsent>
		</>
	);
}

export default App;
