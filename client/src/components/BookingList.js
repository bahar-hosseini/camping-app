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

  //Function to handle cancel button to remove item from booking dashboard
  const handleCancelBooking = async (id) => {
    // let findIndx = bookings.findIndex((x) => x['id'] === id)
    // setState(false)
    // bookings.splice(findIndx, 1)
    setBookings(bookings.filter((x) => x['id'] !== id))

    // console.log('#####', bookings[0]['id'])
    const cancelItemID = bookings[0]['id']
    try {
      const response = await axios
        .post(`/api/cancel`, JSON.stringify({ id: cancelItemID }), {
          headers: { 'Content-Type': 'application/json' },
          withCredentials: true,
        })
        .then((res) => console.log('this is res', res))
    } catch (err) {
      console.log(err)
    }
  }
  const formattedBookings = bookings.map((booking, index) => {
    // const bookings = getPackageForBooking(booking.package_id)[0]

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
        <h2>My bookings</h2>
        {formattedBookings}
      </div>
    </>
  )
}

export default BookingList
