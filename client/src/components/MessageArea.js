// import React, { useState, useEffect } from 'react'
import "./styles/BookingBox.scss";
// import axios from 'axios'
import { searchContext } from "../providers/SearchProvider";
import { useContext,useState } from "react";
import Button from "./Button";
const MessageArea = (props) => {
  const { startDate, endDate, isLogin } = useContext(searchContext);
  const [bookingCreated, setBookingCreated] = useState(false);

  //console.log(props)
  return (
    <>
    <div className="price-section">
          <div className="price-row">
            <div>Your Message</div>
            
          </div>
        
          <div className="price-row" border="0px">
            <div>
            <input type="text" id="Name" name="Name" />
            </div>
           
          </div>
        </div>
        {!isLogin && (
          <div className="book-button">
            <Button className="btn-book-disabled">
              Send Message
            </Button>
          </div>
        )}
        {isLogin && (
          <div className="book-button">
            {!bookingCreated ? (
              <Button onClick={"todo:input unction here"} className="btn-book">
                Book
              </Button>
            ) : (
              <Button className="btn-book">
                <div className="spin" />
                Working
              </Button>
              )}
              </div>
            )}
            
      
        
            </>
      );
    }
export default MessageArea

// const MessageArea = (props) => {
//   //console.log(props)
//   return (
//     <div>
//       <h4>user : {props.username}</h4>
//       <p> comment: {props.message}</p>
//       <p>Date: {props.date.slice(0, 10)}</p>
//     </div>
//   )
// }

// export default MessageArea
