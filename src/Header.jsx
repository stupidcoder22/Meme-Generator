import React from "react";
import smilelogo from "./logo.png";

function Header() {
  return (
    <header className="header">
      <img src={smilelogo} className="header--image" />
      <h2 className="header--title">Meme Generator</h2>
    </header>
  );
}

export default Header;
