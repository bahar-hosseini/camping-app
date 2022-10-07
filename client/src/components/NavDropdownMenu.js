import { Link } from 'react-router-dom'
import React, { useRef, useState, useContext } from 'react'
import './styles/Nav.scss'
import { searchContext } from '../providers/SearchProvider'
import axios from 'axios'

export function NavDropdownMenu() {
  // 1. conditionally show different menus depending on if you're logged in or note
  // 2. new logout button in dropdown should log user our on click

  /* <Link to="/package">Package </Link>
     <Link to="/bookings">Bookings</Link> */
  const [click, setClick] = useState(false)
  const { isLogin, setIsLogin } = useContext(searchContext)


  const handleLogout = () => {
    axios.get('/api/logout').then(() => {
      return setIsLogin(() => false)
      // console.log('EEEEEEEE', isLogin)
    })
  }

  const handleClick = () => setClick(!click)

  const MenuItems = [
    {
      title: 'Login',
      path: '/login',
      cName: 'dropdown-link',
    },
  ]
  const MenuItemsLoggedIn = [
    {
      title: 'My Bookings',
      path: '/bookings',
      cName: 'dropdown-link',
    },
    {
      title: 'Logout', // this should be logout if you're logged in, just click and erase the cookie
      path: '/',
      cName: 'dropdown-link',
      clickFunc: handleLogout
    },
  ]
  return (
    <ul
      onClick={handleClick}
      className={click ? 'dropdown-menu clicked' : 'nav-drop-down'}
    >
      {isLogin
        ? MenuItemsLoggedIn.map((item, index) => {
            return (
              <li key={index} onClick={item.clickFunc}>
                <Link
                  className={item.cName}
                  to={item.path}
                  // onClick={() => setClick(false)}
                >
                  {item.title}
                </Link>
              </li>
            )
          })
        : MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <Link
                  className={item.cName}
                  to={item.path}
                  // onClick={() => setClick(false)}
                >
                  {item.title}
                </Link>
              </li>
            )
          })}
    </ul>
  )
}

/////////////////////////////////////

////////////////////////////////////////

// {/* <select name="NavDropdownLoggedOut" id="NavDropdownLoggedOut">
//         <option value="Signup">Sign up</option>
//         <option value="Login">Log in</option>
//         <option value="HostYourHome">Host Your Equipment</option>
//       </select> */}

//       <select name="NavDropdownLoggedIn" id="NavDropdownLoggedIn">
//         <option value="Messages">Messages</option>
//         <option value="Notification">Notification</option>
//         <option value="Bookings">Bookings</option>
//         <option value="User Dashboard">User Dashboard</option>
//         <option value="LogOut">Log Out</option>
//         <option value="Referafriend ">Refer a friend </option>
//       </select>
//     </>
