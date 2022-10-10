import React, { useState, useEffect, useRef, useContext } from 'react'
import axios from 'axios'
import MessageArea from './MessageArea'
import emailjs from 'emailjs-com'
import SendIcon from '../assets/send.svg'
import Button from './Button'
import { searchContext } from '../providers/SearchProvider'

const Message = (props) => {
  const [message, setMessage] = useState('')
  const [text, setText] = useState([])
  const [isSubmit, setIsSubmit] = useState(false)
  const [boxState, setBoxState] = useState('READY'); // state that controls if the box says message sent or not

  const { startDate, endDate, isLogin } = useContext(searchContext)
  const [messageStatus, setMessageStatus] = useState(false)
  const handleMessage = () => {
    setMessageStatus(true)
  }

  console.log('_____>', props)
  const form = useRef()

  const handleSubmit = (e) => {
    console.log('test is this work')
    e.preventDefault()

    const resetStates = () => {
      setMessage('')
    }
    setBoxState('SENDING');
    axios
      .post(`/api/message`, JSON.stringify({ message, id: props.packageID }), {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      })
      .then(() => {
        isSubmit ? setIsSubmit(false) : setIsSubmit(true);
        setTimeout(() => {
          setBoxState("SENT");
          resetStates();
        }, 1000);
      })
      .then(() => {
        setTimeout(() => {
          setBoxState("READY");
        }, 2000);
      })
      .catch((err) => {
        console.log(err, "Message is not sent");
      });
    //////////////////////// Email sent via EmailJS.com ///////////////////////////////
    emailjs
      .sendForm(
        'service_rspyy2a',
        'template_a3rw924',
        e.target,
        'jBCq6m7BSsXzpT4su'
      )
      .then(
        (result) => {
          // window.location.reload()
        },
        (error) => {
          console.log(error.text)
        }
      )
    e.target.reset()
  }

  useEffect(() => {
    axios.get(`/api/message/${props.packageID}`).then((res) => {
      setText(res.data.messages)
    })
  }, [isSubmit])

  const textArea = text.map((t, index) => {
    return (
      <MessageArea
        key={index}
        date={t.date_sent}
        message={t.message}
        username={t.name}
      />
    )
  })
  return (
    <>
      {/* LOGGED IN and READY */}
      {(isLogin && boxState === 'READY') && (
        <form onSubmit={handleSubmit}>
          <div className='message-box-column'>
            <div className='message-box-container'>
              {/* <input hidden type='text' name='from_name'/> */}
              {/* <label>Email to:</label> */}
              <input
                hidden
                type='email'
                name='email'
                defaultValue={props.packageOwner}
              />
              <textarea
                className='message-text-area'
                placeholder='Message '
                name='message'
                // rows="6"
                // cols="35"
              ></textarea>{' '}
            </div>
            <div className='message-button'>
              <Button className='btn-message' type='submit ' name='button '>
                <img src={SendIcon} alt='send' width='30px'></img>
              </Button>
              {/* <button type='submit ' name='button '>
                Send
              </button> */}
            </div>
          </div>
        </form>
      )}
      {/* LOGGED IN and SENDING */}
      {(isLogin && boxState === 'SENDING') && (
        <form onSubmit={handleSubmit}>
          <div className='message-box-column'>
            <div className='message-box-container'>
           
            <div className="loading-spin" />
            
            </div>
          </div>
        </form>
      )}
      {/* LOGGED IN and SENDING */}
      {(isLogin && boxState === 'SENT') && (
        <form onSubmit={handleSubmit}>
          <div className='message-box-column'>
            <div className='message-box-container'>
            <h3>Your message has been sent!</h3>
            </div>
          </div>
        </form>
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

    // <>
    //   <h2>Comment</h2>
    //   <form onSubmit={handleSubmit}>
    //     <label>Name</label>
    //     <input type='text' name='from_name' />
    //     <label>Email to:</label>
    //     <input type='email' name='email' />
    //     {/* <label for='reply_to'>reply_to</label>
    //     <input type='text' name='reply_to' id='reply_to' /> */}
    //     <label>Message</label>
    //     <textarea
    //       placeholder='Message '
    //       name='message'
    //       rows='8'
    //       cols='80'
    //       onChange={(e) => setMessage(e.target.value)}
    //     ></textarea>
    //     <button type='submit ' name='button '>
    //       Send
    //     </button>
    //   </form>
    //   <div>{textArea}</div>
    // </>
  )
}

export default Message
