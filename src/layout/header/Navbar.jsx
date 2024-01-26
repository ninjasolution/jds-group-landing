import React, { useState, useRef } from "react";
import PymbleRoad from "../../assets/icons/PymbleRoad.svg";
import TeleLogo from "../../assets/icons/TeleLogo.svg";
import Navigation from "./Navigation";
function Navbar(props) {
  const [toggle, setToggle] = useState(false);
  const hamburger_btn_ref = useRef(null);
  return (
    <div className="flex justify-between items-end w-100">
      <img src={PymbleRoad} alt="img" />
      <a href="#" className="inline-block h-[52px]">
        <img src={TeleLogo} className="max-h-[95%]" alt="img" />
      </a>
      <ul className="flex items-center">
        <li className="me-6">
          <a className="text_primary" href="#">
            LANGUAGES
          </a>
        </li>
        <li className="me-6">
          <a className="text_primary hover:underline" href="#">
            CONTACT
          </a>
        </li>
        <li className="text_primary min-w-[25px]">
          <div ref={hamburger_btn_ref}
            onClick={() => setToggle(!toggle)}
            className={`hamburger hamburger--collapse ${
              toggle ? "is-active" : ""
            }`}
          >
            <div className="hamburger-box me-[10px]">
              <div className="hamburger-inner" />
            </div>
            <a
              href="javascript:void(0)"
              className="text_primary hover:text-[#4d4e4c]"
            >
              {toggle ? "CLOSE" : "MENU"}
            </a>
          </div>
        </li>
      </ul>
      <Navigation toggle={toggle} setToggle={setToggle} hamburger_btn_ref={hamburger_btn_ref} />
    </div>
  );
}

export default Navbar;
