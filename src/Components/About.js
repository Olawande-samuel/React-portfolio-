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
import { SiJavascript, SiMaterialui, SiNextdotjs } from "react-icons/si";

function About() {
	return (
		<div className="w-100 pt-4 about-container" id="about">
					<h2 className="text-center" style={{marginBottom:"0"}}>About me</h2>
			<div className="row justify-content-between align-items-center">
				<div className="img-wrapper h-100 d-flex justify-content-center mb-2 mb-md-0 col-md-4">
					<img src={Photo} alt="Author" />
				</div>
				<div className="col-md-8 px-2 px-sm-1">
					<p>
						<span>Hi,</span> My name is Olawande Akinmosin. I am a frontend developer
						based in Nigeria. I build user-friendly, beautiful, modern and
						responsive websites/web applications. I'm a graduate of
						English, and I have chosen to gradually work my way up the MERN
						stack. The goal is to become a full-stack developer.
					</p>

					<p>
						I love building web projects, learning and applying new
						technologies, and participating in activities that help me grow as
						a software engineer. I also enjoy working together with people on
						projects.
					</p>
					<p>
						In my spare time, I occasionally dive into the imaginary world of
						books where I go on various adventures with the characters. Other times, I
						rewatch my favourite tv shows- Futurama and Bojack Horseman.
					</p>
					<p>
						Currently seeking web development gigs or junior developer positions. <br />
						Here are a few technologies I've been working with recently and experienced in:
					</p>

					<div className="row">
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
									<SiNextdotjs />{" "}
								</span>{" "}
								Nextjs
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
								Bootstrap
							</p>
							<p>
								<span>
									<SiMaterialui />{" "}
								</span>{" "}
								Material UI
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default About;
