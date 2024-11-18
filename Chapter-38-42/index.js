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
// function isLeapYear(year: number):  boolean {
//     if ((year % 4 === 0 && year % 100 !==0) || (year % 400 === 0)) {
//         return true;
//     }
//   return false;
// }
// const year =2021;
// if (isLeapYear(year)) {
//     console.log(`${year} is a leap year`);
// }else{
//     console.log(`${year} is not a leap year`);
// }
// 3. If the lengths of the sides of a triangle are denoted by a, b, and
// c, then area of triangle is given by
// area = S(S − a)(S − b)(S − c)
// where, S = ( a + b + c ) / 2
// Calculate area of triangle using 2 functions
function calSemiPerimeter(a, b, c) {
    return (a + b + c) / 2;
}
function calArea(a, b, c) {
    var s = calSemiPerimeter(a, b, c);
    var area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
    return area;
}
var a = 5;
var b = 6;
var c = 7;
var area = calArea(a, b, c);
console.log("The area of the triangle is: ".concat(area.toFixed(2), " square units."));
// 4. Write a function that receives marks received by a student in 3
// subjects and returns the average and percentage of these
// marks. there should be 3 functions one is the mainFunction
// and other are for average and percentage. Call those functions
// from mainFunction and display result in mainFunction.
function calAverage(marks1, marks2, marks3) {
    return (marks1 + marks2 + marks3) / 3;
}
function calPercentage(marks1, marks2, marks3, totalMarks) {
    var totalObtained = marks1 + marks2 + marks3;
    return (totalObtained / totalMarks) * 100;
}
function mainFunction(marks1, marks2, marks3) {
    var totalMarks = 300;
    var average = calAverage(marks1, marks2, marks3);
    var percentage = calPercentage(marks1, marks2, marks3, totalMarks);
    console.log("Average: ".concat(average.toFixed(2)));
    console.log("Percentage: ".concat(percentage.toFixed(2), "%"));
}
var marks1 = 80;
var marks2 = 90;
var marks3 = 45;
mainFunction(marks1, marks2, marks3);
