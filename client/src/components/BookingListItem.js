import React from 'react'

// Component to display individual Booking Item
const BookingListItem = (props) => {
  return (
    <div>
      <img
        src={require(`../assets/${props.image}.png`)}
        alt='img'
        width='200px'
      />
      <br />
      <h2>Package category:{props.category}</h2>
      <h3>This will be start date and end date</h3>
      <p>Description: {props.description}</p>
      <h3>Price: ${props.price}</h3>
      <div>
        <button>Cancel</button>
      </div>
      <br />
    </div>
  )
}

export default BookingListItem
