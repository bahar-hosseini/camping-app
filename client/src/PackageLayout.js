import { Link, Outlet, useSearchParams } from "react-router-dom";
import { useState } from "react";
export function PackageLayout() {
  const [searchParams, setSearchParams] = useSearchParams({n:1})

  const number = searchParams.get("n")
  return (
    <>
      <Link to="/package/1">Package 1</Link>
      <br />
      <Link to="/package/2">Package 2</Link>
      <br />
      <Link to={`/package/${number}`}>Package {number}</Link>
      <br />
      <Link to="/package/new">New Package</Link>
      <br />
      <Outlet />
      <input
        type="number"
        value={number}
        onChange={e => setSearchParams({n: e.target.value})}
      />
    </>
  );
}
