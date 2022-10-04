// import React from "react";
import {packages} from "../mock_data/packages";

import PackageListItem from "./PackageListItem";
// import { DatePickerBar } from "./DatePickerBar";
//import {packageArry, mDROwithUserRange, bookingForSpecificPackage, allDates, multipleDateRangeOverlaps, avilableIDArry, bookingConflictChecker} from "./AvailabilityFunc";
// import { searchContext } from "../providers/SearchProvider";
// import useContext from "../providers/SearchProvider"

export default function DateRangeFilterItem(props) {
  // console.log(props)
  //console.log(packages)
  // const { startDate, endDate, setStartDate, setEndDate } = useContext(searchContext);

  const searchRangeFunc = (start, end) => {
    let outputArry = [];
    outputArry.push(start);
    outputArry.push(end);
    return outputArry;
  };

//console.log(props.avilableIDArry)

  // const searchRange = searchRangeFunc(props.startDate, props.endDate);
 
  // const matchingIDs = avilableIDArry(searchRange, packages);
  // console.log(matchingIDs);


  const currentPackage = packages.filter(
    (pack) => pack.category == props.category
  );

  const packageGallery = currentPackage.map((packageItem) => {
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

  return (
    <>
      <div className="gallery-container">
        <div className="package-gallery">{packageGallery}</div>
      </div>
    </>
  );
}


