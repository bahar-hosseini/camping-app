import React, { useState, useContext } from "react";
import DatePicker from "react-date-picker";

import "./styles/DatePicker.scss";

import { searchContext } from "../providers/SearchProvider";

export function DatePickerBar() {
  const { startDate, endDate, setStartDate, setEndDate } =
    useContext(searchContext);
  // console.log(startDate);
  // console.log(endDate);

  // convertTime formats the new Date()

  // const convertTime = (time) => {
  //   return new Date(time).toLocaleDateString("en-us", {
  //     year: "numeric",
  //     month: "long",
  //     day: "numeric",
  //   });
  // };

  return (
    <div className="search-box">
      <div className="start-date">
        <h5>From</h5>
        <DatePicker onChange={setStartDate} value={startDate} />
      </div>
      <div className="end-date">
        <h5>Until</h5>
        <DatePicker onChange={setEndDate} value={endDate} />
      </div>
    </div>
  );
}

// {/* <div>
//   <ul>
//     <li>
//       <span>Where</span>
//       <input type="text" id="locationSearch" placeholder="City"></input>
//     </li>
//     <li>My start date is: {convertTime(startDate)}</li>
//     <li>My end date is: {convertTime(endDate)}</li>
//     <li>This is my Date search range: </li>
//     <li>
//       <span>Party Size: </span>
//       <input type="number" min="1" max="4" id="categorySearch"></input>
//       <Link to="/rangeSearch">
//         <Button onClick={() => console.log("Searching!!!!")}>🔎</Button>
//       </Link>
//     </li>
//   </ul>
// </div>  */}
