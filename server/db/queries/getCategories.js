const db = require('../../configs/db.config')

const getPackageForCategory = (categoryID) => {
  return db
    .query(`SELECT * FROM packages WHERE packages.category = $1;`, [categoryID])
    .then((data) => {
      return data
    })
}

module.exports = { getPackageForCategory }
