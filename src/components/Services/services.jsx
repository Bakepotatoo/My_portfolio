import React from "react";
import "./services.css";
import Image1 from "../../assets/digital-services.svg";
import Image2 from "../../assets/web-design (1).svg";

const data = [
  {
    id: 1,
    image: Image1,
    title: "Front End Development",
    description: "....////........//////",
  },
  {
    id: 2,
    image: Image2,
    title: "UI/UX Design",
    description: "...../........./.......",
  },
];

const services = () => {
  return (
    <section className="services container" id="services">
      <h2 className="section_title"> Services </h2>

      <div className="services_container grid">
        {data.map(({ id, image, title, description }) => {
          return (
            <div className="services_card" key={id}>
              <img src={image} alt="" className="services_img" />

              <h3 className="services_title">{title}</h3>
              <p className="services_description"></p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default services;
