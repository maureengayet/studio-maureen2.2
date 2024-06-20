import { styles } from "./Services.css";

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
			<div key={index} className="service">
				<h3 className="small-caps">{service.title}</h3>
				<p>{service.text}</p>
			</div>
		);
	});

	return (
		<section className="Services">
			<div className="section-header">
				<p className="small-caps">Services</p>
				<h2>Services provided by me.</h2>
			</div>
			<div className="services-group">{serviceList}</div>
		</section>
	);
};

export default Services;
