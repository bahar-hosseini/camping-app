import React, { useEffect, useState } from 'react'
import axios from 'axios'

/**
 * Internal Modules
 **/
import BookingListItem from './BookingListItem'
import './styles/BookingList.scss'

const BookingList = () => {
  const [bookings, setBookings] = useState([])
  console.log(bookings)

  useEffect(() => {
    axios.get('/api/bookings').then((res) => {
      // console.log(res.data.data.rows);
      setBookings(res.data.data.rows)
    })
  }, [])

  //Function to handle cancel button to remove item from booking dashboard
  const handleCancelBooking = async (id) => {
    try {
      await axios
        .post(`/api/cancel`, JSON.stringify({ id }), {
          headers: { 'Content-Type': 'application/json' },
          withCredentials: true,
        })
        .then(
          axios.get('/api/bookings').then((res) => {
            return setBookings(res.data.data.rows)
          })
        )
    } catch (err) {
      console.log(err)
    }
  }
  const formattedBookings = bookings.map((booking, index) => {
    return (
      <BookingListItem
        key={index}
        booking_img={booking.booking_img}
        id={booking.id}
        userID={booking.user_id}
        price={booking.price}
        category={booking.category}
        description={booking.description}
        test={setBookings}
        sendFunc={handleCancelBooking}
      />
    )
  })

  return (
    <>
      <div className='booking-container'>
        <h2>My Bookings</h2>
        {bookings.length === 0 ? (
          <h2>You have no bookings!</h2>
        ) : (
          formattedBookings
        )}
        {/* {formattedBookings} */}
      </div>
    </>
  )
}

export default BookingList
