import React from "react";
import "./about.css";
import Image from "../../assets/woman.svg";

const about = () => {
  return (
    <section className="about container section" id="about">
      <h2 className="section_title"> About Me </h2>

      <div className="about_container grid">
        <img src={Image} alt="" className="about_img" />

        <div className="about_data grid">
          <div className="about_info">
            <p className="about_description">
              {" "}
              Hello, I am Juliet, an aspiring web developer currently attending
              Thompson Rivers University studying Computing Science. I have some
              experience with a few web projects in ui/ux design and web site
              building.
            </p>
            <a href="" className="btn">
              {" "}
              Download Resume{" "}
            </a>
          </div>

          <div className="about_skills grid">
            <div className="skills_data">
              <div className="skills_title">
                <h3 className="skills_name">Web Development</h3>
                <span className="skills_number"> 80 % </span>
              </div>

              <div className="skills_bar">
                <span className="skills_percentage web_development"></span>
              </div>
            </div>

            <div className="skills_data">
              <div className="skills_title">
                <h3 className="skills_name"> UI/UX Design</h3>
                <span className="skills_number"> 70 %</span>
              </div>

              <div className="skills_bar">
                <span className="skills_percentage ui_design"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default about;
