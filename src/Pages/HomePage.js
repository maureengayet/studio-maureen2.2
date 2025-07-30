import Intro from "./../Sections/Intro";
import About from "../Sections/About";
import Work from "./../Sections/Work";
import Contact from "../Sections/Contact";

const HomePage = () => {
  return (
    <section className="home">
      <Intro />
      <About />
      <Work />
      <Contact />
    </section>
  );
};

export default HomePage;
