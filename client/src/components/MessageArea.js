import React, { useState, useEffect, useContext } from 'react'
import { searchContext } from '../providers/SearchProvider'

import axios from 'axios'

const MessageArea = (props) => {
  const { message } = useContext(searchContext)
  const [text, setText] = useState([])

  useEffect(() => {
    axios.get(`/api/message/${props.packageID}`).then((res) => {
      setText(res.data.messages)
    })
  }, [props.test])

  return (
    <>
      {text.map((t) => (
        <div>
          <p>
            {t.message}
            <p>{t.date_sent.slice(0, 10)}</p>
          </p>
        </div>
      ))}
    </>
  )
}

export default MessageArea
