import { createContext, useState } from "react";
// import DatePicker from "react-date-picker";
// Create a Context

export const searchContext = createContext();
// Create a Component wrapper from Context.Provider

export default function SearchProvider(props) {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  // const [dateRange, setDateRange] = useState(startDate, endDate )

  // Functions to change  the counter state item
  //******** */
  const allBookings = require("../mock_data/bookings");
const allPackages = require("../mock_data/packages");
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
    const mergedArrys = packageArry.concat(userRange);
    var i, j;
    if (mergedArrys.length % 2 !== 0)
      throw new TypeError("Arguments length must be a multiple of 2");
  
    for (i = 0; i < mergedArrys.length - 2; i += 2) {
      for (j = i + 2; j < mergedArrys.length; j += 2) {
        if (
          dateRangeOverlaps(
            mergedArrys[i],
            mergedArrys[i + 1],
            mergedArrys[j],
            mergedArrys[j + 1]
          )
        )
          return true;
      }
    }
    return false;
  };
  
   const userReqRange = ["2022-10-01T04:00:00.000Z", "2022-10-13T04:00:00.000Z"];
  
  const packageArry = allPackages.packages;
  
  //homepage filter
  //returns an array of available packages for user's date range. Loop through these id's for filtered output
   const avilableIDArry = function (userRange,packagesArry) {
    let resultArry = [];
    for (let objs of packagesArry) {
      const packageBookingsArry = allDates(bookingForSpecificPackage(objs.id));
      if (!mDROwithUserRange(userRange, packageBookingsArry)) {
        resultArry.push(objs.id);
      }
    }
    return resultArry;
  };
   //console.log(avilableIDArry(userReqRange))
  
  //Create new booking: this is the check prior to adding the new booking
  //returns false if no overlap, returns true if there is overlap
  const bookingConflictChecker = function (userRange, packageID) {
    const packageBookingsArry = allDates(bookingForSpecificPackage(packageID));
    return mDROwithUserRange(userRange, packageBookingsArry);
  };
//********** */

  // This list can get long with a lot of functions.  Reducer may be a better choice
  // const providerData = { counter, increment, decrement, clear };
  const providerData = { startDate, endDate, setStartDate, setEndDate, avilableIDArry   };
  // We can now use this as a component to wrap anything
  // that needs our state
  return (
    <searchContext.Provider value={providerData}>
      {props.children}
    </searchContext.Provider>
  );
}
