import Marquee from "./../Components/Marquee/Marquee";
import Parallax from "./../Components/Parallax/Parallax";

const Services = () => {
  const services = [
    {
      title: "Development",
      text: "Harnessing the power of frameworks like React and Angular to build dynamic, responsive websites that deliver exceptional user experiences.",
    },
    {
      title: "UI/UX Design",
      text: "Designing intuitive and visually compelling interfaces that boost user engagement and satisfaction, ensuring a seamless user experience.",
    },
    {
      title: "Shopfiy",
      text: "Creating custom Shopify themes tailored to your brand, enhancing your online store with unique and engaging designs.",
    },
    {
      title: "WordPress",
      text: "Developing custom themes and plugins to extend your website's capabilities, providing tailored solutions to meet your unique needs.",
    },
  ];

  let serviceList = [];

  services.forEach((service, index) => {
    serviceList.push(
      <div key={index} className="service w-full">
        <h3 className="small-caps my-4">{service.title}</h3>
        <p className="my-4">{service.text}</p>
      </div>
    );
  });

  return (
    <section className="Services bg-1 pt-16 ">
      <Marquee text="Service Service Service Service Service Service Service Service Service" />
      <div className="services-group fade-in max-w narrow pt-36 grid pb-16 md:grid-cols-2 lg:grid-cols-4 gap-y-8 gap-x-12 md:gap-x-20">
        {serviceList}
      </div>
      <Parallax src="./contact.jpg" />
    </section>
  );
};

export default Services;
