import React, { useState, useEffect, useRef, useContext } from 'react'
import axios from 'axios'
import Button from './Button'
import { searchContext } from '../providers/SearchProvider'
import './styles/Login.scss'

export const Login = (props) => {
  const userRef = useRef()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { setIsLogin } = useContext(searchContext)

  useEffect(() => {
    userRef.current.focus()
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()

    axios
      .post(`/api/login`, JSON.stringify({ email, password }), {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true,
      })
      .then(() => {
        setIsLogin(() => true)
        setEmail('')
        setPassword('')
      })
      .then(() => {
        return props.hideLoginForm()
        // setEmail('')
        // setPassword('')
        // setSuccess(true)
      })
      .catch((err) => {
        console.log(err, 'EMAIL NOT FOUND')
      })
  }

  const ref = useRef()

  const useOutsideClick = (ref, callback) => {
    const handleClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        callback()
      }
    }

    useEffect(() => {
      document.addEventListener('click', handleClick)

      return () => {
        document.removeEventListener('click', handleClick)
      }
    })
  }

  useOutsideClick(ref, () => {
    return props.hideLoginForm()
  })

  return (
    <div className='form-container' ref={ref}>
      <h1>Login</h1>

      <form className='form' onSubmit={handleSubmit}>
        <div>
          <input
            className='input-email'
            ref={userRef}
            onChange={(e) => setEmail(e.target.value)}
            type='email'
            id='inputEmail1'
            placeholder='Enter email'
            name='email'
            value={email}
          />
        </div>
        <div>
          <input
            className='input-password'
            ref={userRef}
            type='password'
            id='inputPassword'
            placeholder='Password'
            name='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className='button-section'>
          <Button className='btn-form' type='submit'>
            Submit
          </Button>
        </div>
      </form>
      {/* <div>{isLogin && <Link to={'/'}>Home page</Link>}</div> */}
    </div>
  )
}

export default Login
