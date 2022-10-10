import React, { useState } from "react";
import "./styles/BookingBox.scss";
import axios from "axios";
import { formatDistanceStrict, format } from "date-fns";
import { DatePickerBar } from "./DatePickerBar";
import Button from "./Button";
// import "./styles/DatePicker.scss";
import { searchContext } from "../providers/SearchProvider";
import { useContext } from "react";
import { Link } from "react-router-dom";

export function BookingBox(props) {
  //  Handle button function: when we click on that button we are adding a new booking for that user (for now user 1)
  const { startDate, endDate, isLogin } = useContext(searchContext);
  const [bookingCreated, setBookingCreated] = useState(false);

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
      .then((res) => {
        setBookingCreated(true);
        setTimeout(() => {
          window.location = "/bookings";
        }, 1000);
      });
    //[package_id, endDate, startDate]
    //   }
    //   catch(err){
    // console.log(err)
    //   }
  };
  const duration = formatDistanceStrict(endDate, startDate, {
    unit: "day",
  });

  // const rangeToDays = (start, end) => {
  //   return Math.abs(Math.round((start - end) / 1000 / 60 / 60 / 24));
  // };

  function rangeToDays(start, end) {
    const date1 = new Date(format(start, "MM/dd/yyyy"));
    const date2 = new Date(format(end, "MM/dd/yyyy"));

    // One day in milliseconds
    const oneDay = 1000 * 60 * 60 * 24;

    // Calculating the time difference between two dates
    const diffInTime = date2.getTime() - date1.getTime();

    // Calculating the no. of days between two dates
    const diffInDays = Math.round(diffInTime / oneDay);

    return diffInDays;
  }

  return (
    <>
      <div className="booking-box-container">
        <div className="booking-info">
          <h2 className="package-price-box">
            ${props.price}{" "}
            <span style={{ fontWeight: "normal", fontSize: "20px" }}>
              per day
            </span>
          </h2>
          {/* {console.log(this.startDate)} */}
          {/* <h2>Duration: {duration}</h2> */}
          <DatePickerBar />
          <div className="price-section">
            <div className="price-row">
              <div>Price x {duration}</div>
              <div>
                ${(rangeToDays(startDate, endDate) * props.price).toFixed(2)}
              </div>
            </div>
            <div className="price-row">
              <div>Tax (13%)</div>
              <div>
                $
                {(rangeToDays(startDate, endDate) * props.price * 0.13).toFixed(
                  2
                )}
              </div>
            </div>
            <div className="price-row">
              <div>
                <span style={{ fontWeight: "bold" }}>Total</span>
              </div>
              <div>
                <span style={{ fontWeight: "bold" }}>
                  $
                  {(
                    rangeToDays(startDate, endDate) *
                    props.price *
                    1.13
                  ).toFixed(2)}
                </span>
              </div>
            </div>
          </div>
          {!isLogin && (
            <div className="book-button">
              <Button className="btn-book-disabled">Please Log In</Button>
            </div>
          )}
          {isLogin && (
            <div className="book-button">
              {!bookingCreated ? (
                <Button onClick={handleBooking} className="btn-book">
                  Book
                </Button>
              ) : (
                <Button className="btn-book">
                  <div className="spin" />
                  Working
                </Button>
              )}
            </div>
          )}
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
    </>
  );
}
