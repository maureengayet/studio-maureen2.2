import { motion } from "framer-motion";
import { ArrowDownCircleIcon } from "@heroicons/react/24/solid";
import { ArrowLongDownIcon } from "@heroicons/react/24/outline";
import { ArrowUpRightIcon } from "@heroicons/react/24/solid";

const Intro = () => {
  return (
    <section className="h-svh relative flex justify-center align-center">
				<div aria-hidden="true" className="absolute bottom-[1rem] -z-10 transform-gpu overflow-hidden blur-3xl">
        <div style={{
            clipPath:
              //'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              //'polygon(5.94% 54.5%, 11.46% 54.5%, 15.79% 57.18%, 31.48% 69.78%, 30.98% 62%, 37.36% 57.07%, 45.58% 59.75%, 58.35% 67.39%, 65.45% 56.78%, 68.78% 33.5%, 72.43% 25.61%, 80.61% 22.65%, 96.43% 24.26%, 99.5% 33.5%, 99.91% 51.56%, 96.65% 62.74%, 85.22% 65%, 76.34% 53.81%, 71.78% 66.19%, 55.5% 81.75%, 39.94% 95.84%, 18.99% 94.51%, 11.25% 86.29%, 5.94% 80.65%, 1.27% 60.98%)'
              //'polygon(5.94% 54.5%, 11.46% 54.5%, 19.31% 59.03%, 25.78% 59.03%, 23.85% 65.2%, 30.72% 68.13%, 36.1% 64.22%, 39.68% 73.47%, 46.43% 69.41%, 55.73% 69.83%, 60.25% 63.97%, 63.97% 53.68%, 71.43% 46.84%, 77.34% 33.89%, 89.02% 33.89%, 94.67% 44.11%, 92.9% 56.31%, 92.9% 63.97%, 89.82% 69.12%, 81.22% 72.76%, 70.36% 73.38%, 62.45% 69.24%, 55.5% 81.75%, 39.94% 95.84%, 18.99% 94.51%, 11.25% 86.29%, 5.94% 80.65%, 1.27% 60.98%)'
            'polygon(5.94% 54.5%, 11.46% 54.5%, 19.31% 59.03%, 25.78% 59.03%, 23.85% 65.2%, 30.72% 68.13%, 36.1% 64.22%, 39.68% 73.47%, 46.43% 69.41%, 55.73% 69.83%, 60.25% 63.97%, 59.34% 57.67%, 66.53% 51.86%, 73.44% 47.95%, 79.28% 53.32%, 86.74% 51.86%, 92.9% 56.35%, 92.9% 63.97%, 89.82% 69.12%, 81.22% 72.76%, 70.36% 73.38%, 62.45% 69.24%, 55.5% 81.75%, 39.94% 95.84%, 18.99% 94.51%, 11.25% 86.29%, 5.94% 80.65%, 1.27% 60.98%)'
            }}
          className="relative left-1/2 -z-10 aspect-[1155/678] w-[120rem]  max-w-none -translate-x-1/2 rotate-[20deg] bg-gradient-to-tr from-[--gradient-1] to-[--gradient-2] opacity-[--opacity]"
        />

        
      </div>

      <motion.div
        className="self-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 1 }}
      >
        <h1 className="fade-in-layout serif text-huge text-center">
          Bespoke <span className="italic">development</span>{" "}
          <span className="new-line">for</span>{" "}
          <span className="italic">unique</span> front-end{" "}
          <span className="new-line">solutions.</span> Crafting digital
          solutions <span className="new-line">to</span>{" "}
          <span className="italic">elevate</span> your brand.
        </h1>
      </motion.div>
      <div className="fade-in-layout intro-footer max-w w-full  absolute bottom-4 flex justify-between">
        <div className="flex grow">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 1 }}
            className="w-1/4"
          >
            <h3 className="font-semibold text-small small-caps">Current</h3>
            <p className="text-small small-caps">Available for Work</p>
            <p className="text-small small-caps">Booking Q3</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.7, duration: 1 }}
            className="w-1/4"
          >
            <h3 className="font-semibold text-small small-caps">Contact</h3>
            <p className="uppercase text-small small-caps">
              maureen@studio-maureen.com
            </p>
            <p className="uppercase text-small small-caps">
              <a target="_blank" href="http://instagram.com/studio__maureen">
                @Studio__Maureen
              </a>{" "}
              <ArrowUpRightIcon className="size-3 inline ml-1 mb-1" />
            </p>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.2, duration: 1 }}
          className="w-1/5 text-right flex items-end justify-end"
        >
          <p className="uppercase text-small small-caps">
            Scroll <ArrowDownCircleIcon className="size-5 inline ml-2 mb-1" />
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Intro;
