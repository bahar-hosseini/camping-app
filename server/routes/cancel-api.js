const express = require('express')
const router = express.Router()
const cancelBooking = require('../db/queries/cancel.js')

router.post('/', (req, res) => {
  const test = req.body.id
  console.log(test)
  cancelBooking(test).then((data) => {
    res.json({ data })
  })
})

module.exports = router
