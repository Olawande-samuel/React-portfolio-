import React, { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Carousel from "react-bootstrap/Carousel";
// import Image from "../Images/portfolio4.jpg";

function Mod(props) {
	const {
		heading,
		details,
		handleOpen,
		show,
		handleClose,
		Image,
		PortCar2,
		PortCar3,
		PortCar4,
		githubSite,
		githubImage,
		liveSite,
		liveSiteImage,
	} = props;

	return (
		<div className="my-6 modaldiv">
			<Modal
				show={show}
				onHide={handleClose}
				size="lg"
				aria-labelledby="contained-modal-title-vcenter"
				centered
			>
				<Modal.Header >
					<Modal.Title>{heading}</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<p className="text-center">{details}</p>
					<Carousel>
						<Carousel.Item>
							<img src={Image} alt="" className="img-fluid" />
						</Carousel.Item>

						<Carousel.Item>
							<img src={PortCar2} alt="" className="img-fluid" />
						</Carousel.Item>

						<Carousel.Item>
							<img src={PortCar3} alt="" className="img-fluid" />
						</Carousel.Item>
						<Carousel.Item>
							<img src={PortCar4} alt="" className="img-fluid" />
						</Carousel.Item>
					</Carousel>
					<div className="portfolio-link-wrapper">
						<a
							className="portfolio-github-link"
							href={githubSite}
							target="_blank"
							rel="noopener noreferrer"
						>
							{githubImage}
						</a>{" "}
						<a
							className="portfolio-live-link"
							href={liveSite}
							target="_blank"
							rel="noopener noreferrer"
						>
							{liveSiteImage}
						</a>{" "}
					</div>
				</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={handleClose}>
						Close
					</Button>
				</Modal.Footer>
			</Modal>
		</div>
	);
}

export default Mod;
