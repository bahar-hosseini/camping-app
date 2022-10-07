const express = require('express')
const router = express.Router()
const session = require('express-session')

express().use(
  session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true,
  })
)

const queryUser = require('../db/queries/user_login')

//Post Login
router.post('/', (req, res) => {
  const { email, password } = req.body

  console.log('email', email)
  queryUser
    .getUser(email)
    //for now Just works with our db data!!
    .then((response) => {
      // console.log('you are getting to this point', response)
      req.session['user_id'] = response.id
      // req.session.save()

      if (response) {
        req.session['is_loged_in'] = true
      }

      res.redirect('/api/bookings')
      // if (response.is_admin) {
      //   req.session['authorized'] = true
      // res.redirect('/home')
      // } else {
      //   req.session['authorized'] = false
      //   // res.redirect('/home')
      // }
    })
    .catch((err) => {
      res.status(500).json({ error: err.message })
    })
})

router.get('/', (req, res) => {
  if (req.session['is_loged_in']) {
    // console.log('loged in', res)

    res.redirect('/')
  } else {
    console.log('nuh')
  }
})

module.exports = router
