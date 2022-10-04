const express = require('express')
const router = express.Router()
const packages = require('../db/queries/packages')

/* GET home page. */
router.get('/', function (req, res) {
  packages.getPackages().then((data) => {
    res.json({ data })
  })
})

module.exports = router
