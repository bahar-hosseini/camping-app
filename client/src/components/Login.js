import React from 'react'

const Login = () => {
  return (
    <div>
      <h1>Login</h1>

      <form>
        <div>
          <label for='inputEmail1'>Email address</label>
          <input type='email' id='inputEmail1' placeholder='Enter email' />
        </div>
        <div>
          <label for='inputPassword'>Password</label>
          <input type='password' id='inputPassword' placeholder='Password' />
        </div>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default Login
