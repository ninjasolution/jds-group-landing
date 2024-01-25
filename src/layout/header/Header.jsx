import React from "react";
import Navbar from "./Navbar";
import "../../styles/header.scss";
function Header(props) {
  return (
    <header id="header" className="flex items-end">
      <div className="container_wrapper">
        <Navbar></Navbar>
      </div>
    </header>
  );
}

export default Header;
