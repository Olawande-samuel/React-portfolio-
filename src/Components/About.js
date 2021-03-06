import React from "react";
import Photo from "../Images/Profile.jpg";
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

						<p>
							<span>Hi,</span> I'm sure you must have been wondering, 'who is
							that guy over there?' Well, that's me, Olawande, a web developer
							from Nigeria. I build user-friendly, beautiful, modern and
							responsive websites and web applications. I'm a graduate of
							English, and I have chosen to gradually work my way up the MERN
							stack. The goal is to become a full-stack developer.
						</p>

						<p>
							{" "}
							I love building web projects, learning and applying new
							technologies, and participating in activities that help me grow as
							a developer. I also enjoy working together with people on
							projects.
						</p>
						<p>
							In my spare time, I sometimes dive into the imaginary world of
							books where I go on adventures with the characters. Other times, I
							rewatch my favourite tv shows- Futurama and Bojack Horseman.
						</p>
						<p>
							Currently seeking gigs or junior developer positions. <br />
							Here are a few technologies I've been working with recently:
						</p>

						<div className="skill-wrapper row ">
							<div className="col">
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
							<div className="col">
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
							<div className="col">
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
