/* eslint-disable eqeqeq */
//import { bookings } from "../mock_data/bookings";
const allBookings = require("../mock_data/bookings");
// const parsedAllBookings = JSON.stringify(allBookings)
// console.log(parsedAllBookings)
const bookingForSpecificPackage = function (packageID) {
  const listOfBookings = allBookings.bookings.filter(
    (book) => book.package_id == packageID
  );

  return listOfBookings;
};
// console.log(bookingForSpecificPackage(4))

const allDates = function (arry) {
  let dates = [];
  for (let items of arry) {
    // console.log(items)
    dates.push(items.start_date);
    dates.push(items.end_date);
  }
  return dates;
};



//could be renamed to Date Range overlap check
const dateRangeOverlaps = function (a_start, a_end, b_start, b_end) {
  if (a_start <= b_start && b_start <= a_end) return true; // b starts in a
  if (a_start <= b_end && b_end <= a_end) return true; // b ends in a
  if (b_start < a_start && a_end < b_end) return true; // a in b
  return false;
};
const multipleDateRangeOverlaps = function (arry) {
  var i, j;
  if (arry.length % 2 !== 0)
    throw new TypeError("Arguments length must be a multiple of 2");

  for (i = 0; i < arry.length - 2; i += 2) {
    //console.log('this is arg i: ', arguments[i])
    for (j = i + 2; j < arry.length; j += 2) {
      //console.log('this is arg j: ', arguments[j])
      if (dateRangeOverlaps(arry[i], arry[i + 1], arry[j], arry[j + 1]))
        return true;
    }
  }
  return false;
};
console.log(allDates(bookingForSpecificPackage(4)))
console.log(multipleDateRangeOverlaps(allDates(bookingForSpecificPackage(4))))




//overlap
// console.log(
//   multipleDateRangeOverlaps(
//     "2022-10-07T04:00:00.000Z",
//     "2022-10-08T04:00:00.000Z",
//     "2022-10-09T04:00:00.000Z",
//     "2022-10-10T04:00:00.000Z",
//     "2022-10-10T04:00:00.000Z",
//     "2022-10-12T04:00:00.000Z"
//   )
// );

// const testData = [
//   "2022-10-07T04:00:00.000Z",
//   "2022-10-08T04:00:00.000Z",
//   "2022-10-09T04:00:00.000Z",
//   "2022-10-10T04:00:00.000Z",
// ];
// console.log(multipleDateRangeOverlaps(testData))
//does not overlap
// console.log(
//   multipleDateRangeOverlaps(
//     "2022-10-07T04:00:00.000Z",
//     "2022-10-08T04:00:00.000Z",
//     "2022-10-09T04:00:00.000Z",
//     "2022-10-10T04:00:00.000Z"
//   )
// );

// 1. add SD and ED to booking **DONE
// 2. filter all bookings for one package  **DONE
// 3. get all SD and ED for that one package ( array)
// 4. get user's requested SD and ED (1 SD and ED )
// 5.use the function to check overlap
// 6.tada!!
