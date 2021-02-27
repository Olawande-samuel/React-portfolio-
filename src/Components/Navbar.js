import React from "react";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

function Navv() {
	return (
		<Navbar collapseOnSelect expand="lg" className="Nav">
			<div className="container">
				<Navbar.Brand href="#home" className="main-logo-wrapper">
					{" "}
					<p className="logo">Olawande AKinmosin</p>
				</Navbar.Brand>
				<Navbar.Toggle
					aria-controls="responsive-navbar-nav"
					className=" bars"
				>
					<FaBars />
				</Navbar.Toggle>{" "}
				<Navbar.Collapse id="resposive-navbar-nav">
					<Nav className="ml-auto navbar-nav">
						<Nav.Link as={Link} href="#" to="/" exact className="nav-item">
							Home
						</Nav.Link>

						<Nav.Link as={Link} href="#" to="/about" className="nav-item">
							About me
						</Nav.Link>

						<Nav.Link as={Link} href="#" to="/services" className="nav-item">
							Services
						</Nav.Link>

						<Nav.Link as={Link} href="#" to="/portfolio" className="nav-item">
							Portfolio
						</Nav.Link>

						<Nav.Link as={Link} href="#" to="/contact-me" className="nav-item">
							Contact me
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</div>
		</Navbar>
	);
}

export default Navv;
