import React from 'react';
import ContactForm from './../Components/ContactForm/ContactForm';

function Contact() {
  return (
    <section className="Contact inner-p-x flex grow justify-center overflow-hidden rounded-2xl">
      <div className="max-w flex flex-col items-center justify-center pt-10 sm:py-20">
        <div className="flex max-w-[800px] flex-col gap-y-12">
          <div className="">
            <p className="small-caps text-small my-4 text-center font-semibold">Contact</p>
            <h3 className="serif text-center text-4xl sm:text-5xl lg:text-6xl">
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
