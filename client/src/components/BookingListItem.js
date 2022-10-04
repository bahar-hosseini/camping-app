import React, { useState } from 'react'

/**
 * Internal Modules
 **/
import { bookings } from '../mock_data/bookings'
import './styles/BookingListItem.scss'
import Button from './Button'

// Component to display individual Booking Item
const BookingListItem = (props) => {
  const [state, setState] = useState(true)

  //Function to handle cancel button to remove item from booking dashboard
  const handleCancelBooking = () => {
    let findIndx = bookings.findIndex((x) => x['id'] === props.id)
    setState(false)
    bookings.splice(findIndx, 1)
  }

  if (state) {
    return (
      <div className='booking-item-box'>
        <div className='booking-img'>
          <img src={require(`../assets/${props.image}.png`)} alt='img' />

          <div className='booking-content'>
            <h2>Package category:{props.category}</h2>
            <h3>This will be start date and end date</h3>
            <p>Description: {props.description}</p>
            <div className='booking-btn-price'>
              <div>
                <h3>Price: ${props.price}</h3>
              </div>
              <div>
                <Button className='btn-cancel' onClick={handleCancelBooking}>
                  Cancel
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default BookingListItem
