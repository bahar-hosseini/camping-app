import React, { useState } from 'react'
import bookingImg from '../assets/booking_page.png'

/**
 * Internal Modules
 **/
import { bookings } from '../mock_data/bookings'
import './styles/BookingListItem.scss'
import Button from './Button'
// import axios from 'axios'

// Component to display individual Booking Item
const BookingListItem = (props) => {
  // const [state, setState] = useState(true)

  return (
    <div className='booking-item-box'>
      <img src={bookingImg} alt='img' className='booking-img' height='175px' />

      <div className='booking-content'>
        <div className='top-section'>
          <h2>{props.category} Person Package</h2>
          <h2 className='start-end-date'>Start Date - End Date</h2>
          {/* Description: {props.description} */}
        </div>
        <div className='booking-btn-price'>
          <h2 className='booking-price'>${props.price}/day</h2>
          <div>
            <Button
              className='btn-cancel'
              onClick={() => props.sendFunc(props.id)}
            >
              Cancel Booking
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BookingListItem
