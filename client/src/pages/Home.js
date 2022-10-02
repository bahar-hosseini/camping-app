import React from "react";
import { CategoryFilter } from "../components/CategoryFilter";
import { PackageList } from "../components/PackageList";
import { ReactCalendar } from "../components/Calendar";
import 'react-calendar/dist/Calendar.css';
export function Home() {
  return (
    <>
    <CategoryFilter /> 
      <ReactCalendar />
      <PackageList />;
    </>
  );
}
