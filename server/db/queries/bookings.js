const db = require('../../configs/db.config')

const getBookings = (userId) => {
  return db
    .query(
      `SELECT bookings.*, packages.* FROM bookings
      JOIN packages ON packages.id = package_id WHERE bookings.user_id =$1 ;`,
      [userId]
    )
    .then((data) => {
      return data
    })
}

module.exports = { getBookings }
