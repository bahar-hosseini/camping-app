import "./styles/Nav.scss";
import { Link } from "react-router-dom";
import React from "react";
import { NavDropdownMenu } from "./NavDropdownMenu";
import TentLogo from "../assets/tent_icon.svg";

export function Nav() {
  return (
    <div className="Nav">
      <div className="nav-innards">
        <div className="nav-left">
          <Link to="/">
            <img src={TentLogo} alt="lantern" width="70px"></img>
          </Link>
        </div>
        <div className="nav-right">
          <Link to="/package">Package </Link>
          <Link to="/bookings">Bookings</Link>
        </div>
      </div>

      {/* <NavDropdownMenu /> */}
    </div>
  );
}
