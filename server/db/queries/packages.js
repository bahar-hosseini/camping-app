const db = require("../../configs/db.config");
const { param } = require("../../routes");

const getPackages = () => {
  return db.query("SELECT * FROM packages;").then((data) => {
    return data;
  });
};


//SELECT * FROM packages JOIN bookings ON packages.id=bookings.package_id

const filterPackages = (params) => {
  const today = new Date();
  let tomorrow = new Date();
  tomorrow.setDate(today.getDate() + 1);
  // console.log("tomorrow => ", tomorrow);

  let query = `SELECT * FROM packages JOIN bookings ON packages.id=bookings.package_id `;
  // let query = `SELECT * FROM packages `;
  // let query = `SELECT * FROM bookings `;

  if (params.endDate > tomorrow & params.category > 0) {
    query += ` WHERE packages.category = ${params.category} AND packages.category = ${params.category} ;`;
  }

  if (params.endDate > tomorrow) {
    query += ` WHERE bookings.end_date = ${params.endDate} ;`;
  }

 
  // if (params.endDate > tomorrow) {
  //   query += ` WHERE 
  //   NOT (params.startDate <= start_date AND start_date <= params.endDate) AND 
  //   NOT (params.startDate <= end_date AND end_date  <= params.endDate) AND
  //   NOT (start_date < params.startDate AND params.endDate < end_date ) 
  //   ;`;
  // }



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
