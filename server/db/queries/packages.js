const db = require("../../configs/db.config");

const getPackages = () => {
  return db.query("SELECT * FROM packages;").then((data) => {
    return data;
  });
};

const filterPackages = (params) => {
console.log(params)
  return db.query(`SELECT * FROM packages WHERE category = ${params.category}, startDate > ${startDate}, endDate< ${endDate}, user_id = ${user_id} ;`).then((data) => {
    return data;
  });
};

module.exports = { getPackages, filterPackages };
