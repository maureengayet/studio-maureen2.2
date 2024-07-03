import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import "./ContactForm.css";

function Contact() {
	const [state, handleSubmit] = useForm("mbjqryjv");
	if (state.succeeded) {
		return <p className="form-thanks">Thank you! I'll get back to you as soon as possible.</p>;
	}
	return (
		<form onSubmit={handleSubmit}>
			<div className="form-name">
				<div className="firstname">
					<label className="required" htmlFor="name">
						Name
					</label>
					<input id="firstname" type="firstname" required name="firstname" />
					<p className="text-sm">First name</p>
					<ValidationError prefix="firstname" field="firstname" errors={state.errors} />
				</div>
				<div className="lastname">
					<input id="lastname" type="lastname" required name="lastname" />
					<p className="text-sm">Last name</p>
					<ValidationError prefix="lastname" field="lastname" errors={state.errors} />
				</div>
			</div>

			<div className="form-company">
				<label htmlFor="email">Company</label>
				<input id="company" type="company" name="company" />
				<ValidationError prefix="Company" field="company" errors={state.errors} />
			</div>

			<div className="form-email">
				<label className="required" htmlFor="email">
					Email
				</label>
				<input id="email" type="email" required name="email" />
				<ValidationError prefix="Email" field="email" errors={state.errors} />
			</div>

			<div className="form-message">
				<label className="required" htmlFor="message">
					Message
				</label>
				<textarea id="message" name="message" required />
				<ValidationError prefix="Message" field="message" errors={state.errors} />
			</div>
			<button type="submit" disabled={state.submitting}>
				Send
			</button>
		</form>
	);
}

export default Contact;
