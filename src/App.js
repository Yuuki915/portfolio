// import scrollreveal from "scrollreveal";
import "./App.css";
import React, { useEffect, useRef, useState } from "react";
import TopAnimation from "./components/animation/TopAnimation";

import About from "./components/about/About";
import Works from "./components/work/Works";
import Contact from "./components/contact/Contact";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

const App = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrolledVal, setScrolledVal] = useState(0);

  useEffect(() => {
    const currentPosi = () => setScrolledVal(window.pageYOffset);
    window.addEventListener("scroll", currentPosi);
    currentPosi();

    if (scrolledVal >= 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
    return () => window.removeEventListener("scroll", currentPosi);
  }, [scrolledVal]);

  // useEffect(() => {
  //   const sr = scrollreveal({
  //     origin: "top",
  //     distance: "30px",
  //     duration: 1000,
  //     easing: "ease-out",
  //     reset: true,
  //   });
  //   sr.reveal(
  //     `
  //     .text-body,
  //     .skills-icons,
  //     .work,
  //     .contact-info
  //     `,
  //     {
  //       opacity: 0,
  //       interval: 500,
  //     }
  //   );
  // }, []);

  return (
    <div className="App">
      <Header isVisible={isVisible} />

      <TopAnimation />
      <div className="app-container">
        <About />
        <Works />
        <Contact />
      </div>

      <Footer />
    </div>
  );
};

export default App;
