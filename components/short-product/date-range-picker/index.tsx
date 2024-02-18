"use client";
import React, { useEffect } from "react";

function DateRangePicker() {
	return (
		<div>
			<h3>daterangepicker - get date example</h3>
			<input type="text" name="datetimes" />
			<p id="startDate">Start Date:</p>
			<p id="endDate">End Date:</p>
		</div>
	);
}

export default DateRangePicker;
