import React, { useState } from 'react'
import './styles/MessageBox.scss'
import axios from 'axios'
import { formatDistanceStrict, format } from 'date-fns'
import Button from './Button'
import { searchContext } from '../providers/SearchProvider'
import { useContext } from 'react'
import SendIcon from '../assets/send.svg'

export function MessageBox(props) {
  const { startDate, endDate, isLogin } = useContext(searchContext)
  const [messageStatus, setMessageStatus] = useState(false)

  const handleMessage = () => {
    setMessageStatus(true)
  }

  return (
    <>
      {/* <div className="message-box-column">
        <div className="message-box-container">
          <textarea
            className="message-text-area"
            placeholder="Message "
            name="message"
            // rows="6"
            // cols="35"
          ></textarea>{" "}
        </div>
        {!isLogin && (
          <div className="message-button">
            <Button className="btn-book-disabled">Please Log In</Button>
          </div>
        )}
        {isLogin && (
          <div className="message-button">
            {!bookingCreated ? (
              <Button className="btn-message">
              <img src={SendIcon} alt="send" width="30px"></img>
              </Button>
            ) : (
              <Button className="btn-message">
                <div className="spin" />
                Sending
              </Button>
            )}
          </div>
        )}
      </div> */}
      {/* LOGGED IN */}
      {isLogin && (
        <div className='message-box-column'>
          <div className='message-box-container'>
            <input type='text' name='from_name' />
            <label>Email to:</label>
            <input type='email' name='email' />
            <textarea
              className='message-text-area'
              placeholder='Message '
              name='message'
              // rows="6"
              // cols="35"
            ></textarea>{' '}
          </div>
          <div className='message-button'>
            <Button className='btn-message'>
              <img src={SendIcon} alt='send' width='30px'></img>
            </Button>
          </div>
        </div>
      )}
      {/* NOT LOGGED IN */}
      {!isLogin && (
        <div className='message-box-column'>
          <div className='message-box-container'>
            <h3>Log In to Continue</h3>
          </div>
        </div>
      )}
    </>
  )
}

// {isLogin && (
//   <div className="message-box-column">
//     <div className="message-box-container">
//       <textarea
//         className="message-text-area"
//         placeholder="Message "
//         name="message"
//         // rows="6"
//         // cols="35"
//       ></textarea>{" "}
//     </div>
//     <div className="message-button">
//       <Button className="btn-message">
//         <img src={SendIcon} alt="send" width="30px"></img>
//       </Button>
//     </div>
//   </div>
// )}
// {/* NOT LOGGED IN */}
// {!isLogin && (
//   <div className="message-box-column">
//     <div className="message-box-container">
//       <h3>Log In to Continue</h3>
//     </div>
//   </div>
// )}
