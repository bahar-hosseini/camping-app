import React, { useState } from "react";
import Calendar from "react-calendar";
// import { differenceInCalendarDays, isWithinInterval,compareAsc, format } from "date-fns";

export function ReactCalendar() {
  const [date, setDate] = useState(new Date());
  const onChange = (date) => {
    setDate(date);
  };
  //  const isSameDay =(a, b) => {
  //   return differenceInCalendarDays(a, b) === 0;
  // }
  // const isWithinRange=(date, range) => {
  //   return isWithinInterval(date, { start: range[0], end: range[1] });
  // }

  // const isWithinRanges=(date, ranges) => {
  //   return ranges.some(range => isWithinRange(date, range));
  // }
  return (
    <div>
      <Calendar onChange={onChange} hover value={date} selectRange />
      {/* selectRange returns an array of 2 days */}
      {console.log(date)}
      {date.toString()}
    </div>
  );
}

//https://date-fns.org/v2.29.3/docs/closestTo
//date-fns
//these are some stuff we might need to calculate dates
//add  / Add the specified years, months, weeks, days, hours, minutes and seconds to the given date.
//closestIndexTo   /  Return an index of the closest date from the array comparing to the given date.
//closestTo   /Return a date from the array closest to the given date.
//formatDistanceToNowStrict Return the distance between the given dates in words, using strict units. This is like formatDistance, but does not use helpers like 'almost', 'over', 'less than' and the like.
//formatDistanceStrict ** Return the distance between the given dates in words, using strict units. This is like formatDistance, but does not use helpers like 'almost', 'over', 'less than' and the like.

//sorts an array of dates
// dates.sort(compareAsc)
//=> [
//   Wed Feb 11 1987 00:00:00,
//   Mon Jul 10 1989 00:00:00,
//   Sun Jul 02 1995 00:00:00
// ]
