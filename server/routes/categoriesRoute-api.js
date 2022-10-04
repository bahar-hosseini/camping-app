const express = require('express')
const router = express.Router()
const getCategories = require('../db/queries/getCategories')

router.get('/:category', function (req, res) {
  let category = req.params.category
  getCategories.getPackageForCategory(category).then((data) => {
    res.json({ data })
  })
})

module.exports = router
