import "./App.scss";
// import { useEffect, useState } from "react";
// import axios from "axios";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import {NotFound} from "./pages/NotFound";
import { Bookings } from "./pages/Bookings";
import {PackageRoutes} from "./PackageRoutes"
import { Nav } from "./components/Nav";
import CategoryFilterItem from "./components/CategoryFilterItem";
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
    <div className="App">
      <Nav />
        

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/package/*" element={<PackageRoutes />} />
        <Route path="/bookings" element={<Bookings />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/category/1" element={<CategoryFilterItem category="1"/>} />
        <Route path="/category/2" element={<CategoryFilterItem category="2"/>} />
        <Route path="/category/3" element={<CategoryFilterItem category="3"/>} />
        <Route path="/category/4" element={<CategoryFilterItem category="4"/>} />
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
    </div>
  );
}

export default App;
