import React from "react";
import { CategoryLinksBar } from "../components/CategoryLinksBar";
import { PackageList } from "../components/PackageList";
import { DatePickerBar } from "../components/DatePickerBar";
// import CategoryFilterItem from "../components/CategoryFilterItem";
import { useContext } from "react";
// import SearchProvider from "../providers/SearchProvider";
import { searchContext } from "../providers/SearchProvider";

export function Home() {
  // logmeTest()

  const { logmeTest, startDate, endDate } = useContext(searchContext);
  console.log(startDate)
  console.log(endDate)
  return (
    <>
      <DatePickerBar />
      <CategoryLinksBar />
      <PackageList />
    </>
  );
}
