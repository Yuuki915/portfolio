import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

export default function Header() {
  return (
    <div className="header">
      <p className="header-link">
        <Link to={"#about"}>About</Link>
      </p>
      <p className="header-link">
        <Link to={"/works"}>Works</Link>
      </p>
      <p className="header-link">
        <Link to={"/contact"}>Contact</Link>
      </p>
    </div>
  );
}
