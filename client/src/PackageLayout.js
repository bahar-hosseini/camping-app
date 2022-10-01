import { Link, Outlet } from "react-router-dom";

export function PackageLayout() {
  return (
    <>
    <Link to="/package/1">Package 1</Link>
    <br />
    <Link to="/package/2">Package 2</Link>
    <br />
    <Link to="/package/new">New Package</Link>
    <br />
    <Outlet />
    </>
  )
    
}
