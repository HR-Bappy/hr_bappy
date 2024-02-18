"use client";

import AboutSection from "@/components/about/about";
import ContactComponent from "@/components/contact/contact";
import HomeSection from "@/components/home/home";
import Recommendations from "@/components/recommendations/recommendations";
import ServicesComponent from "@/components/services/services";
import Sidebar from "@/components/side-bar/side-bar";
import StyleSwitcher from "@/components/style-switcher/style-switcher";
import { useEffect, useState } from "react";

export default function Home() {
	const [defaultColor, setDefaultColor] = useState("#302e4d");

	useEffect(() => {
		var span: any = document.querySelector(".type-writer");
		var textArr: any = span?.getAttribute("data-text")?.split(", ");
		var maxTextIndex: any = textArr?.length;

		var sPerChar = 0.15;
		var sBetweenWord = 1.5;
		var textIndex = 0;

		typing(textIndex, textArr[textIndex]);

		function typing(textIndex: number, text: any) {
			var charIndex = 0;
			var maxCharIndex = text.length - 1;

			var typeInterval = setInterval(function () {
				span.innerHTML += text[charIndex];
				if (charIndex == maxCharIndex) {
					clearInterval(typeInterval);
					setTimeout(function () {
						deleting(textIndex, text);
					}, sBetweenWord * 1000);
				} else {
					charIndex += 1;
				}
			}, sPerChar * 1000);
		}

		function deleting(textIndex: number, text: any) {
			var minCharIndex = 0;
			var charIndex = text.length - 1;

			var typeInterval = setInterval(function () {
				span.innerHTML = text.substr(0, charIndex);
				if (charIndex == minCharIndex) {
					clearInterval(typeInterval);
					textIndex + 1 == maxTextIndex ? (textIndex = 0) : (textIndex += 1);
					setTimeout(function () {
						typing(textIndex, textArr[textIndex]);
					}, sBetweenWord * 1000);
				} else {
					charIndex -= 1;
				}
			}, sPerChar * 1000);
		}

		// scrollDown();
		init("#302e4d");
	}, []);

	const scrollDown = () => {
		const home: any = document.getElementById("home"),
			about: any = document.getElementById("about"),
			services: any = document.getElementById("services"),
			contact: any = document.getElementById("contact"),
			recommendations: any = document.getElementById("recommendations"),
			styleSwitcher: any = document.querySelector(".style-switcher");

		if (styleSwitcher?.classList?.contains("open"))
			styleSwitcher?.classList?.remove("open");

		const homeLink: any = document.getElementById("home-menu"),
			aboutLink: any = document.getElementById("about-menu"),
			servicesLink: any = document.getElementById("services-menu"),
			contactLink: any = document.getElementById("contact-menu"),
			recommendationsLink: any = document.getElementById(
				"recommendations-menu"
			);

		let homePos = home?.getBoundingClientRect(),
			aboutPos = about?.getBoundingClientRect(),
			servicesPos = services?.getBoundingClientRect(),
			contactPos = contact?.getBoundingClientRect(),
			recommendationsPos = recommendations?.getBoundingClientRect();

		if (contactPos?.top < 0) {
			contactLink?.classList.add("active");
			servicesLink?.classList.remove("active");
			aboutLink?.classList.remove("active");
			recommendationsLink?.classList.remove("active");
			homeLink?.classList.remove("active");

			return;
		}
		if (recommendationsPos?.top <= 0) {
			recommendationsLink?.classList.add("active");
			contactLink?.classList.remove("active");
			servicesLink?.classList.remove("active");
			aboutLink?.classList.remove("active");
			homeLink?.classList.remove("active");
			return;
		}
		if (servicesPos?.top <= 0) {
			recommendationsLink?.classList.remove("active");
			contactLink?.classList.remove("active");
			servicesLink?.classList.add("active");
			aboutLink?.classList.remove("active");
			homeLink?.classList.remove("active");
			return;
		}
		if (aboutPos?.top <= 0) {
			contactLink?.classList.remove("active");
			recommendationsLink?.classList.remove("active");
			servicesLink?.classList.remove("active");
			aboutLink?.classList.add("active");
			homeLink?.classList.remove("active");
			return;
		}
		if (homePos?.top <= 0) {
			contactLink?.classList.remove("active");
			recommendationsLink?.classList.remove("active");
			servicesLink?.classList.remove("active");
			aboutLink?.classList.remove("active");
			homeLink?.classList.add("active");
			return;
		}
	};
	const randColor = () => {
		return (
			"#" +
			Math.floor(Math.random() * 16777215)
				.toString(16)
				.padStart(6, "0")
				.toUpperCase()
		);
	};

	const letterStyle = (char: string, indx: number, color: string) => {
		if (char === " ") return `<span class='space'></span>`;

		return `<span
				class="letter"
				onMouseOver="this.style.color='${randColor()}'"
				onMouseOut='this.style.color="${color}" '
				style="transition:all .1s ease-in-out;"
			>
				${char}
			</span>`;
	};

	const splictChar = (text: any, color: any) => {
		let temp = "";
		for (let i = 0; i < text.length; i++) {
			temp = temp + letterStyle(text[i], Math.floor(Math.random() * 5), color);
		}

		return temp;
	};

	const init = (color: any) => {
		let about: any = document.getElementById("about-me-title");
		let services: any = document.getElementById("services-title");
		let recommendations: any = document.getElementById("recommendations-title");
		let contact: any = document.getElementById("contact-title");
		// let recommendations: any = document.getElementById("recommendations-title");

		if (about) about.innerHTML = `<h2>${splictChar("About Me", color)}</h2>`;
		if (services)
			services.innerHTML = `<h2>${splictChar("Services", color)}</h2>`;
		if (recommendations)
			recommendations.innerHTML = `<h2>${splictChar(
				"Recommendations",
				color
			)}</h2>`;
		if (contact) contact.innerHTML = `<h2>${splictChar("Contact", color)}</h2>`;
		// if (document.getElementById("experience-title"))
		// 	document.getElementById("experience-title").innerHTML = `<h2>${splictChar(
		// 		"HR Bappy"
		// 	)}</h2>`;
	};
	const handleThemeColor = () => {
		let body: any = document.querySelector("body");
		if (body?.classList?.contains("dark")) {
			setDefaultColor("#302e4d");
			init("#302e4d");
		} else {
			setDefaultColor("#fff");
			init("#fff");
		}
	};

	return (
		<div className="main-container">
			<Sidebar />
			<div className="main-content" onScroll={scrollDown}>
				<HomeSection />
				<AboutSection />
				<ServicesComponent />
				<Recommendations />
				<ContactComponent />
				<StyleSwitcher handleThemeColor={handleThemeColor} />
			</div>
		</div>
	);
}
