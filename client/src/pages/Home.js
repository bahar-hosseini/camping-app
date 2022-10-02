import React from "react";
import { CategoryFilter } from "../components/CategoryFilter";
import { PackageList } from "../components/PackageList";
import {DatePickerBar} from "../components/DatePickerBar"

export function Home() {
  return (
    <>
    <DatePickerBar />
    <CategoryFilter /> 
      
      <PackageList />;
    </>
  );
}
