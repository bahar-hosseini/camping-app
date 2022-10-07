const db = require('../../configs/db.config')
const deleteBooking = (bookingId) => {
  const query = `
  DELETE FROM bookings
  WHERE id = $1
  ;`

  const args = [bookingId]

  return db.query(query, args).then((data) => {
    // console.log(data);
    // console.log('we deleted it');
    // return data.rows;
  })

  // return db
  //   .query(`DELETE FROM bookings WHERE package_id = $1;`, [packagetId])
  //   .then((data) => {
  //     return data
  //   })
}
module.exports = deleteBooking
