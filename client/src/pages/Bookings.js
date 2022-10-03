// import { useParams } from "react-router-dom";
import { packages } from '../mock_data/packages'
import { users } from '../mock_data/users'
import { bookings } from '../mock_data/bookings'
import bookingImg from '../assets/booking_page.png'

export function Bookings() {
  // const currentPackage = packages.filter((pack) => pack.id === Number(id));
  // console.log(currentPackage);

  const currentUserId = 1

  // console.log(bookings)
  const getPackageForBooking = (packageID) => {
    return packages.filter((pack) => pack.id == packageID)
  }
  // console.log(packages)
  // console.log(getPackageForBooking(2))

  const userBookings = bookings.filter((x) => {
    return x.user_id === currentUserId
  })

  const formattedBookings = userBookings.map((booking) => {
    const currentPackage = getPackageForBooking(booking.package_id)[0]
    //console.log('AHHHH', currentPackage)
    return (
      <div>
        <img src={bookingImg} alt='img' width='200px' />
        <br />
        <h2>Package category:{currentPackage.category}</h2>
        <h3>This will be start date and end date</h3>
        <p>Description: {currentPackage.description}</p>
        <h3>Price: ${currentPackage.price}</h3>
        <div>
          <button>Cancel</button>
        </div>
        <br />
      </div>
    )
  })
  // console.log('------------>',userBooking)
  return (
    <div>
      <h1>Bookings for user</h1>
      <div>{formattedBookings}</div>
    </div>
  )
}
