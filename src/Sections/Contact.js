import React from "react";
import ContactForm from "./../Components/ContactForm/ContactForm";

function Contact() {
	return (
		<section className="Contact flex grow justify-center rounded-2xl overflow-hidden">
			<div className="flex flex-col items-center px-12 py-20 justify-center lg:w-2/3 2xl:w-3/5">
				<div className="max-w-[800px] flex flex-col gap-y-12">
					<div className="section-header">
						<p>Contact</p>
						<h3>Please fill out the contact form below, and I will get back to you within two days.</h3>
					</div>
					<ContactForm />
				</div>
			</div>
		</section>
	);
}

export default Contact;
