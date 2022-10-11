import "./App.css";
import React, { useEffect, useRef, useState } from "react";
import TopAnimation from "./components/animation/TopAnimation";
import scrollreveal from "scrollreveal";

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

  useEffect(() => {
    const sr = scrollreveal({
      origin: "top",
      distance: "30px",
      duration: 1000,
      easing: "ease-out",
      reset: true,
    });
    sr.reveal(
      `
      .text-body,
      .skills-icons,
      .work,
      .contact-info
      `,
      {
        opacity: 0,
        interval: 500,
      }
    );
  }, []);

  // const aboutRef = useRef();
  // const worksRef = useRef();
  // const contRef = useRef();
  // const [aboutY, setAboutY] = useState(0);
  // const [worksY, setWorksY] = useState(0);
  // const [contY, setContY] = useState(0);
  // const [cssAction, setCssAction] = useState(false);
  // useEffect(() => {
  //   setAboutY(aboutRef.current.getBoundingClientRect().top);

  //   if (aboutY <= window.innerHeight / 1.5) {
  //     setCssAction(true);
  //   } else {
  //     setCssAction(false);
  //   }
  // });
  // useEffect(() => {
  //   setWorksY(worksRef.current.getBoundingClientRect().top);

  //   if (worksY <= window.innerHeight / 1.5) {
  //     setCssAction(true);
  //   } else {
  //     setCssAction(false);
  //   }
  // });
  // // useEffect(() => {
  // //   setContY(contRef.current.getBoundingClientRect().top);

  // //   if (contY <= window.innerHeight / 1.5) {
  // //     setCssAction(true);
  // //   } else {
  // //     setCssAction(false);
  // //   }
  // // });
  // console.log(aboutY);
  // const getYPosition = () => {
  //   setY(boxRef.current.getBoundingClientRect().top);
  //   // console.log(window.innerHeight);
  //   if (y <= window.innerHeight / 2) {
  //     setCssAction(true);
  //   } else {
  //     setCssAction(false);
  //   }
  //   // const y = boxRef.current.offsetTop;
  //   // setY(y);
  // };
  // useEffect(() => {
  //   getYPosition();
  // }, []);
  // useEffect(() => {
  //   window.addEventListener("resize", getYPosition);
  // }, []);

  // console.log("y: ", y);
  // console.log(window.innerHeight);

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
