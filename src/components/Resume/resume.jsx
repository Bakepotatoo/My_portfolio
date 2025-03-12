import React from "react";
import "./resume.css";
import Data from "./Data";
import Card from "./Card";

const resume = () => {
  return (
    <section className="resume container section" id="resume">
      <h2 className="section_title"> Experience </h2>

      <div className="resume_container grid">
        <div className="timeline grid">
          {Data.map((val, id) => {
            if (val.category === "Education") {
              return (
                <Card
                  key={id}
                  icon={val.icon}
                  title={val.title}
                  year={val.year}
                  desc={val.desc}
                  desc1={val.desc1}
                  desc3={val.desc3}
                />
              );
            }
          })}
        </div>

        <div className="timeline grid">
          {Data.map((val, index) => {
            if (val.category === "Experience") {
              return (
                <Card
                  key={index}
                  icon={val.icon}
                  title={val.title}
                  year={val.year}
                  desc={val.desc}
                  desc2={val.desc2}
                  desc3={val.desc3}
                />
              );
            }
          })}
        </div>
      </div>
    </section>
  );
};

export default resume;
