import React, { useEffect, useState } from "react";
import "./alert.scss";

function Alert({
	message,
	error,
	success,
	isShow,
	setIsShow,
}: {
	message: string;
	error?: boolean;
	success?: boolean;
	isShow?: boolean;
	setIsShow: any;
}) {
	const [show, setShow] = useState<boolean>(true);
	useEffect(() => {
		const interval = setTimeout(() => {
			setShow(false);
			setIsShow("");
		}, 2500);

		return () => clearInterval(interval);
	}, []);

	return (
		<div
			className={`hr-alert ${error && " danger"} ${success && " success"} ${
				show && " show"
			}`}
		>
			<i className={`fa ${error ? "fa-check" : "fa-xmark"} `}></i>
			<p className="mb-0">{message || "Your action successfully done"}</p>
		</div>
	);
}

export default Alert;
