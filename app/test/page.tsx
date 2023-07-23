"use client";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Alert from "@/components/alert/alert";

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
	const [isShow, setIsShow] = useState(false);

	return (
		<div className="main-content">
			{/* <form ref={form}>
				<label>Name</label>
				<input type="text" name="to_name" />
				<label>Email</label>
				<input type="email" name="from_name" />
				<label>Message</label>
				<textarea name="message" />
				<input type="submit" value="Send" onClick={sendEmail} />
			</form> */}
			<div className="container">
				<div className="row">
					<br />
					<br />
					<br />
					<br />
					<button onClick={() => setIsShow(!isShow)}>Click me baby</button>
				</div>
			</div>
		</div>
	);
};

export default ContactUs;
