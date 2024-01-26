import React, { useRef, useEffect } from "react";
import { NavbarList } from "../../data/NavbarList";
function Navigation({ toggle, setToggle, hamburger_btn_ref }) {
  const navigationRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      let nav_condition =
        navigationRef.current && !navigationRef.current.contains(event.target);
      let btn_condition =
        hamburger_btn_ref.current &&
        !hamburger_btn_ref.current.contains(event.target);

      if (nav_condition && btn_condition) {
        // Click occurred outside of the navigation component
        console.log("Clicked outside navigation");
        setToggle(false);
        // Place your logic here for actions to be taken when clicked outside
      } else {
      }
    }

    // Set up event listener after component has mounted
    window.addEventListener("click", handleClickOutside);

    // Clean up event listener when component unmounts
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []); // Empty dependency array to run effect only once

  return (
    <div
      id="navigation"
      ref={navigationRef}
      className={`overlay ${toggle ? "show_nav" : ""}`}
    >
      <div className="menu-main-navigation-container">
        <ul id="menu-main-navigation" className="menu">
          {NavbarList.map((value, index) => {
            return (
              <li
                key={value.id}
                id="menu-item-29"
                style={{ "--i": NavbarList.length - index }}
                className={`menu-item menu-item-type-post_type menu-item-object-page menu-item-29 ${
                  toggle ? "show_list" : ""
                }`}
              >
                <a href={value.link} className="ajaxified">
                  {value.name}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
      <div id="sub-navigation">
        <div className="menu-footer-navigation-container">
          <ul id="menu-footer-navigation" className="menu">
            <li
              id="menu-item-31"
              className={`menu-item menu-item-type-post_type menu-item-object-page menu-item-31 ${
                toggle ? "show_list" : ""
              }`}
            >
              <a href="http://paulm160.sg-host.com/legal" className="ajaxified">
                Legal
              </a>
            </li>
            <li
              id="menu-item-1261"
              className={`highlighted menu-item menu-item-type-post_type menu-item-object-page menu-item-1261 ${
                toggle ? "show_list" : ""
              }`}
            >
              <a href=" " className="ajaxified">
                Contact
              </a>
            </li>
            <li
              id="menu-item-1262"
              className={`menu-item menu-item-type-post_type menu-item-object-page menu-item-1262 ${
                toggle ? "show_list" : ""
              }`}
            >
              <a href="http://paulm160.sg-host.com/press" className="ajaxified">
                Press
              </a>
            </li>
          </ul>
        </div>{" "}
      </div>
    </div>
  );
}

export default Navigation;
