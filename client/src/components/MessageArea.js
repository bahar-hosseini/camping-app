// import React, { useState, useEffect } from 'react'

// import axios from 'axios'

const MessageArea = (props) => {
  //console.log(props)
  return (
    <div>
      <h4>user : {props.username}</h4>
      <p> comment: {props.message}</p>
      <p>Date: {props.date.slice(0, 10)}</p>
    </div>
  )
}

export default MessageArea
