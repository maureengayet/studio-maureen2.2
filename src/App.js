import "./App.css";
import Header from "./Sections/Header";
import Footer from "./Sections/Footer";
import { Outlet } from "react-router-dom";
import { motion } from "framer-motion";

function App() {
	return (
		<motion.div 
		initial={{ opacity: 0}}
		 		animate={{ opacity: 1 }}
		 		transition={{ delay: .2, duration: 1 }}>
			<Header />
			<Outlet />
			<Footer />
		</motion.div>
	);
}

export default App;
