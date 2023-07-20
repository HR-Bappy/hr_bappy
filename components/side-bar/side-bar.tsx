"use client";

import React from "react";
import "./side-bar.scss";
import Link from "next/link";

function Sidebar() {
	const navOnClick = (menu: string) => {
		const menuItems: any = document.querySelectorAll(".nav-item");
		const menuItem: any = document.getElementById(menu);

		for (let i = 0; i < menuItems?.length; i++) {
			menuItems[i]?.classList.remove("active");
		}
		menuItem?.classList?.add("active");
	};

	return (
		<div className="aside">
			<div className="logo">
				<a href="./index.html">
					<span>B</span>appy
				</a>
			</div>
			<div className="nav-toggler">
				<span id="nav-icon" className="nav-icon-menu"></span>
			</div>
			<ul className="nav">
				<li>
					<Link
						href="#home"
						id="home-menu"
						onClick={() => navOnClick("home-menu")}
						className="nav-item"
					>
						<i className="fa fa-home"></i>Home
					</Link>
				</li>
				<li>
					<Link
						href="#about"
						id="about-menu"
						onClick={() => navOnClick("about-menu")}
						className="nav-item"
					>
						<i className="fa fa-user"></i>About
					</Link>
				</li>
				<li>
					<Link
						href="#services"
						id="services-menu"
						onClick={() => navOnClick("services-menu")}
						className="nav-item"
					>
						<i className="fa fa-list"></i>Services
					</Link>
				</li>
				<li>
					<Link
						href="#recommendations"
						id="recommendations-menu"
						onClick={() => navOnClick("recommendations-menu")}
						className="nav-item"
					>
						<i className="fa fa-briefcase"></i>Recommendation
					</Link>
				</li>
				{/* <!-- <li>
            <a href="#gallery" id="gallery-menu" onClick = "navOnClick('gallery-menu')" className="nav-item"><i className="fa fa-images"></i>Gallery</a>
          </li> --> */}
				<li>
					<Link
						href="#contact"
						id="contact-menu"
						onClick={() => navOnClick("contact-menu")}
						className="nav-item"
					>
						<i className="fa fa-comments"></i>Contact
					</Link>
				</li>
			</ul>
			<div className="nav-close-sec" style={{ overflow: "hidden" }}></div>
		</div>
	);
}

export default Sidebar;
