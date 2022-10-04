const db = require('../../configs/db.config')

const getPackages = () => {
  return db.query('SELECT * FROM packages;').then((data) => {
    return data
  })
}

module.exports = { getPackages }
