const express = require('express')
const router = express.Router()
const messageQueries = require('../db/queries/user_messages')

//post request to send a new message
router.post('/', (req, res) => {
  const msg = req.body
  const today = new Date().toISOString().slice(0, 10)
  console.log(msg, today)
  const userId = req.session['user_id']
  // //TO DO : Add user id and package id to addmssg function
  messageQueries
    .addMessage(msg, userId, today)
    .then((messages) => {
      res.json({ messages })
    })
    .catch((err) => {
      res.status(500).json({ error: err.message })
    })
})

//get request to message page
router.get('/:id', (req, res) => {
  // const userId = req.session['user_id']
  const msg = req.params.id

  messageQueries
    .getPackageMsg(msg)
    .then((messages) => {
      console.log('test message', messages)
      res.json({ messages })
    })
    .catch((err) => {
      console.error(err)
      res.status(500).json({ error: err })
    })
})

// if (req.session['authorized']) {
//   messageQueries.getAdminProductMsg(userId)
//     .then(messages => {
//       res.json({ messages });
//     })
//     .catch(err => {
//       console.error(err);
//       res
//         .status(500)
//         .json({ error: err.message });
//     });

//   } else {
//     messageQueries.getUserProductMsg(userId)
//       .then(messages => {
//         res.json({ messages });
//       })
//       .catch(err => {
//         console.error(err);
//         res
//           .status(500)
//           .json({ error: err.message });
//       });
//   }
// })

module.exports = router
