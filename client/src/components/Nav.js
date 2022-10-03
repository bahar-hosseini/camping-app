import {  Link } from "react-router-dom";
import React from "react";
import { NavDropdownMenu } from "./NavDropdownMenu";

export function Nav() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/package">Package</Link>
          </li>
          <li>
            <Link to="/bookings">Bookings</Link>
          </li>
        </ul>
      </nav>
    <NavDropdownMenu />
    </>
  );
}
