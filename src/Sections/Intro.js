import { motion } from "framer-motion";
import { ArrowDownCircleIcon } from "@heroicons/react/24/solid";
import { ArrowUpRightIcon } from "@heroicons/react/24/solid";
import { ClipboardIcon } from "@heroicons/react/24/outline";

const Intro = () => {
	function getNextMonthQuarter() {
		const now = new Date();
		const nextMonth = (now.getMonth() + 1) % 12;
		const quarter = Math.floor(nextMonth / 3) + 1;
		return `Booking Q${quarter}`;
	}

	return (
		<section id="intro" className="h-[700px] sm:h-svh relative flex justify-center align-center">
			<div className="bg"></div>
			<motion.div
				className="self-center max-w-[80%]"
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ delay: 0.8, duration: 0.5 }}
			>
				<h1 className="serif text-huge text-center mt-[-8vh] md:mt-[-2vh] text-[2.5rem] sm:text-[4rem] md:text-[4.5rem] lg:text-[4.8rem] xl:text-[5.4rem] 2xl:text-[5.8rem]">
					Bespoke <span className="italic">development</span> <span className="new-line">for</span> <span className="italic">unique</span> front-end{" "}
					<span className="new-line">solutions.</span> Crafting digital solutions <span className="new-line">to</span>{" "}
					<span className="italic">elevate</span> your brand.
				</h1>
			</motion.div>
			<div className="intro-footer inner-p-x max-w w-full wide absolute bottom-4 sm:bottom-6 flex justify-between gap-y-4 flex-col sm:flex-row">
				<div className="flex grow">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 1.2, duration: 0.5 }}
						className="w-1/2 sm:w-1/2 md:w-1/3 lg:w-1/4"
					>
						<h3 className="font-semibold text-small small-caps">Current</h3>
						<p className="text-small small-caps">Available for Work</p>
						<p className="text-small small-caps">{getNextMonthQuarter()}</p>
					</motion.div>
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 1.7, duration: 0.5 }}
						className="w-1/2 sm:w-1/2 md:w-1/3 lg:w-1/4"
					>
						<h3 className="font-semibold text-small small-caps">Contact</h3>
						<p link="/contact" className="uppercase text-small small-caps">
							<a href="mailto:maureen@studio-maureen.com">Email us </a>
							<ClipboardIcon className="size-3 inline ml-1 mb-1" />
						</p>

						<p className="uppercase text-small small-caps">
							<a target="_blank" href="http://instagram.com/studio__maureen" rel="noreferrer">
								@Studio__Maureen
							</a>{" "}
							<ArrowUpRightIcon className="size-3 inline ml-1 mb-1" />
						</p>
					</motion.div>
				</div>
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 2.2, duration: 0.5 }}
					className="hidden sm:flex sm:w-1/5 text-right flex items-end sm:justify-end"
				>
					<p className="uppercase text-small small-caps">
						<ArrowDownCircleIcon className="size-5 inline mr-2 mb-1" /> Scroll
					</p>
				</motion.div>
			</div>
		</section>
	);
};

export default Intro;
