import React from "react";

const Card = (props) => {
  return (
    <div className="timeline_item">
      <i className={props.icon}></i>
      <span className="timeline_date">{props.year}</span>
      <h3 className="timeline_title">{props.title}</h3>
      <p className="timeline_text">{props.desc}</p>
      <p className="timeline_text1">{props.desc1}</p>
      <p className="timeline_text2">{props.desc2}</p>
      <p className="timeline_text3">{props.desc3}</p>
    </div>
  );
};

export default Card;
