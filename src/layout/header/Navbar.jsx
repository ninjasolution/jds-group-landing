import React, { useState, useRef } from "react";
import PymbleRoad from "../../assets/icons/PymbleRoad.svg";
import TeleLogo from "../../assets/icons/TeleLogo.svg";
import Navigation from "./Navigation";
import { Link } from "react-router-dom";

import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
  Card,
  IconButton,
} from "@material-tailwind/react";
import {
  CubeTransparentIcon,
  UserCircleIcon,
  CodeBracketSquareIcon,
  Square3Stack3DIcon,
  ChevronDownIcon,
  Cog6ToothIcon,
  InboxArrowDownIcon,
  LifebuoyIcon,
  PowerIcon,
  RocketLaunchIcon,
  Bars2Icon,
} from "@heroicons/react/24/solid";

function HeaderNavbar(props) {
  const [toggle, setToggle] = useState(false);
  const hamburger_btn_ref = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const closeMenu = () => setIsMenuOpen(false);
  // profile menu component
  const languageList = [
    {
      label: "ES",
      icon: UserCircleIcon,
    },
    {
      label: "DE",
      icon: Cog6ToothIcon,
    },
    {
      label: "RU",
      icon: InboxArrowDownIcon,
    },
    {
      label: "ZH",
      icon: LifebuoyIcon,
    },
    {
      label: "AR",
      icon: PowerIcon,
    },
  ];

  return (
    <div className="flex justify-between items-end w-100 px-2 lg:px-0">
      <img className="hidden lg:block" src={PymbleRoad} alt="img" />

      <Link to="/" className="inline-block h-[35px] sm:h-[40px] md:h-[52px]">
        <img src={TeleLogo} className="max-h-[95%]" alt="img" />
      </Link>
      <ul className="flex items-center">
        <li className="me-6 hidden md:block">
          <Menu
            open={isMenuOpen}
            handler={setIsMenuOpen}
            placement="bottom-end"
          >
            <MenuHandler>
              <Button
                variant="text"
                color="blue-gray"
                className="text_primary text-sm m-0 p-0 font-normal"
              >
                LANGUAGES
              </Button>
            </MenuHandler>
            <MenuList className="p-1 custom_dropdown_list">
              {languageList.map(({ label, icon }, key) => {
                // const isLastItem = key === languageList.length - 1;
                return (
                  <MenuItem
                    key={label}
                    onClick={closeMenu}
                    className={`flex items-center gap-2 rounded`}
                  >
                    {React.createElement(icon, {
                      className: `h-4 w-4 hidden`,
                      strokeWidth: 2,
                    })}
                    <Typography
                      as="span"
                      variant="small"
                      className="font-normal"
                    >
                      {label}
                    </Typography>
                  </MenuItem>
                );
              })}
            </MenuList>
          </Menu>
        </li>
        <li className="me-6 hidden md:block">
          <Link
            to={"/contact"}
            className="text_primary text-sm hover:underline"
          >
            CONTACT
          </Link>
        </li>
        <li className="text_primary min-w-[25px] text-end">
          <div
            ref={hamburger_btn_ref}
            onClick={() => setToggle(!toggle)}
            className={`hamburger whitespace-nowrap hamburger--collapse ${
              toggle ? "is-active" : ""
            }`}
          >
            <div className="hamburger-box me-[10px]">
              <div className="hamburger-inner" />
            </div>
            <a
              href="javascript:void(0)"
              className="text_primary hover:text-[#E53B16]"
            >
              {toggle ? "CLOSE" : "MENU"}
            </a>
          </div>
          <img
            className="w-[160px] sm:w-[175px] md:hidden"
            src={PymbleRoad}
            alt="img"
          />
        </li>
      </ul>

      <Navigation
        toggle={toggle}
        setToggle={setToggle}
        hamburger_btn_ref={hamburger_btn_ref}
      />
    </div>
  );
}

export default HeaderNavbar;
