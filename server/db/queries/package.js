const db = require('../../configs/db.config')

const getPackage = (packagetId) => {
  return db
    .query(`SELECT * FROM packages WHERE packages.id = $1;`, [packagetId])
    .then((data) => {
      return data.rows
    })
}

module.exports = { getPackage }
