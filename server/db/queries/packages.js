const db = require("../../configs/db.config");
const { param } = require("../../routes");

const getPackages = () => {
  return db.query("SELECT * FROM packages;").then((data) => {
    return data;
  });
};

const filterPackages = (params) => {
  const currentTime = new Date();

  // const query = `SELECT * FROM packages JOIN bookings ON packages.id=bookings.package_id`;
  let query = `SELECT * FROM packages `;
//if(params.category === 0 & startDate =) {

// }


  if (params.category > 0) {
    query += ` WHERE packages.category = ${params.category} `
    // query += ` WHERE category = 1 `
  } 

  // let start = ` WHERE bookings.start_date > ${params.startDate} `;

  // let end;

  // if (params.endDate > currentTime) {
  //   end = `AND end_date< ${params.endDate}`;
  // } else {
  //   end = "";
  // }


  
  // console.log( params.category,"@@@@@@@@@@@@@@@@")
  // console.log(typeof category,"@@@@@@@@@@@@@@@@")
  // const query = `SELECT * FROM packages JOIN bookings ON packages.id=bookings.package_id $1 $2 $3;`;
  // const args = [start, end, category];
 
  
  //SELECT * FROM packages JOIN bookings ON packages.id=bookings.package_id WHERE category = ${params.category}
  // console.log(category,"@@@@@@")
  
  // [startFilter(), endFilter(params.endDate), categoryFilter(params.category)]
  return db
    .query(query)
    // .then((data) => {
    //   console.log(data.rows)
    // })
    .then((data) => {
      return data.rows;
    })
    .catch((err) => console.log(err));
};

module.exports = { getPackages, filterPackages };
