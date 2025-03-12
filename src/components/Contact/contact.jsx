import React, { useRef } from "react";
import "./contact.css";
import emailjs from "@emailjs/browser";

const contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_tgmm9sg",
        "template_n4hup73",
        form.current,
        "razk32eIzPKzK1Tz5"
      )
      .then(
        (result) => {
          alert("Message sent successfully!");
        },
        (error) => {
          alert("Failed to send message. Try again.");
        }
      );
  };

  return (
    <section className="contact container section" id="contact">
      <h2 className="section_title"> Contact </h2>

      <div className="contact_container grid">
        <div className="contact_info">
          <h3 className="contact_title"> Get in Touch </h3>
        </div>

        <form ref={form} className="contact_form" onSubmit={sendEmail}>
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

            <button type="submit" className="btn">
              {" "}
              Send Message{" "}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default contact;
