const db = require("../../configs/db.config");
const { param } = require("../../routes");

const getPackages = (eachQuery) => {
  // console.log('qqqqq', eachQuery)
  return db
    .query(
      `SELECT *  FROM packages
       ORDER BY packages.id 
       LIMIT 12 offset $1;`,
      [eachQuery]
    )
    .then((data) => {
      return data;
    });
};

const getPackage = (packagetId) => {
  return (
    db
      .query(
        `SELECT packages.* , users.name AS name FROM packages
      JOIN users ON packages.user_id=users.id 
      WHERE packages.id = $1;`,
        [packagetId]
      )
      .then((data) => {
        return data;
      })
  );
};

//SELECT * FROM packages JOIN bookings ON packages.id=bookings.package_id

const filterPackages = (params) => {
  const today = new Date();
  let tomorrow = new Date();
  tomorrow.setDate(today.getDate() + 1);

  //   let query = `SELECT
  // packages.home_img, packages.package_img, packages.booking_img, packages.user_id, packages.price, packages.category, packages.description,
  // packages.tent_description, packages.bags_description, packages.lantern_description, packages.cooking_description, packages.location, packages.id
  // FROM packages
  //   LEFT JOIN bookings
  //     ON packages.id = bookings.package_id

  //     `;

  //   if (params.endDate > tomorrow && params.category > 0) {
  //     return (query += ` AND (bookings.start_date <= \'${params.startDate}\' AND bookings.end_date >= \'${params.endDate}\')
  //       WHERE bookings.id IS NULL AND packages.category = ${params.category} ;`);
  //   } else if (params.endDate > tomorrow) {
  //     return (query += ` AND (bookings.start_date <= \'${params.startDate}\' AND bookings.end_date >= \'${params.endDate}\')
  //       WHERE bookings.id IS NULL;`);
  //   } else if (params.category > 0) {
  //     return (query += ` AND packages.category = ${params.category} ;`);
  //   }

  let query = `SELECT

packages.home_img, packages.package_img, packages.booking_img, packages.user_id, packages.price, packages.category, packages.description,
packages.tent_description, packages.bags_description, packages.lantern_description, packages.cooking_description, packages.id

FROM packages
  LEFT JOIN bookings
    ON packages.id = bookings.package_id
    AND (bookings.start_date <= \'${params.startDate}\' AND bookings.end_date >= \'${params.endDate}\')
WHERE bookings.id IS NULL `;

  if (params.category > 0) {
    query += `AND packages.category = ${params.category}`;
  }

  query += ";";

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

// let query = `SELECT

// packages.home_img, packages.package_img, packages.booking_img, packages.user_id, packages.price, packages.category, packages.description,
// packages.tent_description, packages.bags_description, packages.lantern_description, packages.cooking_description, packages.location, packages.id

// FROM packages
//   LEFT JOIN bookings
//     ON packages.id = bookings.package_id
//     AND (bookings.start_date <= \'${params.startDate}\' AND bookings.end_date >= \'${params.endDate}\')
// WHERE bookings.id IS NULL;`
