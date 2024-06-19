import React from "react";
import ContactForm from "../../Components/ContactForm/ContactForm";
import styles from "./Contact.css";

function Contact() {
	return (
		<section className="Contact">
			<div class="section-header">
				<p>Contact</p>
				<h3>Please use the contact form below to get in touch, and I'll respond as soon as possible.</h3>
			</div>
			<ContactForm />
		</section>
	);
}

export default Contact;
