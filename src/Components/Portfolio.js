import React, { useState } from "react";
import Port from "../Images/React App.png";
import Port1 from "../Images/React App(1).png";
import Port2 from "../Images/React App(2).png";
import Todo from "../Images/Todo-App.png";
import Manage from "../Images/Manage landing page.png";
import Manage2 from "../Images/Manage-landing-page(2).png";
import Manage3 from "../Images/Manage-landing-page(3).png";
import Todo2 from "../Images/Todo app(1).png";
import Todo3 from "../Images/Todo app (2).png";
import Microsoft from "../Images/Microsoft.png";
import Microsoft1 from "../Images/Microsoft(1).png";
import Microsoft2 from "../Images/Microsoft(2).png";
import { FaGithub, FaLink } from "react-icons/fa";
import Mod from "./Modal";

function Portfolio(props) {
	const [show, setShow] = useState({
		one: false,
		two: false,
		three: false,
		four: false,
	});
	const handleClose = () => {
		setShow((show) => ({
			...show,
			one: false,
			two: false,
			three: false,
			four: false,
		}));
	};

	const handleOpenOne = () => {
		setShow((show) => ({
			...show,
			one: true,
		}));
	};
	const handleOpenTwo = () => {
		setShow((show) => ({
			...show,
			two: true,
		}));
	};
	const handleOpenThree = () => {
		setShow((show) => ({
			...show,
			three: true,
		}));
	};
	const handleOpenFour = () => {
		setShow((show) => ({
			...show,
			four: true,
		}));
	};
	// const [show, setShow] = useState(false);

	return (
		<div className="portfolio-wrapper">
			<h2>Recent Works</h2>
			<div className="port-container container">
				<div className="row">
					<div className="portfolio col-lg-3 col-md-6" onClick={handleOpenOne}>
						<div className="port bg-secondary">
							<img src={Port} alt="portfolio" className="img-fluid" />
						</div>
					</div>

					<div className="portfolio col-lg-3 col-md-6" onClick={handleOpenFour}>
						<div className="port bg-secondary">
							<img src={Microsoft} alt="portfolio" className="img-fluid" />
						</div>
					</div>

					<div
						className="portfolio col-lg-3 col-md-6"
						onClick={handleOpenThree}
					>
						<div className="port bg-secondary">
							<img src={Manage} alt="portfolio" className="img-fluid" />
						</div>
					</div>

					<div className="portfolio col-lg-3 col-md-6" onClick={handleOpenTwo}>
						<div className="port bg-secondary">
							<img src={Todo} alt="portfolio" className="img-fluid" />
						</div>
					</div>
				</div>
			</div>
			<Mod
				heading="React Portfolio Single Page Application"
				details="This website was built with React.js and React-Bootstrap, utilizing such features as
								Routes, Reack hooks, Reusable Components, among others"
				show={show.one}
				handleClose={handleClose}
				Image={Port}
				PortCar2={Port1}
				PortCar3={Port2}
				githubSite={"https://github.com/Olawande-samuel/React-portfolio"}
				githubImage={<FaGithub />}
				liveSiteImage={<FaLink />}
			/>
			<Mod
				heading="Vanilla JavaScript Todo App"
				details="A todo app that lets you add, check, sort, group and delete tasks. It also allows users to switch between light and dark modes"
				show={show.two}
				handleClose={handleClose}
				Image={Todo}
				PortCar2={Todo2}
				PortCar3={Todo3}
				githubSite={"https://github.com/Olawande-samuel/Todo-list-project"}
				githubImage={<FaGithub />}
				liveSiteImage={<FaLink />}
				liveSite={"https://todo-list-project-ten.vercel.app/"}
			/>
			<Mod
				heading="Manage Landing Page"
				details="This was built in response to a challenge on Frontend Mentors"
				show={show.three}
				handleClose={handleClose}
				Image={Manage}
				PortCar2={Manage2}
				PortCar3={Manage3}
				githubSite={"https://github.com/Olawande-samuel/landing-page"}
				githubImage={<FaGithub />}
				liveSiteImage={<FaLink />}
				liveSite={"https://landing-page-project.olawande-samuel.vercel.app"}
			/>
			<Mod
				heading="Microsoft Website Clone"
				details="This website was built using React JavaScript"
				show={show.four}
				handleClose={handleClose}
				Image={Microsoft}
				PortCar2={Microsoft1}
				PortCar3={Microsoft2}
				githubSite={
					"https://github.com/Olawande-samuel/react-microsoft-landing-page"
				}
				githubImage={<FaGithub />}
				liveSiteImage={<FaLink />}
			/>
		</div>
	);
}

export default Portfolio;
