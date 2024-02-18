"use client";

import React, { useEffect } from "react";
import "./image-editor.scss";

function ImageEditor(props: any) {
	const imgList = [
		{
			id: 1,
			src: "http://stuckincustoms.smugmug.com/Portfolio/i-KMjVHRd/0/X3/Andramada-X3.jpg",
		},
		{
			id: 2,
			src: "http://stuckincustoms.smugmug.com/Portfolio/i-KscS8CF/0/X3/Burning-Man-Day-1%20%281006%20of%201210%29-X3.jpg",
		},
		{
			id: 3,
			src: "http://stuckincustoms.smugmug.com/Portfolio/i-jQcPqJb/0/X3/Burning-Man-Last-Day-Night%20%28151%20of%201120%29-X3.jpg",
		},
		{
			id: 4,
			src: "http://stuckincustoms.smugmug.com/Portfolio/i-jQcPqJb/0/X3/Burning-Man-Last-Day-Night%20%28151%20of%201120%29-X3.jpg",
		},
		{
			id: 5,
			src: "http://stuckincustoms.smugmug.com/Portfolio/i-KMjVHRd/0/X3/Andramada-X3.jpg",
		},
		{
			id: 6,
			src: "http://stuckincustoms.smugmug.com/Burning-Man/i-dd9xmfn/0/X3/The%20Steamy%20Car-X3.jpg",
		},
		{
			id: 7,
			src: "http://stuckincustoms.smugmug.com/Portfolio/i-jQcPqJb/0/X3/Burning-Man-Last-Day-Night%20%28151%20of%201120%29-X3.jpg",
		},
		{
			id: 8,
			src: "http://stuckincustoms.smugmug.com/Portfolio/i-KMjVHRd/0/X3/Andramada-X3.jpg",
		},
		{
			id: 9,
			src: "http://stuckincustoms.smugmug.com/Burning-Man/i-dd9xmfn/0/X3/The%20Steamy%20Car-X3.jpg",
		},
	];

	useEffect(() => {
		const fileInput: any = document.querySelector(".file-input"),
			filterOptions: any = document.querySelectorAll(".filter button"),
			filterName: any = document.querySelector(".filter-info .name"),
			filterValue: any = document.querySelector(".filter-info .value"),
			filterSlider: any = document.querySelector(".slider input"),
			rotateOptions: any = document.querySelectorAll(".rotate button"),
			previewImg: any = document.querySelector(".preview-img img"),
			resetFilterBtn: any = document.querySelector(".reset-filter"),
			chooseImgBtn: any = document.querySelector(".choose-img"),
			saveImgBtn: any = document.querySelector(".save-img");
		let brightness = "100",
			saturation = "100",
			inversion = "0",
			grayscale = "0";
		let rotate = 0,
			flipHorizontal = 1,
			flipVertical = 1;
		const loadImage = () => {
			let file = fileInput.files[0];
			if (!file) return;
			previewImg.src = URL.createObjectURL(file);
			previewImg.addEventListener("load", () => {
				resetFilterBtn.click();
				document.querySelector(".container")?.classList.remove("disable");
			});
		};
		const applyFilter = () => {
			previewImg.style.transform = `rotate(${rotate}deg) scale(${flipHorizontal}, ${flipVertical})`;
			previewImg.style.filter = `brightness(${brightness}%) saturate(${saturation}%) invert(${inversion}%) grayscale(${grayscale}%)`;
		};
		filterOptions.forEach((option: any) => {
			option.addEventListener("click", () => {
				document.querySelector(".active")?.classList.remove("active");
				option.classList.add("active");
				filterName.innerText = option.innerText;
				if (option.id === "brightness") {
					filterSlider.max = "200";
					filterSlider.value = brightness;
					filterValue.innerText = `${brightness}%`;
				} else if (option.id === "saturation") {
					filterSlider.max = "200";
					filterSlider.value = saturation;
					filterValue.innerText = `${saturation}%`;
				} else if (option.id === "inversion") {
					filterSlider.max = "100";
					filterSlider.value = inversion;
					filterValue.innerText = `${inversion}%`;
				} else {
					filterSlider.max = "100";
					filterSlider.value = grayscale;
					filterValue.innerText = `${grayscale}%`;
				}
			});
		});
		const updateFilter = () => {
			filterValue.innerText = `${filterSlider.value}%`;
			const selectedFilter: any = document.querySelector(".filter .active");
			if (selectedFilter.id === "brightness") {
				brightness = filterSlider.value;
			} else if (selectedFilter.id === "saturation") {
				saturation = filterSlider.value;
			} else if (selectedFilter.id === "inversion") {
				inversion = filterSlider.value;
			} else {
				grayscale = filterSlider.value;
			}
			applyFilter();
		};
		rotateOptions.forEach((option: any) => {
			option.addEventListener("click", () => {
				if (option.id === "left") {
					rotate -= 90;
				} else if (option.id === "right") {
					rotate += 90;
				} else if (option.id === "horizontal") {
					flipHorizontal = flipHorizontal === 1 ? -1 : 1;
				} else {
					flipVertical = flipVertical === 1 ? -1 : 1;
				}
				applyFilter();
			});
		});
		const resetFilter = () => {
			brightness = "100";
			saturation = "100";
			inversion = "0";
			grayscale = "0";
			rotate = 0;
			flipHorizontal = 1;
			flipVertical = 1;
			filterOptions[0].click();
			applyFilter();
		};
		const saveImage = () => {
			const canvas = document.createElement("canvas");
			const ctx: any = canvas.getContext("2d");
			canvas.width = previewImg.naturalWidth;
			canvas.height = previewImg.naturalHeight;

			ctx.filter = `brightness(${brightness}%) saturate(${saturation}%) invert(${inversion}%) grayscale(${grayscale}%)`;
			ctx.translate(canvas.width / 2, canvas.height / 2);
			if (rotate !== 0) {
				ctx.rotate((rotate * Math.PI) / 180);
			}
			ctx.scale(flipHorizontal, flipVertical);
			ctx.drawImage(
				previewImg,
				-canvas.width / 2,
				-canvas.height / 2,
				canvas.width,
				canvas.height
			);

			const link = document.createElement("a");
			link.download = "image.jpg";
			link.href = canvas.toDataURL();
			link.click();
		};
		filterSlider.addEventListener("input", updateFilter);
		resetFilterBtn.addEventListener("click", resetFilter);
		saveImgBtn.addEventListener("click", saveImage);
		fileInput.addEventListener("change", loadImage);
		chooseImgBtn.addEventListener("click", () => fileInput.click());
	}, []);

	return (
		<div className="container">
			<div className="container__ ">
				<h2>Easy Image Editor</h2>
				<div className="wrapper">
					<div className="editor-panel">
						<div className="filter">
							<label className="title">Filters</label>
							<div className="options">
								<button id="brightness" className="active">
									Brightness
								</button>
								<button id="saturation">Saturation</button>
								<button id="inversion">Inversion</button>
								<button id="grayscale">Grayscale</button>
							</div>
							<div className="slider">
								<div className="filter-info">
									<p className="name">Brighteness</p>
									<p className="value">100%</p>
								</div>
								<input type="range" value="100" min="0" max="200" />
							</div>
						</div>
						<div className="rotate">
							<label className="title">Rotate & Flip</label>
							<div className="options">
								<button id="left">
									<i className="fa-solid fa-rotate-left"></i>
								</button>
								<button id="right">
									<i className="fa-solid fa-rotate-right"></i>
								</button>
								<button id="horizontal">
									<i className="bx bx-reflect-vertical"></i>
								</button>
								<button id="vertical">
									<i className="bx bx-reflect-horizontal"></i>
								</button>
							</div>
						</div>
					</div>
					<div className="preview-img">
						<img src="image-placeholder.svg" alt="preview-img" />
					</div>
				</div>
				<div className="controls">
					<button className="reset-filter">Reset Filters</button>
					<div className="row">
						<input type="file" className="file-input" accept="image/*" hidden />
						<button className="choose-img">Choose Image</button>
						<button className="save-img">Save Image</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ImageEditor;
