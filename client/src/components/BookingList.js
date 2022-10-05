import React, { useEffect, useState } from 'react'
import axios from 'axios'

/**
 * Internal Modules
 **/
import BookingListItem from './BookingListItem'
// import { packages } from '../mock_data/packages'
// import { bookings } from '../mock_data/bookings'
import './styles/BookingList.scss'

const BookingList = () => {
  const [bookings, setBookings] = useState([])
  useEffect(() => {
    axios.get('/api/bookings').then((res) => {
      console.log(res.data.data.rows)
      setBookings(res.data.data.rows)
    })
  }, [])

  const formattedBookings = bookings.map((booking, index) => {
    // const bookings = getPackageForBooking(booking.package_id)[0]

    return (
      <BookingListItem
        key={index}
        image={booking.image}
        id={booking.id}
        userID={booking.user_id}
        price={booking.price}
        category={booking.category}
        description={booking.description}
      />
    )
  })

  return (
    <>
      <div className='booking-container'>
        <h2>My bookings</h2>
        {formattedBookings}
      </div>
    </>
  )
}

export default BookingList
