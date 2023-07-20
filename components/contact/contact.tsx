import React from "react";
import "./contact.scss";

function ContactComponent() {
	return (
		<section className="contact section" id="contact">
			<div className="container">
				<div className="row">
					<div className="section-title padd-15">
						<div id="contact-title"></div>
					</div>
				</div>
				<h3 className="contact-title padd-15">Contact</h3>
				{/* <h4 className="contact-sub-title padd-15">
					I&lsquo;M AT YOUR SERVICES
				</h4> */}
				<div className="row">
					<div className="contact-info-item padd-15">
						<div className="icon">
							<i className="fa fa-phone"></i>
						</div>
						<h4>Call On</h4>
						<p>+880 1994688976</p>
					</div>
					<div className="contact-info-item padd-15">
						<div className="icon">
							<i className="fa fa-map-marker-alt"></i>
						</div>
						<h4>Office</h4>
						<p>Dhaka</p>
					</div>
					<div className="contact-info-item padd-15">
						<div className="icon">
							<i className="fa fa-envelope"></i>
						</div>
						<h4>Email</h4>
						<p>mdhabiburrb@gmail.com</p>
					</div>
					<div className="contact-info-item padd-15">
						<div className="icon">
							<i className="fa fa-globe-europe"></i>
						</div>
						<h4>Website</h4>
						<p>hr-bappy.github.io/portfolio-v2</p>
					</div>
				</div>
				<h3 className="contact-title padd-15">Let&lsquo;s Hangout</h3>
				{/* <h4 className="contact-sub-title padd-15">
					I&lsquo;M AT YOUR SERVICES
				</h4> */}
				<form className="contact__form">
					<div className="row">
						<div className="contact-form padd-15">
							<div className="row">
								<div className="form-item col-6 padd-15">
									<div className="form-group">
										<input
											type="text"
											className="form-control name__"
											placeholder="Name"
										/>
									</div>
								</div>
								<div className="form-item col-6 padd-15">
									<div className="form-group">
										<input
											type="email"
											className="form-control email__"
											placeholder="Email"
											required
										/>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="contact-form padd-15">
							<div className="row">
								<div className="form-item col-12 padd-15">
									<div className="form-group">
										<input
											type="text"
											className="form-control subject__"
											placeholder="Subject"
											required
										/>
									</div>
								</div>
								<div className="form-item col-12 padd-15">
									<div className="form-group">
										<textarea
											name=""
											id=""
											className="form-control message__"
											placeholder="Message"
											required
										/>
									</div>
								</div>
								<div className="form-item col-12 padd-15">
									<button type="submit" className="btn submit__btn">
										Send Message
									</button>
								</div>
							</div>
						</div>
					</div>
				</form>
			</div>
		</section>
	);
}

export default ContactComponent;
