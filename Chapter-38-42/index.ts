// FUNCTIONS, SWITCH STATEMENTS, WHILE... DO-WHILE LOOPS

// 1. Write a custom function power ( a, b ), to calculate the value of
// a raised to b.

// function power(a: number, b: number): number {
//   if (b === 0) return 1;
//   if (b < 0) return 1 / power(a, -b);
//   let result = 1;
//   for (let i = 0; i < b; i++) {
//     result *= a;
//   }
//   return result;
// }
// console.log(power(2, 3));
// console.log(power(5, 0));
// console.log(power(2, -2));

// 2. Any year is entered through the keyboard. Write a function to
// determine whether the year is a leap year or not.
// Leap years ..., 2012, 2016, 2020, ...

    // A year is a leap year if:
    // - It is divisible by 4
    // - It is not divisible by 100, unless it is also divisible by 400

function isLeapYear(year: number):  boolean {
    if ((year % 4 === 0 && year % 100 !==0) || (year % 400 === 0)) {
        return true;
    }
  return false;
}

const year =2021;
if (isLeapYear(year)) {
    console.log(`${year} is a leap year`);
}else{
    console.log(`${year} is not a leap year`);

}