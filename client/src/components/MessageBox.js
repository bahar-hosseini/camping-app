import React, { useState } from "react";
import "./styles/MessageBox.scss";
import axios from "axios";
import { formatDistanceStrict, format } from "date-fns";
import Button from "./Button";
import { searchContext } from "../providers/SearchProvider";
import { useContext } from "react";

export function MessageBox(props) {
  const { startDate, endDate, isLogin } = useContext(searchContext);
  const [bookingCreated, setBookingCreated] = useState(false);

  let package_id = props.packageID;
  let booking_SD = startDate;
  let booking_ED = endDate;
  const handleBooking = async (e) => {
    e.preventDefault();

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
  };
  const duration = formatDistanceStrict(endDate, startDate, {
    unit: "day",
  });

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
      <div className="message-box-container">
        <div className="booking-info">
          <h2 className="package-price-box">
            <span style={{ fontWeight: "bold", fontSize: "20px" }}>
              Ask the owner a question:
            </span>
          </h2>

        
  

            <div className="price-row">
              <div>
                <textarea
                  className="message-text-area"
                  placeholder="Message "
                  name="message"
                  rows="6"
                  cols="35"
                ></textarea>{" "}
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
        </div>
      </div>
    </>
  );
}
