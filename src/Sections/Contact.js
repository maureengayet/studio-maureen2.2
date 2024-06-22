import React from "react";
import ContactForm from "./../Components/ContactForm/ContactForm";


function Contact() {
	return (
		<section className="Contact flex flex-col lg:flex-row justify-center">

			<div className="relative flex-grow min-h-80">
				<img className="pointer-events-none absolute inset-0 w-full h-full object-cover" src="./contact.jpg"></img>
			</div>
			
			<div className="flex flex-col items-center px-10 py-10 justify-center">
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
