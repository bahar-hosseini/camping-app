import React from "react";
import "./styles/BookingBox.scss";
import axios from "axios";
import { formatDistanceStrict } from "date-fns";
import { DatePickerBar } from "./DatePickerBar";
import Button from "./Button";
// import "./styles/DatePicker.scss";
import { searchContext } from "../providers/SearchProvider";
import { useContext } from "react";

export function BookingBox(props) {
  //  Handle button function: when we click on that button we are adding a new booking for that user (for now user 1)
  const { startDate, endDate } = useContext(searchContext);

  let package_id = props.packageID;
  let booking_SD = startDate;
  let booking_ED = endDate;
  // we can check the result in bookings page.
  const handleBooking = async (e) => {
    e.preventDefault();

    // try {
    //.post('/api/bookings/filter'
    await axios
      .post("/api/bookings/new", {
        params: { package_id, booking_SD, booking_ED },
      })
      .then((res) => {});
    //[package_id, endDate, startDate]
    //   }
    //   catch(err){
    // console.log(err)
    //   }
  };
  const duration = formatDistanceStrict(endDate, startDate, {
    unit: "day",
  });
  return (
    <div className="booking-box-container">
      <div className="booking-info">
        <h2 className="package-price-box">${props.price} per day</h2>
        {/* {console.log(this.startDate)} */}

        <h2>Duration: {duration}</h2>
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
