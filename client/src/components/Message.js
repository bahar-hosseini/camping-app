import React, { useState, useEffect } from 'react'
import axios from 'axios'
import MessageArea from './MessageArea'

const Message = (props) => {
  const [message, setMessage] = useState('')
  const [text, setText] = useState([])
  const [isSubmit, setIsSubmit] = useState(false)

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
