import {differenceInDays, getTime, toDate, formatDistance, formatDistanceStrict } from "date-fns"
import React from "react";
import { bookings } from "../mock_data/bookings";
import "./styles/BookingBox.scss";
import DatePicker from "react-date-picker";

import { DatePickerBar } from "./DatePickerBar";
import Button from "./Button";
// import "./styles/DatePicker.scss";

import { searchContext } from "../providers/SearchProvider";
import useContext from "../providers/SearchProvider";


export function BookingBox(props) {
  //  Handle button function: when we click on that button we are adding a new booking for that user (for now user 1)
  const { startDate, endDate, setStartDate, setEndDate } =
  useContext(searchContext);

  // console.log(startDate,"@@@@@@")
  let diffDays = Date.parse(props.startDate)
// let diff = endDate.diff(startDate)//.days()
//console.log(startDate)
  // let diffDays =  formatDistanceStrict(new Date(endDate), new Date(startDate))

  // we can check the result in bookings page.
  const handleBooking = () => {
    const currentUser = 1;
    const bookingObj = {};
    bookingObj["user_id"] = currentUser;
    bookingObj["package_id"] = props.packageID;
    bookings.push(bookingObj);
    //console.log(bookings);
    alert(`Package ${props.packageID} added `);
  };
  return (
    <div className="booking-box-container">
      <div className="booking-info">
        <h2 className="package-price-box">${props.price} per day</h2>
        {/* {console.log(this.startDate)} */}
        
        <h2>Duration: {diffDays}</h2>
        <DatePickerBar />
        <div className="book-button">
          <Button onClick={handleBooking}>Book</Button>
        </div>
        {/* <span>
          <DatePicker onChange={props.setStartDate} value={props.startDate} />
        </span>
        <span>
          <DatePicker onChange={props.setEndDate} value={props.endDate} />
        </span> */}
      </div>
      {/* <button className="btn-booking" onClick={handleBooking}>
        BOOK
      </button> */}
    </div>
  );
}

//https://date-fns.org/v2.29.3/docs/closestTo
//date-fns
//these are some stuff we might need to calculate dates
//add  / Add the specified years, months, weeks, days, hours, minutes and seconds to the given date.
//closestIndexTo   /  Return an index of the closest date from the array comparing to the given date.
//closestTo   /Return a date from the array closest to the given date.
//formatDistanceToNowStrict Return the distance between the given dates in words, using strict units. This is like formatDistance, but does not use helpers like 'almost', 'over', 'less than' and the like.
//formatDistanceStrict ** Return the distance between the given dates in words, using strict units. This is like formatDistance, but does not use helpers like 'almost', 'over', 'less than' and the like.

//sorts an array of dates
// dates.sort(compareAsc)
//=> [
//   Wed Feb 11 1987 00:00:00,
//   Mon Jul 10 1989 00:00:00,
//   Sun Jul 02 1995 00:00:00
// ]
