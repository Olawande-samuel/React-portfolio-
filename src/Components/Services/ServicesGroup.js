import React from "react";
import Service from "./Service";
import { FaDev, FaLaptopCode, FaFigma } from "react-icons/fa";
import { SiGooglesearchconsole } from "react-icons/si";

function ServicesGroup(props) {
	return (
		<div className="services-container" id="services">
			<h2>My Services</h2>
			<div className="card-wrapper container">
				<div className="row justify-content-around">
					<Service
						container="card-container"
						col="col-md-4"
						imgWrapper="service-logo-wrapper"
						image={<FaFigma />}
						header="Web Design"
						detail="Creating websites mockups and wireframes using modern technologies."
					/>
					<Service
						className="services-container"
						container="card-container"
						col="col-md-4"
						imgWrapper="service-logo-wrapper"
						image={<FaLaptopCode />}
						header="Web Development"
						detail="Translating design to code; creating responsive, unique, and user-friendly websites."
					/>
				</div>
			</div>
			<p></p>
		</div>
	);
}

export default ServicesGroup;
