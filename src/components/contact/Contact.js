import React from "react";
import { SiGithub, SiLinkedin } from "react-icons/si";

import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="contact-container">
        <h1 className="cont-h1">Contact</h1>

        <div className="contact-info">
          <p className="phone">
            <a href="tel://:16044451991">+1 (604) 445 1991</a>
          </p>

          <div className="email">
            <a href="mailto:aso091335@gmail.com">aso091335@gmail.com</a>
          </div>

          <div className="contact-icons">
            <a href="https://www.linkedin.com/in/yuukihori">
              <SiLinkedin className="contact-icon" />
            </a>
            <a href="https://github.com/Yuuki915">
              <SiGithub className="contact-icon" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Contact;
