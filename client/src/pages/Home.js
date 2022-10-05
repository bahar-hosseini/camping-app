import { useEffect, useState } from "react";
import { CategoryLinksBar } from "../components/CategoryLinksBar";
import { PackageList } from "../components/PackageList";
import { DatePickerBar } from "../components/DatePickerBar";

import { useContext } from "react";

import { searchContext } from "../providers/SearchProvider";
import { HomePackages } from "../components/HomePackages";

import axios from "axios";
import { avilableArry } from "../components/AvailabilityFunc";
import { bookings } from "../mock_data/bookings";
import PackageListItem from "../components/PackageListItem";

export function Home() {
  const [filteredPackages, setFilteredPackages] = useState([]);
  const { startDate, endDate, category, setCategory, packages } =
    useContext(searchContext);

  // const [search_query, setSearchQuery] = useState("");
  // const [filterByCategory, setFilterByCategory] = useState(0);
  // const [filterByRange, setFilterByRange] = useState([]);
  // const [filterByLocation, setFilterByLocation] = useState([]);

  

  useEffect(() => {
    const categoryFilter = function (data) {
      if (category !== 0) {
        const cF = packages.filter((pack) => pack.category === category);
        return cF;
      }
      return data;
    };
  
    const rangeFilter = function (data) {
      if (startDate.getTime() === endDate.getTime()) {
        return data;
      }
      return avilableArry([startDate, endDate], packages, bookings);
    };
    const categoryFiltered = categoryFilter(packages);
    const rangeFiltered = rangeFilter(categoryFiltered);

    setFilteredPackages(rangeFiltered);
  }, [packages, category, startDate, endDate]);


  const packageGallery = filteredPackages.map((packageItem) => {
    return (
      <PackageListItem
        key={packageItem.id}
        image={packageItem.image}
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




  return (
    <>
      <DatePickerBar />
      <CategoryLinksBar />
      <div className='package-gallery'>{packageGallery}</div>
      {/* {category === 0 && <PackageList />}
      {category !== 0 && <CategoryFilterItem category={category} />} */}
    </>
  );
}
