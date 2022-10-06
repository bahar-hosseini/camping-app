const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.status(200).clearCookie('connect.sid', {
    path: '/',
  })
  req.session.destroy(function (err) {
    res.redirect('/')
  })
})

module.exports = router
