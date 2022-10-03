import React from "react";
import { CategoryLinksBar} from "../components/CategoryLinksBar";
import { PackageList } from "../components/PackageList";
import {DatePickerBar} from "../components/DatePickerBar"
// import CategoryFilterItem from "../components/CategoryFilterItem";

export function Home() {
  return (
    <>
    <DatePickerBar />
    <CategoryLinksBar /> 
      
      <PackageList />;
    </>
  );
}
