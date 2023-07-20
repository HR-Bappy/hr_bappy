"use client";

import React, { useEffect } from "react";

function CursorFollower() {
	useEffect(() => {
		let circle: any = document.getElementById("mouse-circle");
		const onMouseMove = (e: any) => {
			circle.style.left = e.pageX + "px";
			circle.style.top = e.pageY + "px";
		};
		document.addEventListener("mousemove", onMouseMove);
	}, []);

	return <div id="mouse-circle"></div>;
}

export default CursorFollower;
