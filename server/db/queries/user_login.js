const db = require('../../configs/db.config')

// Query the information for a single user based on its ID
const getUser = (email) => {
  return db
    .query(
      `SELECT * FROM users
   WHERE users.email ILIKE $1;`,
      [email]
    )
    .then((data) => {
      console.log('________>', data.rows)
      return data.rows[0]
    })
}

module.exports = { getUser }
