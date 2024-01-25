import React from "react";
import PymbleRoad from "../../assets/icons/PymbleRoad.svg";
import TeleLogo from "../../assets/icons/TeleLogo.svg";
function Navbar(props) {
  return (
    <div className="flex justify-between items-end w-100">
      <img src={PymbleRoad} alt="img" />
      <a href="#" className="inline-block h-[52px]">
        <img src={TeleLogo} className="max-h-[95%]" alt="img" />
      </a>
      <ul className="flex items-center">
        <li className="me-6">
          <a className="text-[#7c7262]" href="#">LANGUAGES</a>
        </li>
        <li className="me-6">
          <a className="text-[#7c7262]" href="#">CONTACT</a>
        </li>
        <li>
          <div className="hamburger hamburger--collapse">
            <div className="hamburger-box">
              <div className="hamburger-inner" />
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
