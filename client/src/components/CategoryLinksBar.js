import { Link } from "react-router-dom";
// import { useState } from "react";
// import CategoryFilterItem from "./CategoryFilterItem"
// import { Routes, Route } from "react-router-dom";

export function CategoryLinksBar() {
  // const [searchParams, setSearchParams] = useSearchParams({ n: 1 });

  // const number = searchParams.get("n");
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

      {/* todo: */}
      {/* <Link to={`/package/${number}`}>Package {number}</Link>
      <br />
      <Link to="/package/new">New Package</Link>
      <br /> */}

      {/* <Outlet />
       <input
        type="number"
         value={number}
         onChange={e => setSearchParams({n: e.target.value})}
       /> */}
    </>
  );
}
