import React from "react";
import "./home.css";
import Me from "../../assets/happy.png";
import HeaderSocials from "./HeaderSocials";
import ScrollDown from "./ScrollDown";

const home = () => {
  return (
    <section className="home container" id="home">
      <div className="intro">
        <img src={Me} alt="" className="home_img" />
        <h1 className="home_name">Adebayo Jesutofunmi Juliet</h1>
        <span className="home_education">
          {" "}
          I am a 3rd year Computing Science Student{" "}
        </span>
        <HeaderSocials />

        <a href="#contact" className="btn">
          {" "}
          Contact Me
        </a>

        <ScrollDown />
      </div>
    </section>
  );
};

export default home;
