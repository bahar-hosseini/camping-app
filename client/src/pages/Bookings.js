import BookingList from "../components/BookingList";
import "../components/styles/BookingList.scss";
import { searchContext } from "../providers/SearchProvider";
import { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";

export function Bookings() {
  const { isLogin } = useContext(searchContext);

  useEffect(() => {
    async function checkLogin() {
      await isLogin;
    }
    checkLogin();
  }, [isLogin]);

  return (
    <>
      {isLogin ? (
        <div className="BookingList">
          <BookingList />
        </div>
      ) : (
        <>
          <h1>Please Login</h1>
        </>
      )}
    </>
  );
}
