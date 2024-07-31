import React from "react";
import ContactForm from "./../Components/ContactForm/ContactForm";

function Contact() {
  return (
    <section className="Contact flex grow justify-center rounded-2xl overflow-hidden">
      <div className="flex flex-col max-w narrow items-center px-12 py-20 justify-center">
        <div className="max-w-[800px] flex flex-col gap-y-12">
          <div className="">
            <p className="small-caps my-4 text-center">Contact</p>
            <h3 className="serif text-2xl sm:text-3xl lg:text-4xl text-center">
              Please fill out the contact form below, and I will get back to you
              within two days.
            </h3>
          </div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

export default Contact;
