import React from "react";
import heroImg from "../../asset/images/hero-1.jpeg";
import "./home.scss";

function HomeSection() {
	return (
		<div className="section home" id="home">
			<div className="container">
				<div className="row">
					<div className="home-info padd-15">
						<h3 className="hello">
							Hello, my name is <span className="name">Habibur Rahman</span>
						</h3>
						<h3 className="my-profession">
							I&lsquo;m a{" "}
							<span
								className="type-writer"
								data-text="Frontend Designer., Web Developer., ReactJs Developer."
							></span>
						</h3>
						<p>
							I&lsquo;m a web developer with extensive experience for over 2
							years My expertise is to create and web site design, graphic
							design, and many more...
						</p>
						<a href="#contact" className="btn-border">
							Hire Me
						</a>
					</div>
					<div className="home-img padd-15">
						<img src={heroImg.src} alt="hero img" />
					</div>
				</div>
			</div>
		</div>
	);
}

export default HomeSection;
