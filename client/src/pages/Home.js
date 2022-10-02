import React from "react";
import { CategoryFilter } from "../components/CategoryFilter";
import { PackageList } from "../components/PackageList";
import { ReactCalendar } from "../components/Calendar";
import 'react-calendar/dist/Calendar.css';
import Button from "../components/Button";

export function Home() {
  return (
    <>
    <CategoryFilter /> 
      <ReactCalendar />
      <Button 
      onClick={()=> console.log('Button works!')}
      />
      <PackageList />;
    </>
  );
}
