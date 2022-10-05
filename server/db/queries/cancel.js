const db = require('../../configs/db.config')
const deleteBooking = (packagetId) => {
  return db
    .query(`DELETE FROM bookings WHERE package_id = $1`, [packagetId])
    .then((data) => {
      return data
    })
}
module.exports = deleteBooking
