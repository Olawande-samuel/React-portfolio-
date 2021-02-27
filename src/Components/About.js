import React from "react";
import Photo from "../Images/portfolio4.jpg";
import {
	FaBootstrap,
	FaHtml5,
	FaCss3,
	FaSass,
	FaReact,
	FaFigma,
} from "react-icons/fa";
import { SiJavascript } from "react-icons/si";

function About() {
	return (
		<div className="about-container">
			<div className="container about-wrapper">
				<div className="row">
					<div className="left  col-md-6">
						<div className="img-wrapper ">
							<img src={Photo} alt="Author's Picture" />
						</div>
					</div>
					<div className="right col-md-6">
						<h2>About me</h2>
						<h4>Hi, I am Olawande, nice to meet you!</h4>
						<p>
							I am a frontend developer from Nigeria. I build websites and web
							applications. I am currently working my way up the MERN stack.
							When I'm not working or spending time on personal projects, I
							spend time watching good movies and shows, or getting lost in the
							fantasy world of books where I accompany the protagonists on their
							various adventures. Lorem ipsum dolor sit amet consectetur
							adipisicing elit. Recusandae officia voluptates incidunt quae
							corporis dolorum. Velit omnis dolorum cupiditate pariatur? <br />
							Here are a few technologies I've been working with recently:
						</p>

						<div className="skill-wrapper row ">
							<div className="col-sm-4">
								<p>
									<span>
										<FaHtml5 />{" "}
									</span>{" "}
									HTML5
								</p>
								<p>
									<span>
										<FaCss3 />{" "}
									</span>{" "}
									CSS
								</p>
								<p>
									<span>
										<SiJavascript />{" "}
									</span>{" "}
									JavaScript
								</p>
							</div>
							<div className="col-sm-4">
								<p>
									<span>
										<FaReact />{" "}
									</span>{" "}
									React Js
								</p>
								<p>
									<span>
										<FaFigma />{" "}
									</span>{" "}
									Figma
								</p>
							</div>
							<div className="col-sm-4">
								<p>
									<span>
										<FaSass />{" "}
									</span>{" "}
									Sass
								</p>
								<p>
									<span>
										<FaBootstrap />{" "}
									</span>{" "}
									Bootstrap4
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default About;
