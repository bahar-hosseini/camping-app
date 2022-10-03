//could be renamed to Date Range overlap check
const dateRangeOverlaps = function (a_start, a_end, b_start, b_end) {
  if (a_start <= b_start && b_start <= a_end) return true; // b starts in a
  if (a_start <= b_end && b_end <= a_end) return true; // b ends in a
  if (b_start < a_start && a_end < b_end) return true; // a in b
  return false;
};
const multipleDateRangeOverlaps = function () {
  var i, j;
  if (arguments.length % 2 !== 0)
    throw new TypeError("Arguments length must be a multiple of 2");
  for (i = 0; i < arguments.length - 2; i += 2) {
    for (j = i + 2; j < arguments.length; j += 2) {
      if (
        dateRangeOverlaps(
          arguments[i],
          arguments[i + 1],
          arguments[j],
          arguments[j + 1]
        )
      )
        return true;
    }
  }
  return false;
};


//overlap
console.log(
  multipleDateRangeOverlaps(
    "2022-10-07T04:00:00.000Z",
    "2022-10-08T04:00:00.000Z",
    "2022-10-07T04:00:00.000Z",
    "2022-10-10T04:00:00.000Z"
  )
);

//does not overlap
console.log(
  multipleDateRangeOverlaps(
    "2022-10-07T04:00:00.000Z",
    "2022-10-08T04:00:00.000Z",
    "2022-10-09T04:00:00.000Z",
    "2022-10-10T04:00:00.000Z"
  )
);
