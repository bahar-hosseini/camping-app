import React, { useState, useEffect, useRef } from 'react'
import axios from 'axios'
import MessageArea from './MessageArea'
import emailjs from 'emailjs-com'

const Message = (props) => {
  const [message, setMessage] = useState('')
  const [text, setText] = useState([])
  const [isSubmit, setIsSubmit] = useState(false)

  const form = useRef()

  const handleSubmit = (e) => {
    e.preventDefault()

    const resetStates = () => {
      setMessage('')
    }

    axios
      .post(`/api/message`, JSON.stringify({ message, id: props.packageID }), {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true,
      })
      .then(() => {
        isSubmit ? setIsSubmit(false) : setIsSubmit(true)
        resetStates()
      })
      .catch((err) => {
        console.log(err, 'Message is not sent')
      })
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
      <h2>Comment</h2>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input type='text' name='from_name' />
        <label>Email to:</label>
        <input type='email' name='email' />
        {/* <label for='reply_to'>reply_to</label>
        <input type='text' name='reply_to' id='reply_to' /> */}
        <label>Message</label>
        <textarea
          placeholder='Message '
          name='message'
          rows='8'
          cols='80'
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        <button type='submit ' name='button '>
          Send
        </button>
      </form>
      <div>{textArea}</div>
    </>
  )
}

export default Message
