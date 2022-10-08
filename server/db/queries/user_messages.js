const db = require('../../configs/db.config')

// //Query to show all messages
const getPackageMsg = (id) => {
  return db
    .query(
      `SELECT messages.*, users.name AS name
   FROM messages
   JOIN users ON users.id = user_id
  WHERE package_id=$1;`,
      [id]
    )
    .then((data) => {
      return data.rows
    })
}

// //Query to add a new message
const addMessage = function (msg, userId, today) {
  return db
    .query(
      `INSERT INTO
        messages(message,user_id,package_id,date_sent)
        VALUES($1,$2,$3,$4)
        RETURNING *;`,
      [msg.message, userId, msg.id, today]
    )
    .then((result) => {
      console.log(result.rows[0])
      return result.rows[0]
    })
    .catch((err) => {
      console.log(err.message)
    })
}

module.exports = { getPackageMsg, addMessage }
