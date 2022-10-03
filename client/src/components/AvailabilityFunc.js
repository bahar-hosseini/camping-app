//all data in mockdata/bookings (arry of obj)
const allBookings = require("../mock_data/bookings");
const allPackages = require("../mock_data/packages");
//filters all bookings and returns bookings with a specific bookings_id
const bookingForSpecificPackage = function (packageID) {
  const listOfBookings = allBookings.bookings.filter(
    (book) => book.package_id == packageID
  );
  return listOfBookings;
};

//takes in argument([{}, {}, {}]) and returns an array of dates ["start", "end", "start", "end"...]
const allDates = function (arry) {
  let dates = [];
  for (let items of arry) {
    dates.push(items.start_date);
    dates.push(items.end_date);
  }
  return dates;
};

//returns true if there's overlap
const dateRangeOverlaps = function (a_start, a_end, b_start, b_end) {
  if (a_start <= b_start && b_start <= a_end) return true; // b starts in a
  if (a_start <= b_end && b_end <= a_end) return true; // b ends in a
  if (b_start < a_start && a_end < b_end) return true; // a in b
  return false;
};

//takes in arry and returns true if theres overlap, array length must be even length.
const multipleDateRangeOverlaps = function (arry) {
  var i, j;
  if (arry.length % 2 !== 0)
    throw new TypeError("Arguments length must be a multiple of 2");

  for (i = 0; i < arry.length - 2; i += 2) {
    for (j = i + 2; j < arry.length; j += 2) {
      if (dateRangeOverlaps(arry[i], arry[i + 1], arry[j], arry[j + 1]))
        return true;
    }
  }
  return false;
};

const mDROwithUserRange = function (packageArry, userRange) {
  const mergedArrys = packageArry.concat(userRange)
  var i, j;
  if (mergedArrys.length % 2 !== 0)
    throw new TypeError("Arguments length must be a multiple of 2");

  for (i = 0; i < mergedArrys.length - 2; i += 2) {
    for (j = i + 2; j < mergedArrys.length; j += 2) {
      if (dateRangeOverlaps(mergedArrys[i], mergedArrys[i + 1], mergedArrys[j], mergedArrys[j + 1]))
        return true;
    }
  }
  return false;
};

// console.log(allDates(bookingForSpecificPackage(4)));
// console.log(multipleDateRangeOverlaps(allDates(bookingForSpecificPackage(4))));

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
// 3. get all SD and ED for that one package ( array) **DONE
// 4. get user's requested SD and ED (1 SD and ED )
// 5.use the function to check overlap
// 6.tada!!
//home page filter box (start - end) -> output packages without overlap
//Booking -> if no overlap, add booking



const userReqRange = ["2022-10-07T04:00:00.000Z", "2022-10-09T04:00:00.000Z"];

const packageArry = allPackages.packages;


//returns an array of available packages for user's date range. Loop through these id's for filtered output 
const avilableIDArry = function (userRange) {
  let resultArry = []
  for (let objs of packageArry) {
    const packageBookingsArry = allDates(bookingForSpecificPackage(objs.id));
    if (!mDROwithUserRange(userRange, packageBookingsArry)){
      resultArry.push(objs.id)
    }

  }
  return resultArry
};

// console.log(avilableIDArry(userReqRange))



const bookingConflictChecker = function(userRange, packageID) {
  const packageBookingsArry = allDates(bookingForSpecificPackage(packageID));
  
  return mDROwithUserRange(userRange, packageBookingsArry)
    
  
}
console.log(bookingConflictChecker(userReqRange, 4))
//
//