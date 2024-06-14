import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Field, Label, Switch } from "@headlessui/react";

function classNames(...classes) {
	return classes.filter(Boolean).join(" ");
}

const Contact = () => {
	const [agreed, setAgreed] = useState(false);

	return <div className="contact"></div>;
};

export default Contact;
