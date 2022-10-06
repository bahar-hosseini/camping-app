import { differenceInDays, getTime, toDate } from 'date-fns'
import React from 'react'
import { bookings } from '../mock_data/bookings'
import './styles/BookingBox.scss'
import DatePicker from 'react-date-picker'
import { searchContext } from '../providers/SearchProvider'
import useContext from '../providers/SearchProvider'
import { DatePickerBar } from './DatePickerBar'
import Button from './Button'
// import "./styles/DatePicker.scss";
// import { searchContext } from "../providers/SearchProvider";
// import useContext from "../providers/SearchProvider"

export function BookingBox(props) {
  //  Handle button function: when we click on that button we are adding a new booking for that user (for now user 1)
  const { startDate, endDate } = useContext(searchContext)
  // let diff = endDate.diff(startDate)//.days()
  //console.log(startDate)
  // we can check the result in bookings page.
  const handleBooking = () => {
    const currentUser = 1
    const bookingObj = {}
    bookingObj['user_id'] = currentUser
    bookingObj['package_id'] = props.packageID
    bookings.push(bookingObj)
    //console.log(bookings);
    alert(`Package ${props.packageID} added `)
  }
  return (
    <div className='booking-box-container'>
      <div className='booking-info'>
        <h2 className='package-price-box'>${props.price}/day</h2>
        {/* {console.log(this.startDate)} */}
        {/* <h2>Duration: {differenceInDays(startDate, endDate)}</h2> */}
        <DatePickerBar />
        <div className='book-button'>
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
  )
}
