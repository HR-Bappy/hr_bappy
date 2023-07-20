import React from "react";
import "./recommendations.scss";

function Recommendations() {
	return (
		<section className="recommendations section" id="recommendations">
			<div className="container">
				<div className="row">
					<div className="section-title padd-15">
						<div id="recommendations-title"></div>
					</div>
				</div>
				<div className="row padd-15">
					<div className="services-description d-flex-column">
						<span className="html-code">&lt;h3&gt;</span>
						<h3 className="v-line-h">What people say</h3>
						<span className="html-code">&lt;/h3&gt;</span>
					</div>
				</div>
				<div className="row">
					<div className="service-item padd-20">
						<div className="service_item-inner shadow-dark-hover">
							<div className="card-top">
								<div className="img-section">
									<img
										src="https://media.licdn.com/dms/image/D5603AQFPT96OEkO0wA/profile-displayphoto-shrink_800_800/0/1668694277671?e=2147483647&v=beta&t=BxROotjbkFIb2PNyChPYyycIxE_JuKpIX0VB-U8uMRI"
										alt="asfee"
									/>
								</div>
								<h4>
									<span className="html-code">&lt;h4&gt;</span>
									<span className="v-line-h">Software Development</span>
									<span className="html-code">&lt;/h4&gt;</span>
								</h4>
							</div>

							<div>
								<span className="html-code">&lt;p&gt;</span>
								<p className="v-line-p">
									Experienced in both functional and OOP: Java, JavaScript,
									TypeScript.
								</p>
								<span className="html-code">&lt;/p&gt;</span>
							</div>
						</div>
					</div>
					<div className="service-item padd-20">
						<div className="service_item-inner shadow-dark-hover">
							<div className="card-top">
								<div className="img-section">
									<img
										src="https://media.licdn.com/dms/image/D5603AQF7evPyAIfKQQ/profile-displayphoto-shrink_400_400/0/1640497025113?e=1695254400&v=beta&t=b84oZ-Z6Ft2tZAjf94oLYslh8U3yPPY2eCGMsbynOzI"
										alt="asfee"
									/>
								</div>
								<h4>
									<span className="html-code">&lt;h4&gt;</span>
									<span className="v-line-h">Frontend: React, NextJS</span>
									<span className="html-code">&lt;/h4&gt;</span>
								</h4>
							</div>

							<div>
								<span className="html-code">&lt;p&gt;</span>
								<p className="v-line-p">
									Passionate about UI/UX. Over 2 years of development experience
									in HTML, CSS, SASS, JavaScript, TypeScript, Redux, React and
									NextJs frameworks.
								</p>
								<span className="html-code">&lt;/p&gt;</span>
							</div>
						</div>
					</div>
					<div className="service-item padd-20">
						<div className="service_item-inner shadow-dark-hover">
							<div className="card-top">
								<div className="icon space">
									<i className="fa fa-code"></i>
								</div>
								<h4>
									<span className="html-code">&lt;h4&gt;</span>
									<span className="v-line-h">Backend: NodeJs</span>
									<span className="html-code">&lt;/h4&gt;</span>
								</h4>
							</div>

							<div>
								<span className="html-code">&lt;p&gt;</span>
								<p className="v-line-p">
									Though have not much professional experience but worked
									several personal project with NodeJs, Express, MongoDB.
								</p>
								<span className="html-code">&lt;/p&gt;</span>
							</div>
						</div>
					</div>

					<div className="service-item padd-20">
						<div className="service_item-inner shadow-dark-hover">
							<div className="card-top">
								<div className="icon space">
									<i className="fa fa-search"></i>
								</div>
								<h4>
									<span className="html-code">&lt;h4&gt;</span>
									<span className="v-line-h">Web Design</span>
									<span className="html-code">&lt;/h4&gt;</span>
								</h4>
							</div>

							<div>
								<span className="html-code">&lt;p&gt;</span>
								<p className="v-line-p">
									Over more than 2 years of experience in web development.
									Implemented 6+ interactive website using HTML, CSS,
									JavaScript, TypeScript with the help of JS Library.
								</p>
								<span className="html-code">&lt;/p&gt;</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Recommendations;
