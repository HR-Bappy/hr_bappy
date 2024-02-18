"use client";

import React, { useEffect } from "react";
import "./generate-captcha.scss";

function GenerateCaptcha() {
	useEffect(() => {
		const captchaTextBox: any = document.querySelector(".captch_box input");
		const refreshButton: any = document.querySelector(".refresh_button");
		const captchaInputBox: any = document.querySelector(".captch_input input");
		const message: any = document.querySelector(".message");
		const submitButton: any = document.querySelector(".button");
		// Variable to store generated captcha
		let captchaText: any = null;
		// Function to generate captcha
		const generateCaptcha = () => {
			const randomString = Math.random().toString(36).substring(2, 7);
			const randomStringArray = randomString.split("");
			const changeString = randomStringArray.map((char) =>
				Math.random() > 0.5 ? char.toUpperCase() : char
			);
			captchaText = changeString.join("   ");
			captchaTextBox.value = captchaText;
			console.log(captchaText);
		};
		const refreshBtnClick = () => {
			generateCaptcha();
			captchaInputBox.value = "";
			captchaKeyUpValidate();
		};
		const captchaKeyUpValidate = () => {
			//Toggle submit button disable class based on captcha input field.
			submitButton.classList.toggle("disabled", !captchaInputBox.value);
			if (!captchaInputBox.value) message.classList.remove("active");
		};
		// Function to validate the entered captcha
		const submitBtnClick = () => {
			captchaText = captchaText
				.split("")
				.filter((char: any) => char !== " ")
				.join("");
			message.classList.add("active");
			// Check if the entered captcha text is correct or not
			if (captchaInputBox.value === captchaText) {
				message.innerText = "Entered captcha is correct";
				message.style.color = "#826afb";
			} else {
				message.innerText = "Entered captcha is not correct";
				message.style.color = "#FF2525";
			}
		};
		// Add event listeners for the refresh button, captchaInputBox, submit button
		refreshButton.addEventListener("click", refreshBtnClick);
		captchaInputBox.addEventListener("keyup", captchaKeyUpValidate);
		submitButton.addEventListener("click", submitBtnClick);
		// Generate a captcha when the page loads
		generateCaptcha();
	}, []);

	return (
		<div className="captcha_generate">
			<header>Captcha Generator</header>
			<div className="input_field captch_box">
				<input type="text" value="" />
				<button className="refresh_button">
					<i className="fa-solid fa-rotate-right"></i>
				</button>
			</div>
			<div className="input_field captch_input">
				<input type="text" placeholder="Enter captcha" />
			</div>
			<div className="message">Entered captcha is correct</div>
			<div className="input_field button ">
				<button>Submit Captcha</button>
			</div>
		</div>
	);
}

export default GenerateCaptcha;
