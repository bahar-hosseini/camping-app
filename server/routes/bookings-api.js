const express = require('express')
const router = express.Router()
const session = require('express-session')
const bookings = require('../db/queries/bookings')

router.get('/', function (req, res) {
  const userId = req.session['user_id']

  bookings.getBookings(userId).then((data) => {
    res.json({ data })
  })
})

module.exports = router
