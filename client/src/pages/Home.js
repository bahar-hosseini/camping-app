import { useEffect, useRef, useState } from "react";
import "./styles/Home.scss";
import { CategoryLinksBar } from "../components/CategoryLinksBar";
import { DatePickerBar } from "../components/DatePickerBar";
import { useContext } from "react";
import { searchContext } from "../providers/SearchProvider";
import PackageListItem from "../components/PackageListItem";

import MapWrapper from "../components/Map";
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import React from 'react'


import {Map} from '../components/Map' // import the map here



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
        </>
      )}
      
    </>
  );
}
