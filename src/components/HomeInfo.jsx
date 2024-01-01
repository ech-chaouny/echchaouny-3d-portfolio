import React from "react";
import { Link } from "react-router-dom";
import { arrow } from "../assets/icons";
const InfoBox = ({ text, link, btnText }) => (
  <div className="info-box">
    <p className="font-meduim sm:text-xl text-center">{text}</p>
    <Link to={link} className="neo-brutalism-white neo-btn">
      {btnText}
      <img src={arrow} className="size-4 object-contain" />
    </Link>
  </div>
);

const renderContent = {
  1: (
    <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
      Hi, I am <span className="font-semibold">Ismael 👋</span>
      <br />A Front-End developer from Morroco
    </h1>
  ),
  2: (
    <InfoBox
      text="I have an experience in front-end by creating many 
      projects from scratch, and picked up 
      many skills along the way"
      link="/about"
      btnText="Learn more"
    />
  ),
  3: (
    <InfoBox
      text="If you're curious about my skills and proficiency,
      I invite you to explore a collection of projects I've crafted,
      showcasing my experience."
      link="/about"
      btnText="Visit my portfolio"
    />
  ),
  4: (
    <InfoBox
      text="Need a project completed or searching for a dev?
      I'm just a few keystrokes away."
      link="/about"
      btnText="Contact me"
    />
  ),
};

const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
};
export default HomeInfo;
