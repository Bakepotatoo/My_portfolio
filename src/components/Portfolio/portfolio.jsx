import React, { useState } from "react";
import "./portfolio.css";
import Menu from "./Menu";

const portfolio = () => {
  const [items, setItems] = useState(Menu);
  const filterItem = (categoryItem) => {
    const updatedItems = Menu.filter((curElem) => {
      return curElem.category === categoryItem;
    });

    setItems(updatedItems);
  };

  return (
    <section className="work container section" id="portfolio">
      <h2 className="section_title"> Projects </h2>

      <div className="work_filters">
        <span className="work_item" onClick={() => setItems(Menu)}>
          {" "}
          Everything{" "}
        </span>
        <span
          className="work_item"
          onClick={() => filterItem("Web Development")}
        >
          {" "}
          Web development{" "}
        </span>
        <span className="work_item" onClick={() => filterItem("Design")}>
          {" "}
          UI/UX Design{" "}
        </span>
      </div>

      <div className="work_container grid">
        {items.map((elem) => {
          const { id, image, title, category } = elem;
          return (
            <div className="work_card" key={id}>
              <div className="work_thumbnail">
                <img src={image} alt="" className="work_img" />
                <div className="work_mask"></div>
              </div>

              <span className="work_category">{category}</span>
              <h3 className="work_title">{title}</h3>
              <a
                href="https://www.figma.com/proto/MjD2EIbAqfzppFkmYOK0j0/Roommate-Matchmaker-Website-prototype?node-id=2-2&starting-point-node-id=2%3A2"
                className="work_button"
              >
                <i className="icon-link work_button-icon"></i>
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default portfolio;
