import React, { useState } from 'react'
import { Link } from 'react-router-dom'
// import bookingImg from '../assets/booking_imgs/booking_02.png'

/**
 * Internal Modules
 **/
import './styles/BookingListItem.scss'
import { formatDateTitles } from '../helpers/formatDateTitles'
import Button from './Button'
// import axios from 'axios'

// Component to display individual Booking Item
const BookingListItem = (props) => {
  const [buttonMode, setButtonMode] = useState('DEFAULT')

  const clickedButton = async (id) => {
    setButtonMode('LOADING')
    setTimeout(() => {
      props.sendFunc(id).then(() => {
        setButtonMode('DEFAULT')
      })
    }, 1000)
  }

  const redirectToPackage = () => {
    return (window.location = `/package/${props.package_id}`)
  }

  return (
    <div className='booking-item-box'>
      <Link to={'/package/' + props.package_id}>
        <img
          src={require(`../assets/booking_imgs/${props.booking_img}.png`)}
          alt='img'
          className='booking-img'
          height='175px'
          // onClick={redirectToPackage}
        />
      </Link>
      <div className='booking-content'>
        <div className='top-section'>
          <h2>{formatDateTitles(props.category)} Person Package</h2>
          <h2 className='start-end-date'>
            {props.start_date} - {props.end_date}
          </h2>
          {props.duration} Days
        </div>
        <div className='booking-btn-price'>
          <h2 className='booking-price'>${props.price * props.duration}</h2>
          <div>
            {/* <Button
              className="btn-cancel"
              onClick={() => clickedButton()}
            >
              Cancel Booking
            </Button> */}
            {buttonMode === 'DEFAULT' && (
              <Button
                className='btn-cancel'
                onClick={() => clickedButton(props.id)}
              >
                Cancel Booking
              </Button>
            )}
            {buttonMode === 'LOADING' && (
              <Button className='btn-cancel-clicked'>
                <div className='spin' />
                Deleting
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default BookingListItem
