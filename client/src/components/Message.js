import React, { useState } from 'react'
import axios from 'axios'
import MessageArea from './MessageArea'

const Message = (props) => {
  const [message, setMessage] = useState('')

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
        console.log('is it pos')
        resetStates()
      })
      .catch((err) => {
        console.log(err, 'Message is not sent')
      })
  }

  return (
    <>
      <h2>Comment</h2>
      <form onSubmit={handleSubmit}>
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
      <MessageArea test={handleSubmit} />
    </>
  )
}

export default Message
