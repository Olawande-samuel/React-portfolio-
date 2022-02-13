import React from "react";
import { FaBars } from "react-icons/fa";
// import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link, animateScroll as scroll } from "react-scroll";
function Navv() {
  return (
    <Navbar collapseOnSelect expand="lg" className="Nav">
      <div className="container w-100">
        <Navbar.Brand href="/" className="main-logo-wrapper">
          <p className="logo">Olawande AKinmosin</p>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" className=" bars">
          <FaBars />
        </Navbar.Toggle>
        <Navbar.Collapse id="resposive-navbar-nav">
          <Nav className="ms-auto navbar-nav">
            <Link
              spy={true}
			  activeClass="active"
              smooth={true}
              offset={-70}
              duration={500}
              href="#"
              to="home"
              exact
              className="nav-item"
            >
              Home
            </Link>

            <Link
			activeClass="active"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              href="#"
              to="about"
              className="nav-item"
            >
              About me
            </Link>

            <Link
              spy={true}
			  activeClass="active"
              smooth={true}
              offset={-70}
              duration={500}
              href="#"
              to="services"
              className="nav-item"
            >
              Services
            </Link>

            <Link
              spy={true}
			  activeClass="active"
              smooth={true}
              offset={-70}
              duration={500}
              href="#"
              to="portfolio"
              className="nav-item"
            >
              Portfolio
            </Link>

            <Link
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              href="#"
              to="contact"
              className="nav-item"
            >
              Contact me
            </Link>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}

export default Navv;
