"use client";

import React, { useEffect, useRef } from "react";
import "./image-placeholder.scss";
import html2canvas from "html2canvas";
import { useSearchParams } from "next/navigation";

function ImagePlaceholder() {
	const searchParam = useSearchParams();
	const imageRef: any = useRef(null);
	let size = {
		width: searchParam?.get("width") || 600,
		height: searchParam?.get("height") || 400,
		text: searchParam?.get("content"),
	};
	const handleClick = async () => {
		try {
			const canvas = await html2canvas(imageRef?.current);
			const image = canvas?.toDataURL("image/png");
			const mainDiv = document.querySelector(".image-placeholder-sec");

			const link = document.createElement("a");
			link.href = image;
			link.download = "screenshot.png";
			mainDiv?.appendChild(link);
			link.click();
			// mainDiv?.removeChild(link);
		} catch (error) {
			console.log("Something went wrong: ", error);
		}
	};
	return (
		<div className="image-placeholder-sec">
			<div className="placeholder-img-sec pt-5">
				<h2 className="text-center mb-4">Create Your own placeholder image</h2>
				<p>(/srt-p?width=600&height=400&content=(600x400))</p>
				<div
					id="htmlContent"
					ref={imageRef}
					style={{ width: size.width + "px", height: size.height + "px" }}
				>
					{size?.text ? (
						<h2>{size.text}</h2>
					) : (
						<h2>({size?.width + " x " + size.height})</h2>
					)}
				</div>
			</div>
			<div className="download-btn">
				<button className="btn-border" onClick={handleClick}>
					Download Image
				</button>
			</div>
		</div>
	);
}

export default ImagePlaceholder;
