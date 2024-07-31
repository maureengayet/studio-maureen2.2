import { ArrowDownCircleIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import React, { useState, useEffect, useRef } from "react";

const About = () => {
  const [scrolled, setScrolled] = useState(0);
  const parallaxRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setScrolled(scrollTop);
    };

    // Event listener to track scroll position
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="relative max-w w-full leading-snug lg:leading-snug">
      <div className="max-w w-full h-px mt-24 bg-[var(--color-white)] opacity-30"></div>
      <div className="flex my-24">
        <div className="small-caps text-small w-1/5 font-semibold">
          Introduction
        </div>
        <div className="w-4/5 text-3xl">
          <p className="mb-8">
            <span className="ml-12">An </span>experienced freelance web designer
            and developer dedicated to creating innovative digital solutions.
            With over 8 years of expertise, I specialise in crafting
            high-quality, user-friendly applications tailored to meet your
            unique needs.
          </p>
          <p>
            Whether you're a startup looking to build your first app or an
            established business seeking to enhance your digital presence, I'm
            here to bring your ideas to life.
          </p>
        </div>
      </div>
      {/* <img
        className="transition-colors rounded-2xl mb-24 bg-[--bg-cards]"
        src="./cards.png"
        alt="Studio Maureen Cards"
      /> */}
      <section id="parallax" className="mb-24">
					<div className="background-image bg-[--bg-cards]" style={{ transform: `translateY(${(scrolled * 0.3) - 520}px)` }}></div>
				</section>
    </section>
  );
};

export default About;
