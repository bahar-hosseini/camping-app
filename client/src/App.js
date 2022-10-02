import "./App.css";
// import { useEffect, useState } from "react";
// import axios from "axios";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import {NotFound} from "./pages/NotFound";
import { Bookings } from "./pages/Bookings";
import {PackageRoutes} from "./PackageRoutes"
import { Nav } from "./components/Nav";

function App() {
  // const [packages, setPackages] = useState([]);

  //const [list, setList] = useState([]);
  // useEffect(() => {
  //   axios.get("/list").then((res) => {
  //     console.log(res.data);
  //     setPackages(res.data.list);
  //   });
  // }, []);

  return (
    <>
      <Nav />
        

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/package/*" element={<PackageRoutes />} />
        <Route path="/bookings" element={<Bookings />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      {/* <div className="App">
          {packages.length ? (
            <div>
              <h1>List</h1>
              <ul>
                {packages.map((item) => (
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
