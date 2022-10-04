import "./styles/Nav.scss";
import { Link } from "react-router-dom";
import React from "react";
import { NavDropdownMenu } from "./NavDropdownMenu";
import TentLogo from "../assets/tent_icon.svg";
import ProfileCircle from "../assets/profile_circle.svg";
import MenuBars from "../assets/menu_hamburger.svg";
import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";

export function Nav() {
  const [dropdown, setDropdown] = useState(false);

  const toggleDropdown = () => {
    dropdown ? setDropdown(false) : setDropdown(true);
  };

  const ref = useRef();

  const useOutsideClick = (ref, callback) => {
    const handleClick = e => {
      if (ref.current && !ref.current.contains(e.target)) {
        callback();
      }
    };
  
    useEffect(() => {
      document.addEventListener("click", handleClick);
  
      return () => {
        document.removeEventListener("click", handleClick);
      };
    });
  };

  useOutsideClick(ref, () => {
    setDropdown(false);
  });

  return (
    <div className="Nav">
      <div className="nav-innards">
        <div className="nav-left">
          <Link to="/">
            <img src={TentLogo} alt="lantern" width="70px"></img>
          </Link>
        </div>
        <div className="nav-right">
          <div onClick={toggleDropdown} className="profile-badge" ref={ref}>
            <img src={MenuBars} alt="tent" width="40px" />
            <img src={ProfileCircle} alt="tent" width="40px" />
          </div>
          {dropdown && <NavDropdownMenu />}
        </div>
      </div>
    </div>
  );
}
