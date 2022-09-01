import "./App.css";
import React from "react";
import TopAnimation from "./components/animation/TopAnimation";

import About from "./components/about/About";
import Works from "./components/work/Works";
import Contact from "./components/contact/Contact";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      
      <TopAnimation />
      <div className="app-container">
        <About />
        <Works />
        <Contact />
      </div>

      <Footer />
    </div>
  );
}

export default App;
