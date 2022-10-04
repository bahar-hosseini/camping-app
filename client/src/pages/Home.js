import React from "react";
import { CategoryLinksBar } from "../components/CategoryLinksBar";
import { PackageList } from "../components/PackageList";
import { DatePickerBar } from "../components/DatePickerBar";
// import CategoryFilterItem from "../components/CategoryFilterItem";
import { useContext } from "react";
// import SearchProvider from "../providers/SearchProvider";
import { searchContext } from "../providers/SearchProvider";
import DateRangeFilterItem from "../components/DateRangeFilterItem";


export function Home() {
  const { startDate, endDate, avilableIDArry } = useContext(searchContext);
  //  console.log(startDate)
  //  console.log(endDate)

  const sdedSame = function (sd, ed) {
    if (sd.getTime() === ed.getTime()) {
      return true;
    }
    return false;
  };
  // console.log(sdedSame(startDate, endDate ))
  return (
    <>
      <DatePickerBar />
      <CategoryLinksBar />
      <PackageList />
      {/* <DateRangeFilterItem 
      startDate={startDate}
      endDate={endDate}
      /> */}
      {/* {sdedSame(startDate, endDate) && <PackageList />} */}
      {/* {sdedSame(startDate, endDate) && <DateRangeFilterItem  />} */}
    </>
  );
}
