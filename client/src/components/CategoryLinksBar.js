import { Link } from "react-router-dom";
// import { useState } from "react";
// import CategoryFilterItem from "./CategoryFilterItem"
// import { Routes, Route } from "react-router-dom";

export function CategoryLinksBar() {

  return (
    <>
      <ul>
        <li>
          <Link to="/category/1">Package for 1</Link>
        </li>
        <li>
          <Link to="/category/2">Package for 2</Link>
        </li>
        <li>
          <Link to="/category/3">Package for 3</Link>
        </li>
        <li>
          <Link to="/category/4">Package for 4</Link>
        </li>
      </ul>



    </>
  );
}
