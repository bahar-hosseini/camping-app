const express = require('express')
const router = express.Router()
const cancelBooking = require('../db/queries/cancel.js')

router.post('/', (req, res) => {
  const itemID = req.body.id

  cancelBooking(itemID).then((data) => {
    res.json({ data })
  })
  // cancelBooking(itemID);
})

module.exports = router
