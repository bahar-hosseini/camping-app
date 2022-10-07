import React, { useContext } from 'react'
import { searchContext } from '../providers/SearchProvider'
import axios from 'axios'

const Logout = () => {
  // const { isLogin, setIsLogin } = useContext(searchContext)
  // console.log('EEEEEEEE', isLogin)

  const handlelogOut = () => {
    axios
      .get('/api/logout')
      .then((res) => {
        // console.log('LOOOOGOUUUUUT', res)
      })
      .then(() => {
        // setIsLogin(() => false)
        // console.log('EEEEEEEE', isLogin)
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
