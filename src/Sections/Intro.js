// import "./Intro.css";
import { motion } from "framer-motion";

const Intro = () => {
	return (
		<section className="h-svh relative flex justify-center align-center">
			<motion.div
				className="self-center w-11/12"
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ delay: 1, duration: 1 }}
			>
				<h1 className="fade-in-layout serif text-huge text-center">
					Bespoke <span className="italic">development</span> for <span className="italic">unique</span> front-end solutions. Crafting digital
					solutions to <span className="italic">elevate</span> your brand.
				</h1>
			</motion.div>
			<div className="fade-in-layout intro-footer absolute bottom-8 left-8 flex gap-x-32">
				<motion.div>
					<h3 className="font-semibold small-caps">Current</h3>
					<p className="small-caps">Available for Work</p>
					<p className="small-caps">Booking Q3</p>
				</motion.div>
				<motion.div>
					<h3 className="font-semibold small-caps">Contact</h3>
					<p className="uppercase small-caps">Email</p>
					<p className="uppercase small-caps">Instagram</p>
				</motion.div>
			</div>
		</section>
	);
};

export default Intro;
