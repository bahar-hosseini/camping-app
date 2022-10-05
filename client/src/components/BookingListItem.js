import React, { useState } from "react";
import bookingImg from "../assets/booking_imgs/booking_02.png";

/**
 * Internal Modules
 **/
import { bookings } from "../mock_data/bookings";
import "./styles/BookingListItem.scss";
import Button from "./Button";

// Component to display individual Booking Item
const BookingListItem = (props) => {
  const [state, setState] = useState(true);

  //Function to handle cancel button to remove item from booking dashboard
  const handleCancelBooking = () => {
    let findIndx = bookings.findIndex((x) => x["id"] === props.id);
    setState(false);
    bookings.splice(findIndx, 1);
  };

  if (state) {
    return (
      <div className="booking-item-box">
        <img
          src={bookingImg}
          alt="img"
          className="booking-img"
          height="175px"
        />

        <div className="booking-content">
          <div className="top-section">
            <h2>{props.category} Person Package</h2>
            <h2 className="start-end-date">Start Date - End Date</h2>
            {/* Description: {props.description} */}
          </div>
          <div className="booking-btn-price">
            <h2 className="booking-price">${props.price}/day</h2>
            <div>
              <Button className="btn-cancel" onClick={handleCancelBooking}>
                Cancel Booking
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default BookingListItem;
