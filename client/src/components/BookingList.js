import React from 'react'

// Internal Modules
import BookingListItem from './BookingListItem'
import { packages } from '../mock_data/packages'
import { bookings } from '../mock_data/bookings'

const BookingList = () => {
  // For now to test we consider a user with constat user id:1
  const currentUserId = 1

  //Helper Function to filter packages that their package id is equal to booking Package_id
  const getPackageForBooking = (packageID) => {
    return packages.filter((pack) => pack.id === packageID)
  }

  //Filter to find Bookings that the user_id of that booking is equal to the currentUserId (for ral data cookie session)
  const userBookings = bookings.filter((booking) => {
    return booking.user_id === currentUserId
  })

  // For Each finded booking we'll display individual BookingListItem
  const formattedBookings = userBookings.map((booking) => {
    const currentPackage = getPackageForBooking(booking.package_id)[0]
    return (
      <BookingListItem
        key={currentPackage.id}
        image={currentPackage.image}
        id={currentPackage.id}
        userID={currentPackage.user_id}
        price={currentPackage.price}
        category={currentPackage.category}
        description={currentPackage.description}
      />
    )
  })

  return <div>{formattedBookings}</div>
}

export default BookingList
