/**
 * Internal Modules
 **/
import { bookings } from '../mock_data/bookings'

export function BookingBox(props) {
  //  Handle button function: when we click on that button we are adding a new booking for that user (for now user 1)
  // we can check the result in bookings page.
  const handleBooking = () => {
    const currentUser = 1
    const bookingObj = {}
    bookingObj['user_id'] = currentUser
    bookingObj['package_id'] = props.packageID
    bookings.push(bookingObj)
    console.log(bookings)
    alert("Package's added ")
  }

  return (
    <div>
      <ul>
        {/* pass price down as a prop */}
        <li>Price:{props.price}</li>
        <li>Booking tool stuff (start date end date party size)</li>
        <button onClick={handleBooking}>BOOK</button>
      </ul>
    </div>
  )
}
