const express = require('express')
const router = express.Router()
const getCategories = require('../db/queries/getCategories')

router.post('/delete', (req, res) => {
  getCategories.getPackageForCategory(category).then((data) => {
    res.json({ data })
  })
})

module.exports = router
