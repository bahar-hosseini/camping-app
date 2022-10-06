const db = require("../../configs/db.config");
const { param } = require("../../routes");

const getPackages = () => {
  return db.query("SELECT * FROM packages;").then((data) => {
    return data;
  });
};

const getPackage = (packagetId) => {
  return db
    .query(`SELECT * FROM packages WHERE packages.id = $1;`, [packagetId])
    .then((data) => {
      return data;
    });
};

//SELECT * FROM packages JOIN bookings ON packages.id=bookings.package_id

const filterPackages = (params) => {
  const today = new Date();
  let tomorrow = new Date();
  tomorrow.setDate(today.getDate() + 1);
  // console.log("tomorrow => ", tomorrow);

// let query = `SELECT *
// FROM packages
//   LEFT JOIN bookings
//     ON packages.id = bookings.package_id 
//     AND (bookings.start_date <= \'${params.startDate}\' AND bookings.end_date >= \'${params.endDate}\')
// WHERE bookings.id IS NULL;`

let query = `SELECT 


packages.home_img, packages.package_img, packages.booking_img, packages.user_id, packages.price, packages.category, packages.description, 
packages.tent_description, packages.bags_description, packages.lantern_description, packages.cooking_description, packages.location, packages.id

FROM packages
  LEFT JOIN bookings
    ON packages.id = bookings.package_id 
    AND (bookings.start_date <= \'${params.startDate}\' AND bookings.end_date >= \'${params.endDate}\')
WHERE bookings.id IS NULL;`

  // let query = `SELECT * FROM packages JOIN bookings ON packages.id=bookings.package_id `;
  // let query = `SELECT * FROM packages `;
  // let query = `SELECT * FROM bookings `;

// let query = `SELECT packages.id
// FROM packages
//   LEFT JOIN bookings
//     ON packages.id = bookings.package_id`

  // if (params.endDate > tomorrow & params.category > 0) {
  //   query += ` WHERE packages.category = ${params.category} AND bookings.end_date = ${params.endDate} ;`;
  // }

//  if (params.endDate > tomorrow) {
//     query += `AND (bookings.start_date <= ${params.startDate} AND bookings.end_date >= ${params.startDate})
//     WHERE bookings.id IS NULL;`;
//   }

      

  // if (params.endDate > tomorrow) {
  //   query += ` WHERE bookings.end_date = ${params.endDate} ;`;
  // }

  if (params.category > 0) {
    query += ` WHERE packages.category = ${params.category} ;`;
  }

  // if (params.endDate > tomorrow) {
  //   query += ` WHERE
  //   NOT (params.startDate <= start_date AND start_date <= params.endDate) AND
  //   NOT (params.startDate <= end_date AND end_date  <= params.endDate) AND
  //   NOT (start_date < params.startDate AND params.endDate < end_date )
  //   ;`;
  // }

  // let start = ` WHERE bookings.start_date > ${params.startDate} `;

  // let end;

  // if (params.endDate > currentTime) {
  //   end = `AND end_date< ${params.endDate}`;
  // } else {
  //   end = "";
  // }

  return (
    db
      .query(query)
      // .then((data) => {
      //   console.log(data.rows)
      // })
      .then((data) => {
        return data.rows;
      })
      .catch((err) => console.log(err))
  );
};

module.exports = { getPackages, filterPackages, getPackage };
