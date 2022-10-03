import React from 'react'

/**
 * Internal Modules
 **/
import './styles/BookingListItem.scss'
import Button from './Button'

// Component to display individual Booking Item
const BookingListItem = (props) => {
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
            <div className='cancel-btn'>
              <Button onClick={() => alert('You canceled booking')}>
                Cancel
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BookingListItem
