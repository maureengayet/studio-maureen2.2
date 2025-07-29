import React from "react";
import ContactForm from "./../Components/ContactForm/ContactForm";

function Contact() {
	return (
		<section className="Contact inner-p-x flex grow justify-center rounded-2xl overflow-hidden">
			<div className="flex flex-col max-w items-center pt-10 sm:py-20 justify-center">
				<div className="max-w-[800px] flex flex-col gap-y-12">
					<div className="">
						<p className="small-caps text-small my-4 text-center font-semibold">Contact</p>
						<h3 className="serif text-4xl sm:text-5xl lg:text-6xl text-center">
							Please fill out the contact form below, and I will get back to you within two days.
						</h3>
					</div>
					<ContactForm />
				</div>
			</div>
		</section>
	);
}

export default Contact;
