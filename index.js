var moment = require('moment');
console.log("hello");

console.log(moment().format('MMMM Do YYYY, h:mm:ss a'));
console.log(moment().format('dddd'));
console.log(moment().format("MMM Do YY"));
console.log(moment().isValid("2020-01-01"));
console.log(moment().isValid("2020-14-01"));
console.log(moment().add(7 , "days"));
console.log(moment().add(7 , "months"));
console.log(moment().add(7 , "years"));
console.log(moment().subtract(7 , "days"));
console.log(moment().subtract(7 , "months"));
console.log(moment().subtract(7 , "years"))

var a = moment([2014,0,11])
var b = moment ([2015 , 0 , 9])
console.log(a.diff(b));

console.log(moment("2020-01-01").isAfter("2018-01-01"));
console.log(moment("2010-01-01").isAfter("2018-01-01"));

console.log(moment([2019]).isLeapYear());
console.log(moment([2020]).isLeapYear());