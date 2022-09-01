import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Works from "./components/work/Works";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        {/* <Route path="/about" element={<About />} />
        <Route path="/works" element={<Works />} />
        <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
