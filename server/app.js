const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const indexRouter = require('./routes/index')
const usersRouter = require('./routes/users')
const app = express()
const session = require('express-session')
const packages = require('./db/mockData/packages.js')

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))
app.use(
  session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true,
  })
)

/**
 * internal modules
 **/
// const packagesRoute = require('./routes/packages-api')
const packagesRouter = require('./routes/packages-api')
// const packageRoute = require('./routes/package-api')
const loginApiRoute = require('./routes/login-api')
const logoutRoutes = require('./routes/logout')
const bookingsRoute = require('./routes/bookings-api')
const categoriesRoute = require('./routes/categoriesRoute-api')
const cancelApiRoutes = require('./routes/cancel-api')

// TEST
// app.get('/list', (req, res) => {
//   return res.json({ list: ['tshit', 'egg', 'dog'] })
// })

// ROUTS
app.use('/', indexRouter)
app.use('/users', usersRouter)
app.use('/api/packages', packagesRouter)
// app.use('/api/package', packageRoute)
//todo: make packages a single route
app.use('/api/bookings', bookingsRoute)
app.use('/api/login', loginApiRoute)
app.use('/api/logout', logoutRoutes)
app.use('/api/cancel', cancelApiRoutes)
app.use('/api/categories', categoriesRoute)
app.use('/api/message', messageApiRoute)

module.exports = app
