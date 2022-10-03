import React, { useState } from "react";
import DatePicker from "react-date-picker";
import Button from "../components/Button";

export function DatePickerBar() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  // console.log(startDate)
  // convertTime formats the new Date()
  const convertTime = (time) => {
    return new Date(time).toLocaleDateString("en-us", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };
  return (
    <div>
      <div>
        <span>
          <DatePicker onChange={setStartDate} value={startDate} />
        </span>
        <span>
          <DatePicker onChange={setEndDate} value={endDate} />
        </span>
      </div>

      <div>
        <ul>
          <li>
            <span>Where</span>
            <input type="text" id="locationSearch" placeholder="City"></input>
          </li>
          <li>My start date is: {convertTime(startDate)}</li>
          <li>My end date is: {convertTime(endDate)}</li>
          <li>
            <span>Party Size: </span>
            <input type="number" min="1" max="4" id="categorySearch"></input>

            <Button onClick={() => console.log("Searching!!!!")}>🔎</Button>
          </li>
        </ul>
      </div>
    </div>
  );
}
