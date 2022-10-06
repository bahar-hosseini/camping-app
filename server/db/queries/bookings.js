const db = require('../../configs/db.config')

const getBookings = (userId) => {
  return db
    .query(
      `SELECT bookings.id AS booking_id,
              bookings.package_id,
              bookings.user_id AS renter_id,
              bookings.start_date,
              bookings.end_date,
              packages.*
       FROM bookings
       JOIN packages
       ON packages.id = package_id
       WHERE bookings.user_id =$1;`,
      [userId]
    )
    .then((data) => {
      // this .then is not neccesary I'm just scared to delete it
      return data
    })
}
const addBookings = (userId, packageItem, startDate, endDate) => {
  return db
    .query(
      `INSERT INTO bookings(
        user_id,
        package_id,
        start_date,
        end_date
        )
      VALUES( $1 ,$2, $3, $4)
      RETURNING *;
      `,
      [userId, packageItem, startDate, endDate]
    )
    .then((data) => {
      return data
    })
}

module.exports = { getBookings, addBookings }
