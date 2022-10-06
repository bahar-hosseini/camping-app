export function formatDateTitles(num) {
  /*
    Takes in a number, formats the number into a word (ie. 2 becomes 'Two')
  */
  if (num === 1) {
    return "One";
  }
  if (num === 2) {
    return "Two";
  }
  if (num === 3) {
    return "Three";
  }
  if (num === 4) {
    return "Four";
  }
}
