const db = require('../../configs/db.config')

const getPackages = () => {
  return db.query('SELECT * FROM packages;').then((data) => {
    return data.rows
  })
}

module.exports = { getPackages }
