import React, { useEffect } from "react";
import "./style-switcher.scss";

function StyleSwitcher({ handleThemeColor }: any) {
	const colorList = [
		{
			skinColor: "crimson",
			light: "rgba(220, 20, 60, 0.603)",
			light_75: "rgba(220, 20, 60, 0.75)",
			lighter: "rgba(220, 20, 60, 0.081)",
		},
		{
			skinColor: "#fa5b0f",
			light: "rgba(250, 89, 15, 0.603)",
			light_75: "rgba(250, 89, 15, 0.75)",
			lighter: "rgba(250, 89, 15, 0.081)",
		},
		{
			skinColor: "#37b182",
			light: "rgba(55,177,130,.603)",
			light_75: "rgba(55,177,130,.75)",
			lighter: "rgba(55,177,130,.081)",
		},
		{
			skinColor: "#1854b4",
			light: "rgba(24,84,180,.603)",
			light_75: "rgba(24,84,180,.75)",
			lighter: "rgba(24,84,180,.081)",
		},
		{
			skinColor: "#f021b2",
			light: "rgba(240,33,178,.603)",
			light_75: "rgba(240,33,178,.75)",
			lighter: "rgba(240,33,178,.081)",
		},
	];

	useEffect(() => {
		const dayNight: any = document.querySelector(".daynight");

		if (document.body.classList.contains("dark")) {
			dayNight.querySelector("i").classList.add("fa-sun");
		} else {
			dayNight.querySelector("i").classList.add("fa-moon");
		}
	}, []);

	const setActiveStyle = (color: number) => {
		document.documentElement.style.setProperty(
			"--skin-color",
			colorList[color].skinColor
		);
		document.documentElement.style.setProperty(
			"--skin-color-lighten",
			colorList[color].light
		);
		document.documentElement.style.setProperty(
			"--skin-color-10",
			colorList[color].lighter
		);
		document.documentElement.style.setProperty(
			"--skin-color-75",
			colorList[color].light_75
		);
	};

	const toggleStyle = () => {
		document?.querySelector(".style-switcher")?.classList.toggle("open");
	};

	const toggleTheme = () => {
		handleThemeColor();

		const dayNight: any = document.querySelector(".daynight");
		dayNight.querySelector("i").classList.toggle("fa-sun");
		dayNight.querySelector("i").classList.toggle("fa-moon");
		document.body.classList.toggle("dark");
	};
	return (
		<div className="style-switcher">
			<div className="style-switcher-toggler s-icon" onClick={toggleStyle}>
				<i className=" fas fas fa-cog fa-spin"></i>
			</div>
			<div className="daynight s-icon" onClick={toggleTheme}>
				<i className="fas "></i>
			</div>
			<h4>Theme Colors</h4>
			<div className="colors">
				<span className="color-1" onClick={() => setActiveStyle(0)}></span>
				<span className="color-2" onClick={() => setActiveStyle(1)}></span>
				<span className="color-3" onClick={() => setActiveStyle(2)}></span>
				<span className="color-4" onClick={() => setActiveStyle(3)}></span>
				<span className="color-5" onClick={() => setActiveStyle(4)}></span>
			</div>
		</div>
	);
}

export default StyleSwitcher;
