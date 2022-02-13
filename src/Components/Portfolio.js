import React, { useState } from "react";
import Hotel from "../Images/hotelsHome1.png";
import Hotel1 from "../Images/hotelsHome2.png";
import Hotel2 from "../Images/hotelsCont.png";
import Hotel3 from "../Images/hotelCont1.png";
import Spilleet from "../Images/spilleetHome1.png";
import Spilleet1 from "../Images/spilleetHome2.png";
import Spilleet2 from "../Images/spilleetHome3.png";
import Spilleet3 from "../Images/spilleetPost.png";
import Datashop from "../Images/datashopHome1.png";
import Datashop1 from "../Images/datashopHome2.png";
import Datashop2 from "../Images/datashopHome3.png";
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
    <div className="portfolio-wrapper" id="portfolio">
      <h2 className="text-center mt-3">Recent Works</h2>
      <div className="port-container  px-2">
        <div
          className="portfolio "
          onClick={handleOpenOne}
        >
          <div className="port bg-secondary">
            <img src={Hotel} alt="portfolio" className="img-fluid" />
          </div>
        </div>

        <div
          className="portfolio"
          onClick={handleOpenTwo}
        >
          <div className="port bg-secondary">
            <img src={Spilleet} alt="portfolio" className="img-fluid" />
          </div>
        </div>

        <div
          className="portfolio"
          onClick={handleOpenThree}
        >
          <div className="port bg-secondary">
            <img src={Datashop} alt="portfolio" className="img-fluid" />
          </div>
        </div>

        <div
          className="portfolio"
          onClick={handleOpenFour}
        >
          <div className="port bg-secondary">
            <img src={Port} alt="portfolio" className="img-fluid" />
          </div>
        </div>
      </div>
      <Mod
        heading="Hotels management application"
        details="Built with React, Bootstrap and React-Bootstrap, utilizing such features as
								Routes, React hooks, Reusable Components, among others"
        show={show.one}
        handleClose={handleClose}
        Image={Hotel}
        PortCar2={Hotel1}
        PortCar3={Hotel2}
        PortCar4={Hotel3}
        githubSite={"https://github.com/Olawande-samuel/React-portfolio"}
        githubImage={<FaGithub />}
        liveSiteImage={<FaLink />}
        liveSite={"http://test.hotelsoffline.com"}
      />
      <Mod
        heading="Spilleet"
        details="An alternative social media platform"
        show={show.two}
        handleClose={handleClose}
        Image={Spilleet}
        PortCar2={Spilleet1}
        PortCar3={Spilleet2}
        PortCar4={Spilleet3}
        githubSite={"https://github.com/Olawande-samuel/React_spilleet"}
        githubImage={<FaGithub />}
        liveSiteImage={<FaLink />}
        liveSite={"http://test.spilleet.com"}
      />
      <Mod
        heading="Datashopng"
        details="Utilities purchase and management application"
        show={show.three}
        handleClose={handleClose}
        Image={Datashop}
        PortCar2={Datashop1}
        PortCar3={Datashop2}
        githubSite={
          "https://github.com/Olawande-samuel/recharge-app-fireswitch"
        }
        githubImage={<FaGithub />}
        liveSiteImage={<FaLink />}
        liveSite={"https://datashopng.com"}
      />
      <Mod
        heading="Portfolio website"
        details="This was built in response to a challenge on Frontend Mentors"
        show={show.four}
        handleClose={handleClose}
        Image={Port}
        PortCar2={Port1}
        PortCar3={Port2}
        PortCar4={Port2}
        githubSite={"https://github.com/Olawande-samuel/React-portfolio-"}
        githubImage={<FaGithub />}
        liveSiteImage={<FaLink />}
        liveSite={"https://olawande-akinmosin.netlify.app/"}
      />
      {/* <Mod
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
			/> */}
    </div>
  );
}

export default Portfolio;
