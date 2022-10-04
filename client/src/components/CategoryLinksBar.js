import { Link } from "react-router-dom";
import PersonIcon from "../assets/person.svg";
import "./styles/CategoryLinksBar.scss";
// import { useState } from "react";
// import CategoryFilterItem from "./CategoryFilterItem"
// import { Routes, Route } from "react-router-dom";

export function CategoryLinksBar() {
  return (
    <div className="category-links-container">
      <div className="CategoryLinksBar">
        <div className="category-group">
          <Link to="/category/1">
            <img src={PersonIcon} alt="one-person-package" height="40px" />
          </Link>
        </div>

        <div className="category-group">
          <Link to="/category/2">
            <img src={PersonIcon} alt="two-person-package" height="40px" />
            <img src={PersonIcon} alt="two-person-package" height="40px" />
          </Link>
        </div>

        <div className="category-group">
          <Link to="/category/3">
            <img src={PersonIcon} alt="three-person-package" height="40px" />
            <img src={PersonIcon} alt="three-person-package" height="40px" />
            <img src={PersonIcon} alt="three-person-package" height="40px" />
          </Link>
        </div>

        <div className="category-group">
          <Link to="/category/4">
            <img src={PersonIcon} alt="four-person-package" height="40px" />
            <img src={PersonIcon} alt="four-person-package" height="40px" />
            <img src={PersonIcon} alt="four-person-package" height="40px" />
            <img src={PersonIcon} alt="four-person-package" height="40px" />
          </Link>
        </div>
      </div>
    </div>
  );
}
