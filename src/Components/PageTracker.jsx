import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function PageTracker() {
	const location = useLocation();

	useEffect(() => {
		if (window.gtag) {
			window.gtag("event", "page_view", {
				page_title: document.title,
				page_location: window.location.href,
				page_path: location.pathname,
			});
		}
	}, [location]);

	return null;
}
