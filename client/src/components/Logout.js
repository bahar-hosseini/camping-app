import React, { useContext } from 'react'
import { searchContext } from '../providers/SearchProvider'
import axios from 'axios'

const Logout = () => {
  const { setIsLogin } = useContext(searchContext)
  const handlelogOut = () => {
    axios.get('/api/logout').then(() => {
      setIsLogin(() => false)
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
