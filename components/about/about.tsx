import React, { useEffect } from "react";
// import heroImg from "../../asset/images/hero-1.jpeg";
import "./about.scss";

function AboutSection() {
	useEffect(() => {
		const experience: any = document.getElementById("experience");
		const projects: any = document.getElementById("projects");
		const gallery: any = document.getElementById("gallery");
		let c = gallery.offsetHeight;
	}, []);

	const handleScroll = (e: any) => {
		const experience: any = document.getElementById("experience");
		const projects: any = document.getElementById("projects");
		const gallery: any = document.getElementById("gallery");

		const experienceLink: any = document.getElementById("experience-link");
		const projectsLink: any = document.getElementById("projects-link");
		const galleryLink: any = document.getElementById("gallery-link");
		const experienceSection: any =
			document.getElementById("experience-section");

		let experiencePos = experience?.getBoundingClientRect();
		let projectsPos = projects?.getBoundingClientRect();
		let galleryPos = gallery?.getBoundingClientRect();
		let experienceSectionPos = experienceSection?.getBoundingClientRect();

		if (experienceSectionPos?.top >= galleryPos?.top) {
			galleryLink?.classList.add("active");
			projectsLink?.classList.remove("active");
			experienceLink?.classList.remove("active");
			return;
		}

		if (experienceSectionPos?.top >= projectsPos?.top) {
			galleryLink?.classList.remove("active");
			projectsLink?.classList.add("active");
			experienceLink?.classList.remove("active");
			return;
		}

		if (experienceSectionPos?.top >= experiencePos?.top) {
			galleryLink?.classList.remove("active");
			projectsLink?.classList.remove("active");
			experienceLink?.classList.add("active");
			return;
		}
	};

	return (
		<div className="about section" id="about">
			<div className="container">
				<div className="row">
					<div className="section-title padd-15">
						<div id="about-me-title"></div>
					</div>
				</div>
				<div className="row">
					<div className="about-content padd-15">
						<div className="row">
							<div className="about-text padd-15">
								<div className="section-sub-header">
									<span className="html-code">&lt;h3&gt;</span>
									<h3 className="v-line-h">
										I&lsquo;m Habibur Rahman and <span>Web Developer</span>
									</h3>
									<span className="html-code">&lt;/h3&gt;</span>
								</div>
								<div>
									<span className="html-code">&lt;p&gt;</span>
									<p className="v-line-p">
										Hello! My name is Bappy and I enjoy creating things that
										live on the internet. My interest in web development started
										back in 2020 when one of my friend showed something like, he
										has written his name of a top programmer&lsquo;s profile. I
										just saw and shocked, I thought a lot about HTML & CSS!
										<br />
										<br />
										Fast-forward to today, and I’ve had the privilege of working
										at an advertising agency and a start-up company. My main
										focus these days was building accessible, inclusive products
										and digital experiences at HalcyonBD, ShafaCare, WebX Global
										Ltd., and SWAP.
									</p>
									<span className="html-code">&lt;/p&gt;</span>
								</div>
							</div>
						</div>
						<div className="row">
							<div className="personal-info padd-15">
								<div className="row">
									<div className="item-info padd-15">
										<p>
											Birthday : <span>07-07-1997</span>
										</p>
									</div>
									<div className="item-info padd-15">
										<p>
											Email : <span>mdhabiburrb@gmail.com</span>
										</p>
									</div>
									<div className="item-info padd-15">
										<p>
											Degree : <span>BSC in CSE</span>
										</p>
									</div>
									<div className="item-info padd-15">
										<p>
											Phone : <span>+880 1994688976</span>
										</p>
									</div>
									<div className="item-info padd-15">
										<p>
											City : <span>Dhaka</span>
										</p>
									</div>
									<div className="item-info padd-15">
										<p>
											Freelance : <span>Available</span>
										</p>
									</div>
								</div>
								<div className="row">
									<div className="buttons padd-15">
										{/* <!-- <a href="#" className="btn-border ">Download CV</a> --> */}

										<a
											href="./asset/files/CV-Bappy.pdf"
											target="_blank"
											className="btn-border"
										>
											Download CV
										</a>
										<a href="#contact" className="btn-border">
											Hire Me
										</a>
									</div>
								</div>
							</div>
							<div className="skills padd-15">
								{/* <!-- <div className="row">
                      <div className="skill-item padd-15">
                        <h5>CSS</h5>
                        <div className="progress">
                          <div className="progress-in" style="width: 76%"></div>
                          <div className="skill-percent">76%</div>
                        </div>
                      </div>
                      <div className="skill-item padd-15">
                        <h5>JS</h5>
                        <div className="progress">
                          <div className="progress-in" style="width: 86%"></div>
                          <div className="skill-percent">86%</div>
                        </div>
                      </div>
                      <div className="skill-item padd-15">
                        <h5>HTML</h5>
                        <div className="progress">
                          <div className="progress-in" style="width: 90%"></div>
                          <div className="skill-percent">90%</div>
                        </div>
                      </div>
                      <div className="skill-item padd-15">
                        <h5>ReactJS</h5>
                        <div className="progress">
                          <div className="progress-in" style="width: 78%"></div>
                          <div className="skill-percent">78%</div>
                        </div>
                      </div>
                      <div className="skill-item padd-15">
                        <h5>NextJS</h5>
                        <div className="progress">
                          <div className="progress-in" style="width: 70%"></div>
                          <div className="skill-percent">70%</div>
                        </div>
                      </div>
                      <div className="skill-item padd-15">
                        <h5>Bootstrap</h5>
                        <div className="progress">
                          <div className="progress-in" style="width: 80%"></div>
                          <div className="skill-percent">80%</div>
                        </div>
                      </div>
                    </div> --> */}
								<div className="row">
									<div className="skill-title padd-15">
										<div className="d-flex-column">
											<span className="html-code">&lt;h4&gt;</span>
											<h4 className="v-line-h">
												Few technologies I’ve been working with recently:
											</h4>
											<span className="html-code">&lt;/h4&gt;</span>
										</div>
									</div>
									<div className="skill-body padd-15">
										<div className="single-skill">
											<span className="icon">♦</span>HTML
										</div>
										<div className="single-skill">
											<span className="icon">♦</span>CSS
										</div>
										<div className="single-skill">
											<span className="icon">♦</span>SASS
										</div>
										<div className="single-skill">
											<span className="icon">♦</span>JavaScript
										</div>
										<div className="single-skill">
											<span className="icon">♦</span>TypeScript
										</div>
										<div className="single-skill">
											<span className="icon">♦</span>React-Redux
										</div>
										<div className="single-skill">
											<span className="icon">♦</span>ReactJs
										</div>
										<div className="single-skill">
											<span className="icon">♦</span>NextJs
										</div>
									</div>
								</div>
							</div>
						</div>

						<div className="experience-page row" id="experience-section">
							<div className="row w-100">
								<div className="left">
									<div>
										<div className="section-title">
											<div id="experience-title"></div>
											<h3>Frontend React Developer</h3>
											<p>
												I build accessible, inclusive products and digital
												experiences for the web.
											</p>
										</div>

										<div className="tab-section">
											<ul className="option">
												<li id="experience-link">
													<a href="#experience">Experience</a>
												</li>
												<li id="projects-link">
													<a href="#projects">Projects</a>
												</li>
												<li id="gallery-link">
													<a href="#gallery">Gallery</a>
												</li>
											</ul>
										</div>
									</div>
									<ul className="social-link">
										<li>
											<a href="https://www.linkedin.com/in/habibur-rahman-06166b1b6/">
												<i className="fab fa-linkedin-in"></i>
											</a>
										</li>
										<li>
											<a href="https://github.com/HR-Bappy">
												<i className="fab fa-github"></i>
											</a>
										</li>
										<li>
											<a href="mailto:mdhabiburrb@gmail.com">
												<i className="fa fa-envelope"></i>
											</a>
										</li>
										<li>
											<a href="tel:+8801994688976">
												<i className="fa fa-phone"></i>
											</a>
										</li>
									</ul>
								</div>
								<div
									id="rightSec"
									className="right"
									onScroll={(e) => handleScroll(e)}
								>
									<p className="about-me">
										Back in 2020, I decided to try my hand at creating real time
										video and text chat app for my University final project
										.custom Tumblr themes and tumbled head first into the rabbit
										hole of coding and web development. Fast-forward to today,
										and I&lsquo;ve had the privilege of building web
										application.
										<br />
										<br />
										My main focus these days is building products and leading
										projects for our clients. In my free time I&lsquo;ve also
										build several react components and released some npm
										packages and solving problem.
									</p>

									<div id="experience" className="experience-list">
										<a href="https://swap.com.bd/">
											<div className="single-experience">
												<div className="time-range">DEC 2022 - Present</div>
												<div className="description">
													<p className="title">
														Frontend Engineer . SWAP{" "}
														<i className="fa fa-arrow-right"></i>
													</p>
													<p>
														Deliver high-quality, robust production code for a
														diverse array of projects. Provide leadership within
														engineering department through close collaboration,
														knowledge shares, and mentorship.
													</p>
													<div className="expertise">
														<span>ReactJs</span>
														<span>NextJs</span>
														<span>Redux</span>
														<span>Typescript</span>
														<span>SCSS</span>
													</div>
												</div>
											</div>
										</a>
										<a href="http://webx.xyz/">
											<div className="single-experience">
												<div className="time-range">May - Nov 2022</div>
												<div className="description">
													<p className="title">
														Front-End Developer . WebX Global Ltd.
														<i className="fa fa-arrow-right"></i>
													</p>
													<p>
														Deliver high-quality, robust production code for a
														diverse array of projects. Provide leadership within
														engineering department through close collaboration,
														knowledge shares, and mentorship.
													</p>
													<div className="expertise">
														<span>ReactJs</span>
														<span>NextJs</span>
														<span>Redux</span>
														<span>Typescript</span>
														<span>SCSS</span>
													</div>
												</div>
											</div>
										</a>
										<a href="https://shafa.care/">
											<div className="single-experience">
												<div className="time-range">Mar 2021 - Feb 2022</div>
												<div className="description">
													<p className="title">
														Frontend Developer . Shafa Care
														<i className="fa fa-arrow-right"></i>
													</p>
													<p>
														Deliver high-quality, robust production code for a
														diverse array of projects. Provide leadership within
														engineering department through close collaboration,
														knowledge shares, and mentorship.
													</p>
													<div className="expertise">
														<span>ReactJs</span>
														<span>NextJs</span>
														<span>Redux</span>
														<span>JavaScript</span>
														<span>CSS</span>
														<span>Bootstrap</span>
													</div>
												</div>
											</div>
										</a>
										<a href="https://halcyonbd.com/">
											<div className="single-experience">
												<div className="time-range">Sep 2020 - Mar 2021</div>
												<div className="description">
													<p className="title">
														Intern + Front-End Developer . HalcyonBD
														<i className="fa fa-arrow-right"></i>
													</p>
													<p>
														Deliver high-quality, robust production code for a
														diverse array of projects. Provide leadership within
														engineering department through close collaboration,
														knowledge shares, and mentorship.
													</p>
													<div className="expertise">
														<span>ReactJs</span>
														<span>Javascript</span>
														<span>HTML</span>
														<span>CSS</span>
														<span>Bootstrap</span>
													</div>
												</div>
											</div>
										</a>
									</div>

									<div
										id="projects"
										className="project-list"
										style={{ minHeight: "100vh" }}
									>
										<div className="single-project">
											<h2>Coming soon...</h2>
										</div>
									</div>

									<div
										id="gallery"
										className="gallery"
										style={{ minHeight: "100vh" }}
									>
										<div className="single-project">
											<h2>Coming soon...</h2>
										</div>
									</div>
								</div>
							</div>
						</div>

						{/* <div className="row">
							<div className="education padd-15">
								<div className="d-flex-column">
									<span className="html-code">&lt;h3&gt;</span>
									<h3 className="title v-line-h">Education</h3>
									<span className="html-code">&lt;/h3&gt;</span>
								</div>

								<div className="row">
									<div className="timeline-box padd-15">
										<div className="timeline shadow-dark">
											<div className="timeline-item">
												<div className="circle-dot"></div>
												<h3 className="timeline-date">
													<i className="fa fa-calendar"></i>2017 - 2020
												</h3>
												<h4 className="timeline-title">
													<span className="html-code">&lt;h4&gt;</span>
													<span className="v-line-h">
														B.Sc. in Computer Science and Engineering
													</span>
													<span className="html-code">&lt;/h4&gt;</span>
												</h4>
												<div className="d-flex-column">
													<span className="html-code">&lt;p&gt;</span>
													<p className="timeline-text v-line-p">
														<i
															className="fa fa-university"
															aria-hidden="true"
														></i>{" "}
														International University of Business Agriculture and
														Technology
													</p>
													<span className="html-code">&lt;/p&gt;</span>
												</div>
											</div>
											<div className="timeline-item">
												<div className="circle-dot"></div>
												<h3 className="timeline-date">
													<i className="fa fa-calendar"></i>2013 - 2017
												</h3>
												<h4 className="timeline-title">
													<span className="html-code">&lt;h4&gt;</span>
													<span className="v-line-h">
														Higher Secondary School Certificate
													</span>
													<span className="html-code">&lt;/h4&gt;</span>
												</h4>
												<div className="d-flex-column">
													<span className="html-code">&lt;p&gt;</span>
													<p className="timeline-text v-line-p">
														Dr. Afiluddin Degree College, Jashore, Bangladesh
													</p>
													<span className="html-code">&lt;/p&gt;</span>
												</div>
											</div>
											<div className="timeline-item">
												<div className="circle-dot"></div>
												<h3 className="timeline-date">
													<i className="fa fa-calendar"></i>2013 - 2015
												</h3>
												<h4 className="timeline-title">
													<span className="html-code">&lt;h4&gt;</span>
													<span className="v-line-h">
														Secondary School Certificate
													</span>
													<span className="html-code">&lt;/h4&gt;</span>
												</h4>
												<div className="d-flex-column">
													<span className="html-code">&lt;p&gt;</span>
													<p className="timeline-text v-line-p">
														D.S.T Secondary School, Jashore, Bangladesh
													</p>
													<span className="html-code">&lt;/p&gt;</span>
												</div>
											</div>
										</div>
									</div>
								</div>
								
							</div>
							<div className="experience padd-15">
								<div className="d-flex-column">
									<span className="html-code">&lt;h3&gt;</span>
									<h3 className="title v-line-h">Experience</h3>
									<span className="html-code">&lt;/h3&gt;</span>
								</div>

								<div className="row">
									<div className="timeline-box padd-15">
										<div className="timeline shadow-dark">
											<div className="timeline-item">
												<div className="circle-dot"></div>
												<h3 className="timeline-date">
													<i className="fa fa-calendar"></i>June 2022 - Present
												</h3>
												<h4 className="timeline-title">
													<span className="html-code">&lt;h4&gt;</span>
													<span className="v-line-h">Front-End Engineer</span>
													<span className="html-code">&lt;/h4&gt;</span>
												</h4>
												<div className="d-flex-column">
													<span className="html-code">&lt;p&gt;</span>
													<p className="timeline-text v-line-p">
														<i
															className="fa fa-university"
															aria-hidden="true"
														></i>{" "}
														SWAP BD Ltd.
													</p>
													<span className="html-code">&lt;/p&gt;</span>
												</div>
											</div>
											<div className="timeline-item">
												<div className="circle-dot"></div>
												<h3 className="timeline-date">
													<i className="fa fa-calendar"></i>May 2022 - November
													2022
												</h3>
												<h4 className="timeline-title">
													<span className="html-code">&lt;h4&gt;</span>
													<span className="v-line-h">Front-End Developer</span>
													<span className="html-code">&lt;/h4&gt;</span>
												</h4>
												<div className="d-flex-column">
													<span className="html-code">&lt;p&gt;</span>
													<p className="timeline-text v-line-p">
														<i
															className="fa fa-university"
															aria-hidden="true"
														></i>{" "}
														WebX Global Ltd.
													</p>
													<span className="html-code">&lt;/p&gt;</span>
												</div>
											</div>
											<div className="timeline-item">
												<div className="circle-dot"></div>
												<h3 className="timeline-date">
													<i className="fa fa-calendar"></i>March 2021 -
													February 2022
												</h3>
												<h4 className="timeline-title">
													<span className="html-code">&lt;h4&gt;</span>
													<span className="v-line-h">Front-End Developer</span>
													<span className="html-code">&lt;/h4&gt;</span>
												</h4>
												<div className="d-flex-column">
													<span className="html-code">&lt;p&gt;</span>
													<p className="timeline-text v-line-p">
														<i
															className="fa fa-university"
															aria-hidden="true"
														></i>{" "}
														Shafa Care Ltd.
													</p>
													<span className="html-code">&lt;/p&gt;</span>
												</div>
												<a className="explore-more" href="./experience.html">
													EXPLORE MORE <i className="fa fa-arrow-down"></i>{" "}
												</a>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div> */}
					</div>
				</div>
			</div>
		</div>
	);
}

export default AboutSection;
