import React from "react";
import {Link} from "react-router-dom"
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

function Footer() {
	return (
		<div>
			<footer>
				<div className="container">
					<div className="row">
						<div className="footer-content col-md-4 footer-left">
							<address>
								<a href="mailto:olawandesamuel@gmail.com">Olawande Akinmosin</a>{" "}
								<br />
								Visit us at: <br />
								15, Reebok Street, Johnson, <br />
								South Carolina <br />
								0772547574 <br />
							</address>
						</div>
						<div className="footer-content col-md-4 footer-mid">
							<ul>
								<li>
									<Link to="/">
										<a href="#">Home</a>
									</Link>
								</li>
								<li>
									<Link to="/services">
										<a href="#">Services</a>
									</Link>
								</li>
							</ul>
							<ul>
								<li>
									<Link to="/portfolio">
										<a href="#">Portfolio</a>
									</Link>
								</li>
								<li>
									<Link to="/contact-me">
										<a href="#">Contact</a>
									</Link>
								</li>
							</ul>
						</div>
						<div className="footer-content col-md-4 footer-right">
							<div className="social-links">
								<a href="#" className="fb">
									<FaFacebook />
								</a>
								<a href="#" className="tw">
									<FaTwitter />
								</a>
								<a href="#" className="in">
									<FaLinkedin />
								</a>
							</div>
							<div className="copy">
								Copyright &copy;2021 Olawande Akinmosin| All Rights Reserved
							</div>
						</div>
					</div>
				</div>
			</footer>
		</div>
	);
}

export default Footer;
