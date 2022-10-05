const express = require('express')
const router = express.Router()
const {getPackages, filterPackages} = require('../db/queries/packages')

/* GET home page. */


router.get('/filter', function (req, res) {
  const filterParams = req.query
  filterPackages(filterParams).then((data) => {
    res.json({ data })
  })
})


router.get('/:id', function (req, res) {
  let id = req.params.id
  package.getPackage(id).then((data) => {
    res.json({ data })
  })
})

router.get('/', function (req, res) {
  getPackages().then((data) => {
    res.json({ data })
  })
})

module.exports = router



