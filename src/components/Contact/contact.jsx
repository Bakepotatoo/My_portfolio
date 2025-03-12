import React from "react";
import "./contact.css";

const contact = () => {
  return (
    <section className="contact container section" id="contact">
      <h2 className="section_title"> Contact </h2>

      <div className="contact_container grid">
        <div className="contact_info">
          <h3 className="contact_title"> Get in Touch </h3>
        </div>

        <form action="" className="contact_form">
          <div className="contact_form-group">
            <div className="contact_form-div">
              <input
                type="text"
                className="contact_form-input"
                required
                placeholder="Name"
              />
            </div>

            <div className="contact_form-div">
              <input
                type="email"
                className="contact_form-input"
                required
                placeholder="Email Address"
              />
            </div>

            <div className="contact_form-div">
              <input
                type="text"
                className="contact_form-input"
                placeholder="Subject"
              />
            </div>

            <div className="contact_form-div contact_form-area">
              <textarea
                name=""
                id=""
                cols="30"
                rows="10"
                className="contact_form-input"
                required
                placeholder="Message"
              ></textarea>
            </div>

            <button className="btn"> Send Message </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default contact;
