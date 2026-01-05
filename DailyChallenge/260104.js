// Question
// Leap Year Calculator
// Given an integer year, determine whether it is a leap year.

// A year is a leap year if it satisfies the following rules:

// The year is evenly divisible by 4, and
// The year is not evenly divisible by 100, unless
// The year is evenly divisible by 400.


function isLeapYear(year) {
  if( year % 400 === 0){
    year = true;
  } else if (year % 100 ===0){
    year = false;
  } else if( year % 4 ===0){
    year = true;
  } else {
    year = false;
  }
  return year;
}
