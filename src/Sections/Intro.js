import "./Intro.css";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Intro = () => {
	return (
		<section className="wide fade-in-layout wide h-svh">
			<h1 className="serif text-9xl">
				<motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1, duration: 1 }}>
					Bespoke <span className="italic">development</span> for <span className="italic">unique</span> front-end solutions. Crafting digital
					solutions to <span className="italic">elevate</span> your brand.
				</motion.div>
			</h1>
		</section>
	);
};

export default Intro;
