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
  session({ secret: 'lighthouselab', resave: false, saveUninitialized: true })
)

/**
 * internal modules
 **/
const packagesRoute = require('./routes/packages-api')
const packageRoute = require('./routes/package-api')
const categoriesRoute = require('./routes/categoriesRoute-api')
// TEST
// app.get('/list', (req, res) => {
//   return res.json({ list: ['tshit', 'egg', 'dog'] })
// })

// ROUTS
app.use('/', indexRouter)
app.use('/users', usersRouter)
app.use('/api/packages', packagesRoute)
app.use('/api/package', packageRoute)

app.use('/api/categories', categoriesRoute)

module.exports = app
