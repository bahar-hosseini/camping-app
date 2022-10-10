const db = require('../../configs/db.config')

const getPackage = (packagetId) => {
  return db
    .query(
      `SELECT *,users.name AS name FROM packages 
    JOIN users ON users.id = user_id WHERE packages.id = $1;`,
      [packagetId]
    )
    .then((data) => {
      return data.rows
    })
}

module.exports = { getPackage }
