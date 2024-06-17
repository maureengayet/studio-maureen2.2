import React from "react";
import ContactForm from "../../Components/ToggleMode/ContactForm/ContactForm";
import styles from "./Contact.css";

function Contact() {
	return (
		<section className="Contact">
			<h3>Please use the contact form below to get in touch, and I'll respond as soon as possible.</h3>
			<ContactForm />
		</section>
	);
}

export default Contact;
