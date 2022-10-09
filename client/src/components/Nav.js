import "./styles/Nav.scss";
import { Link } from "react-router-dom";
import React from "react";
import { useContext } from "react";
import { NavDropdownMenu } from "./NavDropdownMenu";
import TentLogo from "../assets/tent_icon.svg";
import ProfileCircle from "../assets/profile_circle.svg";
import ProfileCircleLoggedIn from "../assets/person_logged_in.svg";
import MenuBars from "../assets/menu_hamburger.svg";
import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { searchContext } from "../providers/SearchProvider";
import Login from "./Login";
import axios from "axios";

export function Nav() {
  const [dropdown, setDropdown] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const { setPackages, isLogin, setCategories } = useContext(searchContext);

  // function that refreshes the homepage context when you click on the logo button
  const refreshHomepage = () => {
    return (window.location = `/`);
  };

  const showLoginForm = () => {
    return setShowLogin(true);
  };

  const hideLoginForm = () => {
    return setShowLogin(false);
  };

  const toggleDropdown = () => {
    dropdown ? setDropdown(false) : setDropdown(true);
  };

  const ref = useRef();

  const useOutsideClick = (ref, callback) => {
    const handleClick = (e) => {
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
    <>
      {showLogin ? <div className="dimScreen" /> : <></>}
      {showLogin ? <Login hideLoginForm={hideLoginForm} /> : <></>}
      <div className="Nav">
        <div className="nav-innards">
          <div className="nav-left">
            {/* <Link to="/" onClick={() => refreshHomepage()}> */}
            <img
              src={TentLogo}
              alt="lantern"
              width="65px"
              onClick={() => refreshHomepage()}
            ></img>
            <p>
              <span style={{ fontWeight: "bold", fontSize: "1.45rem" }}>
                campr
              </span>
            </p>
            {/* </Link> */}
          </div>
          {/* <div className="login-form-section">
          {showLogin ? <Login hideLoginForm={hideLoginForm} /> : <></>}
        </div> */}
          <div className="nav-right">
            <div onClick={toggleDropdown} className="profile-badge" ref={ref}>
              <img src={MenuBars} alt="menu-bars" width="35px" />
              {isLogin && (
                <img
                  src={ProfileCircleLoggedIn}
                  alt="profile-icon"
                  width="40px"
                />
              )}
              {!isLogin && (
                <img src={ProfileCircle} alt="profile-icon" width="40px" />
              )}
            </div>
            {dropdown && <NavDropdownMenu showLoginForm={showLoginForm} />}
          </div>
        </div>
      </div>
    </>
  );
}
