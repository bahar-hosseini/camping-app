const express = require('express')
const router = express.Router()
const package = require('../db/queries/package')

router.get('/:id', function (req, res) {
  let id = req.params.id
  package.getPackage(id).then((data) => {
    res.json({ data })
  })
})

module.exports = router
