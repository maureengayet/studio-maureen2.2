import { motion } from "framer-motion";
import { ArrowDownCircleIcon } from "@heroicons/react/24/solid";
import { ArrowLongDownIcon } from "@heroicons/react/24/outline";
import { ArrowUpRightIcon } from "@heroicons/react/24/solid";

const Intro = () => {
	return (
		<section className="h-svh relative flex justify-center align-center">

				{/* <svg className="absolute left-[-10%] animate-[spin_6s_linear_infinite]" width="945" height="774" viewBox="0 0 945 774" fill="none" xmlns="http://www.w3.org/2000/svg">
				<g filter="url(#filter0_f_783_16)">
				<ellipse cx="412.858" cy="387.168" rx="169.825" ry="340.507" transform="rotate(75 412.858 387.168)" fill="#D4B3E9" fill-opacity="0.4"/>
				</g>
				<defs>
				<filter id="filter0_f_783_16" x="-119.01" y="0.918396" width="1063.73" height="772.499" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
				<feFlood flood-opacity="0" result="BackgroundImageFix"/>
				<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
				<feGaussianBlur stdDeviation="100" result="effect1_foregroundBlur_783_16"/>
				</filter>
				</defs>
				</svg>

				<svg width="648" className="absolute" height="648" viewBox="0 0 648 648" fill="none" xmlns="http://www.w3.org/2000/svg">
				<g filter="url(#filter0_f_783_17)">
				<ellipse cx="324.075" cy="324.075" rx="101.564" ry="141.787" transform="rotate(-45 324.075 324.075)" fill="#D5CF43" fill-opacity="0.4"/>
				</g>
				<defs>
				<filter id="filter0_f_783_17" x="0.738281" y="0.739136" width="646.672" height="646.671" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
				<feFlood flood-opacity="0" result="BackgroundImageFix"/>
				<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
				<feGaussianBlur stdDeviation="100" result="effect1_foregroundBlur_783_17"/>
				</filter>
				</defs>
				</svg> */}
			
			<motion.div
				className="self-center"
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ delay: .8, duration: 1 }}
			>
				<h1 className="fade-in-layout serif text-huge text-center">
					Bespoke <span className="italic">development</span> <span className="new-line">for</span> <span className="italic">unique</span> front-end <span className="new-line">solutions.</span> Crafting digital
					solutions <span className="new-line">to</span> <span className="italic">elevate</span> your brand.
				</h1>
			</motion.div>
			<div className="fade-in-layout intro-footer max-w w-full  absolute bottom-4 flex justify-between">
				<div className="flex grow">
				<motion.div 
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ delay: 1.2, duration: 1 }}
				className="w-1/4">
					<h3 className="font-semibold text-small small-caps">Current</h3>
					<p className="text-small small-caps">Available for Work</p>
					<p className="text-small small-caps">Booking Q3</p>
				</motion.div>
				<motion.div 
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ delay: 1.7, duration: 1 }}
				className="w-1/4">
					<h3 className="font-semibold text-small small-caps">Contact</h3>
					<p className="uppercase text-small small-caps">maureen@studio-maureen.com</p>
					<p className="uppercase text-small small-caps"><a target="_blank" href="http://instagram.com/studio__maureen">@Studio__Maureen</a> <ArrowUpRightIcon className="size-3 inline ml-1 mb-1" /></p>
				</motion.div></div>
				<motion.div 
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ delay: 2.2, duration: 1 }}
				className="w-1/5 text-right flex items-end justify-end">
					<p className="uppercase text-small small-caps">Scroll <ArrowDownCircleIcon className="size-5 inline ml-2 mb-1" /></p>
				</motion.div>
				
			</div>
		</section>
	);
};

export default Intro;
