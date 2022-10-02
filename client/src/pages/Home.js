import React from "react";

import { PackageList } from "../components/PackageList";
import { ReactCalendar } from "../components/Calendar";
import 'react-calendar/dist/Calendar.css';
export function Home() {
  return (
    <>
      <ReactCalendar />
      <PackageList />;
    </>
  );
}
