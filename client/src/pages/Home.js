import { useEffect, useRef, useState } from 'react'
import './styles/Home.scss'
import { CategoryLinksBar } from '../components/CategoryLinksBar'
import { DatePickerBar } from '../components/DatePickerBar'
import { useContext } from 'react'
import { searchContext } from '../providers/SearchProvider'
import PackageListItem from '../components/PackageListItem'
import { MapMultiHome } from '../components/MapMultiHome' // import the map here
// import MapWrapper from "../components/Map";
// import { Wrapper, Status } from "@googlemaps/react-wrapper";
import React from 'react'

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
    loadMap,
  } = useContext(searchContext)

  // const [search_query, setSearchQuery] = useState("");
  // const [filterByCategory, setFilterByCategory] = useState(0);
  // const [filterByRange, setFilterByRange] = useState([]);
  // const [filterByLocation, setFilterByLocation] = useState([]);

  useEffect(() => {
    const categoryFilter = function (data) {
      if (category !== 0) {
        const cF = data.filter((pack) => pack.category === category)
        return cF
      }
      return data
    }
  })
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

  const packageGallery = packages.map((packageItem, index) => {
    return (
      <PackageListItem
        key={index}
        home_img={packageItem.home_img}
        id={packageItem.id}
        userID={packageItem.user_id}
        price={packageItem.price}
        category={packageItem.category}
        availability={packageItem.availability}
      />
    )
  })

  let locations = packages.map((loco, index) => {
    return {
      lat: loco.latitude,
      lng: loco.longitude,
    }
  })

  return (
    <>
      {loading === true ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <h1 className='header-text'>find your next adventure</h1>
          <div className='selector-container'>
            <div className='date-picker-section'>
              <div>
                <DatePickerBar />
              </div>
              <div>
                <CategoryLinksBar />
              </div>
            </div>
          </div>
          <div className='selector-container-empty'></div>
          <div className='top-area' />
          <div className='gallery-container'>
            <div className='package-gallery'>{packageGallery}</div>
          </div>

          {/* {loadMap && <MapMultiHome location={locations} zoomLevel={12} />} */}
        </>
      )}
    </>
  )
}
