const express = require('express')
const router = express.Router()
// const session = require('express-session')
const bookings = require('../db/queries/bookings')

router.get('/', function (req, res) {
  const userId = req.session['user_id']
  console.log('$$$$$$$$$$', userId)
  bookings.getBookings(userId).then((data) => {
    res.json({ data })
  })
})

// Add Item to the booking table
//**old booking post route ****
// router.post('/:id', function (req, res) {
//   const userId = req.session['user_id']
//   // const userId = 1
//   // const packageItem = 1
//   const packageItem = req.params.id
//   const startDate = '2022-01-18'
//   const endDate = '2022-02-18'

//   console.log('$$$$$$$$$$', userId)
//   console.log('@@@@@@ Package Item@@@@@', packageItem)
//   bookings.addBookings(userId, packageItem, startDate, endDate).then((data) => {
//     res.json({ data })
//   })
// })
router.post('/new', function (req, res) {
  const filterParams = req.body.params

  
  const {package_id, booking_SD, booking_ED} = filterParams

const userId = req.session['user_id']
  console.log(filterParams)

  bookings.addBookings(userId, package_id, booking_SD, booking_ED).then((data) => {
    res.json({ data })
  })
})
module.exports = router

// router.get('/filter', function (req, res) {
  
//   const filterParams = req.query
//   filterPackages(filterParams)
//   // .then(() => console.log('test@@@@@@@'))
//   .then((data) => {
//     res.json({ data })
//   })
  
// })