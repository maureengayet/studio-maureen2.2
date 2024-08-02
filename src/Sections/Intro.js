import { motion } from "framer-motion";
import { ArrowDownCircleIcon } from "@heroicons/react/24/solid";
import { ArrowUpRightIcon } from "@heroicons/react/24/solid";
import { ClipboardIcon } from "@heroicons/react/24/outline";

const Intro = () => {
  return (
    <section
      id="intro"
      className="h-[700px] sm:h-svh relative flex justify-center align-center"
    >
      <div className="bg"></div>
      {/* <div aria-hidden="true" className="intro-bg blur-3xl">
        <div
          style={{
            clipPath:
              "polygon(5.94% 54.5%, 11.46% 54.5%, 19.31% 59.03%, 25.78% 59.03%, 23.85% 65.2%, 30.72% 68.13%, 36.1% 64.22%, 39.68% 73.47%, 46.43% 69.41%, 55.73% 69.83%, 60.25% 63.97%, 59.34% 57.67%, 66.53% 51.86%, 73.44% 47.95%, 79.28% 53.32%, 86.74% 51.86%, 92.9% 56.35%, 92.9% 63.97%, 89.82% 69.12%, 81.22% 72.76%, 70.36% 73.38%, 62.45% 69.24%, 55.5% 81.75%, 39.94% 95.84%, 18.99% 94.51%, 11.25% 86.29%, 5.94% 80.65%, 1.27% 60.98%)",
          }}
          className="bg-shape w-[200vw] md:w-[100vw] top-[20vh] left-[-80vw] md:left-[-60vw] sm:top-[0] md:top-[45vh] lg:top-[-10vh] rotate-[20deg] -z-10 aspect-[1155/678] bg-gradient-to-tr from-[--gradient-1] to-[--gradient-2] opacity-[--opacity]"
        />
      </div> */}

      <motion.div
        className="self-center max-w-[80%]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.5 }}
      >
        <h1 className="serif text-huge text-center mt-[-8vh] md:mt-[-2vh] text-[2.5rem] sm:text-[4rem] md:text-[4.5rem] lg:text-[4.8rem] xl:text-[5.4rem] 2xl:text-[6.5rem]">
          Bespoke <span className="italic">development</span>{" "}
          <span className="new-line">for</span>{" "}
          <span className="italic">unique</span> front-end{" "}
          <span className="new-line">solutions.</span> Crafting digital
          solutions <span className="new-line">to</span>{" "}
          <span className="italic">elevate</span> your brand.
        </h1>
      </motion.div>
      <div className="intro-footer inner-p-x max-w w-full wide absolute bottom-4 sm:bottom-10 flex justify-between gap-y-4 flex-col sm:flex-row">
        <div className="flex grow">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.5 }}
            className="w-1/2 sm:w-1/2 md:w-1/3 lg:w-1/4"
          >
            <h3 className="font-semibold text-small small-caps">Current</h3>
            <p className="text-small small-caps">Available for Work</p>
            <p className="text-small small-caps">Booking Q3</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.7, duration: 0.5 }}
            className="w-1/2 sm:w-1/2 md:w-1/3 lg:w-1/4"
          >
            <h3 className="font-semibold text-small small-caps">Contact</h3>
            <p link="/contact" className="uppercase text-small small-caps">
              <a href="mailto:maureen@studio-maureen.com" >Email us </a>
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
