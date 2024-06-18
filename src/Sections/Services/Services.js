import { styles } from "./Services.css";

const Services = () => {
	return (
		<section className="Services">
			<div class="section-header">
				<p className="uppercase font-bold tracking-wide text-sm">Services</p>
				<h2>Services provided by me.</h2>
			</div>
			<div className="services-group">
				<div className="service">
					<h4 className="uppercase font-bold tracking-wide text-sm">Development</h4>
					<p className="tracking-wide">Leveraging powerful frameworks like React and Angular to build dynamic and responsive websites.</p>
				</div>
				<div className="service">
					<h4 className="uppercase font-bold tracking-wide text-sm">UI/UX Design</h4>
					<p className="tracking-wide">Crafting intuitive and visually appealing designs that improve user engagement and satisfaction.</p>
				</div>
				<div className="service">
					<h4 className="uppercase font-bold tracking-wide text-sm">Shopify & WordPress</h4>
					<p className="tracking-wide">Providing custom themes and plugins to enhance your website's functionality.</p>
				</div>
			</div>
		</section>
	);
};

export default Services;
