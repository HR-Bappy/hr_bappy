"use client";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactUs = () => {
	const form: any = useRef();

	const sendEmail = (e: any) => {
		console.log("form", form.current);

		e.preventDefault();
		emailjs
			.sendForm(
				"service_ijqk2lp",
				"template_9pykctc",
				form.current,
				"JIt4gqAOQZo9AdwRV"
			)
			.then(
				(result) => {
					console.log(result.text);
				},
				(error) => {
					console.log(error.text);
				}
			);
	};

	return (
		<div className="main-content">
			<form ref={form}>
				<label>Name</label>
				<input type="text" name="to_name" />
				<label>Email</label>
				<input type="email" name="from_name" />
				<label>Message</label>
				<textarea name="message" />
				<input type="submit" value="Send" onClick={sendEmail} />
			</form>
		</div>
	);
};

export default ContactUs;
