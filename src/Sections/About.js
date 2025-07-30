import { useEffect, useState } from "react";
import { Parallax } from "react-scroll-parallax";

const About = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    if (currentTheme === "dark" || currentTheme === "light") {
      setTheme(currentTheme);
    }
  }, []);

  return (
    <section
      id="about"
      className="relative max-w w-full leading-snug lg:leading-snug"
    >
      <div className="max-w w-full h-px mt-10 sm:mt-24 bg-[var(--color-white)] opacity-30"></div>
      <div className="flex flex-col sm:flex-row gap-y-10 my-10 sm:my-24 inner-p-x">
        <div className="small-caps text-small w-1/5 font-semibold">
          Introduction
        </div>
        <div className="sm:w-4/5 text-2xl sm:text-3xl">
          <p className="mb-8">
            <span className="sm:ml-12">An </span>experienced freelance web
            designer and developer dedicated to creating innovative digital
            solutions. With over 8 years of expertise, I specialise in crafting
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
      <div className="wide relative overflow-hidden rounded-2xl h-[500px] md:h-[750px] lg:h-[850px] mb-20 sm:mb-24">
        <Parallax speed={-30} className="h-full w-full">
          <div className="relative h-full w-full">
            <img
              className="
          absolute inset-0
          w-full h-full
          object-cover
          object-center
          transition-transform
          scale-[1.3] sm:scale-[1.2] md:scale-100
        "
              src={theme === "dark" ? "./cards-dark.jpg" : "./cards-light.jpg"}
              alt="Studio Maureen Cards"
            />
          </div>
        </Parallax>
      </div>
    </section>
  );
};

export default About;
