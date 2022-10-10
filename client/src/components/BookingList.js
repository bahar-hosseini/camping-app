import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { format, parseISO } from 'date-fns'
/**
 * Internal Modules
 **/
import BookingListItem from './BookingListItem'
import './styles/BookingList.scss'
import { useSearch } from '../providers/SearchProvider'

const BookingList = () => {
  const [bookings, setBookings] = useState([])
  const { rangeToDays } = useSearch()
  // const [buttonMode, setButtonMode] = useState("DEFAULT");
  useEffect(() => {
    axios.get('/api/bookings').then((res) => {
      setBookings(res.data.data.rows)
    })
  }, [])
  //Function to handle cancel button to remove item from booking dashboard
  const handleCancelBooking = async (id) => {
    axios
      .post(`/api/cancel`, JSON.stringify({ id }), {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true,
      })
      .then((res) => {
        axios.get('/api/bookings').then((res) => {
          return setBookings(res.data.data.rows)
        })
      })
    // try {
    //   await axios
    //     .post(`/api/cancel`, JSON.stringify({ id }), {
    //       headers: { "Content-Type": "application/json" },
    //       withCredentials: true,
    //     })
    //     .then(
    //       axios.get("/api/bookings").then((res) => {
    //         return setBookings(res.data.data.rows);
    //       })
    //     );
    // } catch (err) {
    //   console.log(err);
    // }
  }
  const formattedBookings = bookings.map((booking, index) => {
    const start_date = parseISO(booking.start_date)
    const end_date = parseISO(booking.end_date)

    const start_dateFormatted = format(start_date, 'd MMMM yyyy')
    const end_dateFormatted = format(end_date, 'd MMMM yyyy')

    const duration = rangeToDays(start_date, end_date)
    return (
      <BookingListItem
        key={index}
        booking_img={booking.booking_img}
        id={booking.booking_id}
        package_id={booking.package_id}
        userID={booking.user_id}
        price={booking.price}
        category={booking.category}
        description={booking.description}
        test={setBookings}
        sendFunc={handleCancelBooking}
        start_date={start_dateFormatted}
        end_date={end_dateFormatted}
        duration={duration}
        // buttonModeSetter={setButtonMode}
        // currentButtonMode={buttonMode}
      />
    )
  })

  return (
    <>
      {/* {window.scrollTo(0, 0)} */}
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
