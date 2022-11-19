import React from "react";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { HiOutlineMail } from "react-icons/hi";
import { VscSmiley } from "react-icons/vsc";
import { useInView } from "react-intersection-observer";

import "./Contact.css";

const Contact = () => {
  const [ref, inView] = useInView({
    rootMargin: "0px 0px -100px",
  });
  return (
    <section className="contact" id="contact">
      <div className="contact-container">
        <h1 ref={ref} className={`cont-h1 ${inView && `cont-h1-show`}`}>
          Contact
        </h1>

        <div ref={ref} className={`contact-info ${inView && `cont-info-show`}`}>
          <p className="comment">Feel free to reach me out!</p>

          <div className="contact-icons">
            <a href="mailto:aso091335@gmail.com">
              <HiOutlineMail className="contact-icon" />
            </a>
            <a href="https://www.linkedin.com/in/yuukihori">
              <SiLinkedin className="contact-icon" />
            </a>
            <a href="https://github.com/Yuuki915">
              <SiGithub className="contact-icon" />
            </a>
          </div>
          <p className="comment">
            Thank you
            <VscSmiley className="icon-in-comment" />
          </p>
        </div>
      </div>
    </section>
  );
};
export default Contact;
