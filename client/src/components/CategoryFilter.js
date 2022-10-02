import { Link, Outlet, useSearchParams } from "react-router-dom";
// import { useState } from "react";
export function CategoryFilter() {
  const [searchParams, setSearchParams] = useSearchParams({n:1})

  const number = searchParams.get("n")
  return (
    <>

    
      <Link to="/package/1">Package for 1</Link>
      <br />
      <Link to="/package/2">Package for 2</Link>
      <br />
      <Link to="/package/3">Package for 3</Link>
      <br />
      <Link to="/package/4">Package for 4</Link>
      <br />
      {/* <Link to={`/package/${number}`}>Package {number}</Link>
      <br />
      <Link to="/package/new">New Package</Link>
      <br /> */}
      <Outlet />
      <input
        type="number"
        value={number}
        onChange={e => setSearchParams({n: e.target.value})}
      />
    </>
  );
}
