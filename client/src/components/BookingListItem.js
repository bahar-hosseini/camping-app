import React, { useState } from "react";
import { Link } from "react-router-dom";
// import bookingImg from '../assets/booking_imgs/booking_02.png'

/**
 * Internal Modules
 **/
import { bookings } from "../mock_data/bookings";
import "./styles/BookingListItem.scss";
import { formatDateTitles } from "../helpers/formatDateTitles";
import Button from "./Button";
// import axios from 'axios'

// Component to display individual Booking Item
const BookingListItem = (props) => {
  // const [state, setState] = useState(true)

  return (
    <div className="booking-item-box">
      <Link to={"/package/" + props.id}>
        <img
          src={require(`../assets/booking_imgs/${props.booking_img}.png`)}
          alt="img"
          className="booking-img"
          height="175px"
        />
      </Link>
      <div className="booking-content">
        <div className="top-section">
          <h2>{formatDateTitles(props.category)} Person Package</h2>
          <h2 className="start-end-date">Start Date - End Date</h2>
          {/* Description: {props.description} */}
        </div>
        <div className="booking-btn-price">
          <h2 className="booking-price">${props.price} per day</h2>
          <div>
            <Button
              className="btn-cancel"
              onClick={() => props.sendFunc(props.id)}
            >
              Cancel Booking
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingListItem;
