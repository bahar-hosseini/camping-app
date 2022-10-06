import React from 'react'
import axios from 'axios'

const Logout = () => {
  const handlelogOut = () => {
    axios.get('/api/logout').then((res) => {
      console.log('LOOOOGOUUUUUT', res)
    })
  }

  return (
    <div>
      <p>Logout</p>
      <button onClick={handlelogOut}>logout</button>
    </div>
  )
}

export default Logout
