import { Link } from "react-router-dom";
import React from "react";

export function NavDropdownMenu() {
  return (
    <>
      {/* <select name="NavDropdownLoggedOut" id="NavDropdownLoggedOut">
        <option value="Signup">Sign up</option>
        <option value="Login">Log in</option>
        <option value="HostYourHome">Host Your Equipment</option>
      </select> */}

      <select name="NavDropdownLoggedIn" id="NavDropdownLoggedIn">
        <option value="Messages">Messages</option>
        <option value="Notification">Notification</option>
        <option value="Bookings">Bookings</option>
        <option value="User Dashboard">User Dashboard</option>
        <option value="LogOut">Log Out</option>
        <option value="Referafriend ">Refer a friend </option>
      </select>
    </>
  );
}
