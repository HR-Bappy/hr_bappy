"use client";
import React from "react";
import "./speech-converter.scss";

function SpeechConverter() {
	let isSpeaking = true;
	const textToSpeech = () => {
		const textarea: any = document.querySelector("textarea");
		const button: any = document.querySelector("button");
		const synth: any = window.speechSynthesis;
		const text: any = textarea.value;
		if (!synth.speaking && text) {
			const utternace = new SpeechSynthesisUtterance(text);
			synth.speak(utternace);
		}
		if (text.length > 50) {
			if (synth.speaking && isSpeaking) {
				button.innerText = "Pause";
				synth.resume();
				isSpeaking = false;
			} else {
				button.innerText = "Resume";
				synth.pause();
				isSpeaking = true;
			}
		} else {
			isSpeaking = false;
			button.innerText = "Speaking";
		}
		setInterval(() => {
			if (!synth.speaking && !isSpeaking) {
				isSpeaking = true;
				button.innerText = "Convert to Speech";
			}
		});
	};

	return (
		<div className="speech-converter">
			<header>Text to Speech Converter</header>
			<textarea placeholder="Enter text"></textarea>
			<button onClick={textToSpeech}>Convert to Speech</button>
		</div>
	);
}

export default SpeechConverter;
