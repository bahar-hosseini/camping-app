const db = require("../../configs/db.config");
const deleteBooking = (packageId) => {
  const query = `
  DELETE FROM bookings
  WHERE package_id = $1
  ;`;

  const args = [packageId];

  return db.query(query, args).then((data) => {
    // console.log(data);
    // console.log('we deleted it');
    // return data.rows;
  });

  // return db
  //   .query(`DELETE FROM bookings WHERE package_id = $1;`, [packagetId])
  //   .then((data) => {
  //     return data
  //   })
};
module.exports = deleteBooking;

// const getStoryAuthor = (authorID) => {
//   const query = `
//   SELECT users.name AS story_author,
//          stories.title AS story_title
//   FROM stories
//   JOIN users
//     ON users.id = stories.user_id
//   WHERE user_id = $1
//   ;`;

//   const args = [authorID];

//   return db.query(query, args).then((data) => {
//     return data.rows;
//   });
// };
