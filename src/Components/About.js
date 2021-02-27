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
						<h2 >About me</h2>
						
						<p>
							<span>Hi,</span> I'm sure you must have been wondering 'who is that guy over
							there?'. Well, that's me, Olawande, a frontend developer from
							Nigeria. I build user friendly, aesthetically pleasing, modern and
							responsive websites and web applications. I'm graduate of English
							and I am gradually working my way up the MERN stack in a bid to
							becoming a fullstack developer.
						</p>

						<p> I love building web projects and
							learning and applying new technologies as well as participanting
							in activities that help me grow as a developer. I also enjoy
							working together with people on projects. 
						</p>
						<p>
							In my spare time, I
							sometimes delve into the imaginary world of books where I go on
							adventures with the characters. Other times, I rewatch my
							favourite tvshows- Futurama and Bojack Horseman
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
