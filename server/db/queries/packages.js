const db = require("../../configs/db.config");
const { param } = require("../../routes");

const getPackages = () => {
  return db.query("SELECT * FROM packages;").then((data) => {
    return data;
  });
};

const filterPackages = (params) => {
  const today = new Date();
  let tomorrow = new Date();
  tomorrow.setDate(today.getDate() + 7);
  // console.log("tomorrow => ", tomorrow);

  // let query = `SELECT * FROM packages JOIN bookings ON packages.id=bookings.package_id `;
  let query = `SELECT * FROM packages `;

  // if (params.endDate > tomorrow & params.category > 0) {
  //   query += ` WHERE packages.category = ${params.category} AND `;
  // }

  // if (params.endDate > tomorrow) {
  //   query += ` WHERE bookings.end_date = ${params.endDate} `;
  // }

  //-------
  //a = param
  // (params.startDate <= start_date && start_date <= params.endDate) return true; // b starts in a
  // (params.startDate <= end_date && end_date  <= params.endDate) return true; // b ends in a
  // (start_date < params.startDate && params.endDate < end_date ) return true; // a in b
  //-----

  if (params.category > 0) {
    query += ` WHERE packages.category = ${params.category} ;`;
  }

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

module.exports = { getPackages, filterPackages };
