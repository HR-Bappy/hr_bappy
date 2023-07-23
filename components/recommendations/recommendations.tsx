import React from "react";
import "./recommendations.scss";
import raselVi from "../../asset/images/resel_vi.jpeg";
import imtiazVi from "../../asset/images/imtiaz_vi.jpeg";
import mirazVi from "../../asset/images/miraz_vi.jpeg";
import tanbirVi from "../../asset/images/tanbir_vi.jpeg";

function Recommendations() {
	const data = [
		// {
		// 	id: 1,
		// 	name: "Imtiaz Kabir",
		// 	designation: "Sr. Software Engineer at WebX Global Ltd.",
		// 	image: imtiazVi?.src,
		// 	description:
		// 		"Experienced in both functional and OOP: Java, JavaScript,TypeScript functional and OOP: Java, JavaScript, TypeScript.",
		// 	socialLink: [
		// 		{
		// 			icon: "fa-brands fa-linkedin-in",
		// 			link: "https://www.linkedin.com/in/ikziko/",
		// 		},
		// 		{
		// 			icon: "fa-brands fa-linkedin-in",
		// 			link: "https://www.linkedin.com/in/nhrasalcse/",
		// 		},
		// 		{
		// 			icon: "fa-regular fa-envelope",
		// 			link: "https://www.linkedin.com/in/nhrasalcse/",
		// 		},
		// 	],
		// },
		// {
		// 	id: 1,
		// 	name: "Nurul Huda Rasel",
		// 	designation: "Sr. Software Engineer at WebX Global Ltd.",
		// 	image: raselVi?.src,
		// 	description:
		// 		"Experienced in both functional and OOP: Java, JavaScript,TypeScript functional and OOP: Java, JavaScript, TypeScript.",
		// 	socialLink: [
		// 		{
		// 			icon: "fa-brands fa-linkedin-in",
		// 			link: "https://www.linkedin.com/in/nhrasalcse/",
		// 		},
		// 		{
		// 			icon: "fa-brands fa-linkedin-in",
		// 			link: "https://www.linkedin.com/in/nhrasalcse/",
		// 		},
		// 		{
		// 			icon: "fa-regular fa-envelope",
		// 			link: "https://www.linkedin.com/in/nhrasalcse/",
		// 		},
		// 	],
		// },

		{
			id: 1,
			name: "Md. Tanbir Hossen",
			designation: "Head of Technology",
			image: tanbirVi?.src,
			description:
				"Experienced in both functional and OOP: Java, JavaScript,TypeScript functional and OOP: Java, JavaScript, TypeScript.",
			socialLink: [
				{
					icon: "fa-brands fa-linkedin-in",
					link: "https://www.linkedin.com/in/mdhossentanbir/",
				},
				{
					icon: "fa-brands fa-linkedin-in",
					link: "https://www.linkedin.com/in/nhrasalcse/",
				},
				{
					icon: "fa-regular fa-envelope",
					link: "https://www.linkedin.com/in/nhrasalcse/",
				},
			],
		},
		{
			id: 2,
			name: "Md Miraj Khandaker",
			designation: "Sr. Full Stack Software Engineer at SWAP",
			image: mirazVi?.src,
			description:
				"Experienced in both functional and OOP: Java, JavaScript,TypeScript functional and OOP: Java, JavaScript, TypeScript.",
			socialLink: [
				{
					icon: "fa-brands fa-linkedin-in",
					link: "https://www.linkedin.com/in/miraj-khandaker/",
				},
				{
					icon: "fa-regular fa-envelope",
					link: "mailto:mirajkhandaker@gmail.com",
				},
			],
		},
	];
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
					{data?.map((item: any, index: number) => {
						return (
							<div className="service-item padd-20" key={index}>
								<div className="service_item-inner shadow-dark-hover">
									<div className="card-top">
										<div className="img-section">
											<img src={item?.image} alt={item?.name} />
										</div>
										<h4>
											<span className="html-code">&lt;h4&gt;</span>
											<span className="v-line-h">{item?.name}</span>
											<span className="html-code">&lt;/h4&gt;</span>
										</h4>
									</div>

									<div>
										<p className="designation">{item?.designation}</p>

										<p className="description">{item?.description}</p>
										<ul className="social-link">
											{item?.socialLink?.map((link: any, indx: number) => {
												return (
													<li key={indx}>
														<a href={link.link} target="_blank">
															<i className={link.icon}></i>
														</a>
													</li>
												);
											})}
										</ul>
									</div>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
}

export default Recommendations;
