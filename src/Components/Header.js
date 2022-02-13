import React from "react";
import Typed from "react-typed";
import Particles from "react-particles-js";
import { Link } from "react-scroll";

function Header() {
  return (
    <div className="header-wrapper" id="home">
      <Particles
        className="particles"
        params={{
          particles: {
            number: {
              value: 30,
              density: {
                enable: true,
                value_area: 900,
              },
            },

            shape: {
              type: "circle",
              stroke: {
                width: 9,
                color: "#0a2327",
              },
            },
          },
        }}
      />
      <div className="main-info">
        <h1>Hi, I am Olawande and I am a </h1>
        <Typed
          className="type-effect"
          strings={["Web Designer", "Frontend Developer"]}
          typeSpeed={60}
          backSpeed={70}
          loop
        />

        <Link
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          href="#"
          to="contact"
          className="btn-main-offer btn btn-outline-light"
        >
          Contact me
        </Link>
      </div>
    </div>
  );
}

export default Header;
