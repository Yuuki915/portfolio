import "./App.css";
import React from "react";
import Hero from "./components/hero/Hero";
import TopAnimation from "./components/animation/TopAnimation";
// import ani from "./components/imgs/aniSearch.png";
import About from "./components/about/About";
import Works from "./components/work/Works";
import Contact from "./components/contact/Contact";

function App() {
  return (
    <div className="App">
      <TopAnimation />
      <div className="app-container">
        {/* <Hero /> */}
        <About />
        <Works />
        <Contact />
      </div>
    </div>
  );
}

export default App;
