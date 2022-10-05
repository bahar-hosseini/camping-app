const db = require('../../configs/db.config')
const cancelBooking = (packagetId) => {
  return db
    .query(`DELETE FROM bookings WHERE products.id = $1`, [packagetId])
    .then((data) => {
      return data
    })
}
