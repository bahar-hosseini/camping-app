const express = require('express')
const router = express.Router()
const {
  getPackages,
  filterPackages,
  getPackage,
} = require('../db/queries/packages')

/* GET home page. */
router.get('/', function (req, res) {
  const eachQuery = req.query.offset
  console.log('EEEEEEEE', eachQuery)
  getPackages(eachQuery).then((data) => {
    res.json({ data })
  })
})

// DELETE ONCE SCROLL LOADING IS WORKING
// router.get('/', function (req, res) {
//   const limit = req.query.limit
//   const packageCount = req.query.loadedPackages
//   console.log('EEEEEEEE', limit)
//   console.log('OOOOOO', packageCount)
//   getPackages(limit, packageCount).then((data) => {
//     res.json({ data })
//   })
// })

router.get('/filter', function (req, res) {
  const filterParams = req.query
  filterPackages(filterParams)
    // .then(() => console.log('test@@@@@@@'))
    .then((data) => {
      res.json({ data })
    })
})

router.get('/:id', function (req, res) {
  let id = req.params.id
  getPackage(id).then((data) => {
    res.json({ data })
  })
})

module.exports = router
