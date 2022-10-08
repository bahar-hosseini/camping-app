import { useEffect, useRef, useState } from "react";
import "./styles/Home.scss";
import { CategoryLinksBar } from "../components/CategoryLinksBar";
import { DatePickerBar } from "../components/DatePickerBar";
import { useContext } from "react";
import { searchContext } from "../providers/SearchProvider";
import PackageListItem from "../components/PackageListItem";
// import { Map } from "../components/Map"; // import the map here
import MapWrapper from "../components/Map";
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import React from "react";

// import './styles/Map.scss'

export function Home() {
  const {
    startDate,
    endDate,
    setPackages,
    category,
    setCategory,
    packages,
    loading,
    testContextItem,
  } = useContext(searchContext);

  // const [search_query, setSearchQuery] = useState("");
  // const [filterByCategory, setFilterByCategory] = useState(0);
  // const [filterByRange, setFilterByRange] = useState([]);
  // const [filterByLocation, setFilterByLocation] = useState([]);

  useEffect(() => {
    const categoryFilter = function (data) {
      if (category !== 0) {
        const cF = data.filter((pack) => pack.category === category);
        return cF;
      }
      return data;
    };
  });
  // function filterItems()  {axios
  //   .get("/api/packages/filter", { params: { category, endDate, startDate } })
  //   // .then((res) => console.log(res.data.data))
  //   .then((res) => {
  //     //console.log(res.data.data,'running@@@@@@')
  //     setPackages(res.data.data);

  //   });
  // }
  //   const rangeFilter = function (data) {
  //     if (startDate.getTime() === endDate.getTime()) {
  //       return data;
  //     }
  //     return avilableArry([startDate, endDate], packages, bookings);
  //   };

  //   const categoryFiltered = categoryFilter(packages);
  //   const rangeFiltered = rangeFilter(categoryFiltered);

  //   setFilteredPackages(rangeFiltered);
  // }, [packages, category, startDate, endDate]);

  const packageGallery = packages.map((packageItem) => {
    return (
      <PackageListItem
        key={packageItem.id}
        home_img={packageItem.home_img}
        id={packageItem.id}
        userID={packageItem.user_id}
        price={packageItem.price}
        category={packageItem.category}
        location={packageItem.location}
        availability={packageItem.availability}
      />
    );
  });

  // console.log(avilableArry([startDate,endDate], packages, bookings))

  //map stuff
  // const render = (status) => {
  //   return <h1>{status}</h1>;
  // };

  // const ref = useRef();
  // const [map, setMap] = useState();

  // useEffect(() => {
  //   if (ref.current && !map) {
  //     setMap(new window.google.maps.Map(ref.current, {}));
  //   }
  // }, [ref, map]);



  // var locations = [
  //   { "text": "Bondi Beach", "long": 43.73914697574119, "lat": -79.21909733404391 },
  //   { "text": "Coogee Beach", "long": 43.792426126615254, "lat": -79.23470826080701 },
  //   { "text": "Cronulla Beach", "long": 43.81372694863631, "lat": -79.22610019572875},
  //   { "text": "Manly Beach", "long": 43.81136197718913, "lat": -79.34276992649617},
  //   { "text": "Maroubra Beach", "long": 43.776653976358276, "lat": -79.33991734987256},
  // ];
  return (
    <>
      {loading === true ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <DatePickerBar />
          <CategoryLinksBar />
          <div className="gallery-container">
            <div className="package-gallery">{packageGallery}</div>
          </div>
          <div>
            {/* <Map locations={locations} zoomLevel={17} /> include it here */}
          </div>
        </>
      )}
    </>
  );
}
