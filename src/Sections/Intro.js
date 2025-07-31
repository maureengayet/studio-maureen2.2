import { motion } from 'framer-motion';
import { ArrowDownCircleIcon } from '@heroicons/react/24/solid';
import { ArrowUpRightIcon } from '@heroicons/react/24/solid';
import { ClipboardIcon } from '@heroicons/react/24/outline';

const Intro = () => {
  function getNextMonthQuarter() {
    const now = new Date();
    const nextMonth = (now.getMonth() + 1) % 12;
    const quarter = Math.floor(nextMonth / 3) + 1;
    return `Booking Q${quarter}`;
  }

  return (
    <section id="intro" className="align-center relative flex h-[700px] justify-center sm:h-svh">
      <div className="bg"></div>
      <motion.div
        className="max-w-[80%] self-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.5 }}
      >
        <h1 className="serif text-huge mt-[-8vh] text-center text-[2.5rem] sm:text-[4rem] md:mt-[-2vh] md:text-[4.5rem] lg:text-[4.8rem] xl:text-[5.4rem] 2xl:text-[5.8rem]">
          {/* Bespoke <span className="italic">development</span>{" "}
          <span className="new-line">for</span>{" "}
          <span className="italic">unique</span> front-end{" "}
          <span className="new-line">solutions.</span> Crafting digital
          solutions <span className="new-line">to</span>{" "}
          <span className="italic">elevate</span> your brand. */}
          Bespoke <span className="italic">digital </span>solutions, <span className="new-line" />
          to elevate your brand.
        </h1>
      </motion.div>
      <div className="intro-footer inner-p-x max-w wide absolute bottom-4 flex w-full flex-col justify-between gap-y-4 sm:bottom-6 sm:flex-row">
        <div className="flex grow">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.5 }}
            className="w-1/2 sm:w-1/2 md:w-1/3 lg:w-1/4"
          >
            <h3 className="text-small small-caps font-semibold">Current</h3>
            <p className="text-small small-caps">Available for Work</p>
            <p className="text-small small-caps">{getNextMonthQuarter()}</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.7, duration: 0.5 }}
            className="w-1/2 sm:w-1/2 md:w-1/3 lg:w-1/4"
          >
            <h3 className="text-small small-caps font-semibold">Contact</h3>
            <p link="/contact" className="text-small small-caps uppercase">
              <a href="mailto:maureen@studio-maureen.com">Email us </a>
              <ClipboardIcon className="mb-1 ml-1 inline size-3" />
            </p>

            <p className="text-small small-caps uppercase">
              <a target="_blank" href="http://instagram.com/studio__maureen" rel="noreferrer">
                @Studio__Maureen
              </a>{' '}
              <ArrowUpRightIcon className="mb-1 ml-1 inline size-3" />
            </p>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.2, duration: 0.5 }}
          className="flex hidden items-end text-right sm:flex sm:w-1/5 sm:justify-end"
        >
          <p className="text-small small-caps uppercase">
            <ArrowDownCircleIcon className="mb-1 mr-2 inline size-5" /> Scroll
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Intro;
