import "./App.css";
//import { useEffect, useState } from "react";
//import axios from "axios";
import { Routes, Route, Link } from "react-router-dom";
import { Home } from "./components/Home";
import { Package } from "./components/Package";
import { PackageList } from "./components/PackageList";
import { NewPackage } from "./components/NewPackage";
import {PackageLayout} from "./PackageLayout"
import {NotFound} from "./components/NotFound"
import { UserDash } from "./components/UserDash";
import {PackageRoutes} from "./PackageRoutes"

function App() {
  //const [packages, setPackages] = useState([]);

  // const [list, setList] = useState([]);
  // useEffect(() => {
  //   axios.get("/list").then((res) => {
  //     console.log(res.data);
  //     setList(res.data.list);
  //   });
  // }, []);

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
            <Link to="/userDash">UserDash</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/package/*" element={<PackageRoutes />} />
          
        
        <Route path="/userDash" element={<UserDash />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      {/* <div className="App">
          {list.length ? (
            <div>
              <h1>List</h1>
              <ul>
                {list.map((item) => (
                  <li>{item}</li>
                ))}
              </ul>
            </div>
          ) : (
            <h1>Loading....</h1>
          )}
        </div> */}
    </>
  );
}

export default App;
