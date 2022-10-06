const db = require("../../configs/db.config");
const { param } = require("../../routes");

const getPackages = () => {
  return db.query("SELECT * FROM packages;").then((data) => {
    return data;
  });
};

const filterPackages = (params) => {
  const currentTime = new Date();
  let start = "WHERE bookings.start_date > ${params.startDate}";

  let end;

  if (params.endDate > currentTime) {
    end = "AND end_date< ${params.endDate}";
  } else {
    end = "";
  }

  let category;

  if (params.category === 0) {
    category = "";
  } else {
    category = "WHERE category = ${params.category},";
  }

  // const query = `SELECT * FROM packages JOIN bookings ON packages.id=bookings.package_id $1 $2 $3;`;
  // const args = [start, end, category];
  console.log(start)
  const query = `SELECT * FROM packages JOIN bookings ON packages.id=bookings.package_id $1 ;`;
    const args = [category];
  // [startFilter(), endFilter(params.endDate), categoryFilter(params.category)]
  return db.query(query, args).then((data) => {
    return data;
  });
};

module.exports = { getPackages, filterPackages };
