//simple array
var friends = ["areeb", "ali", 9, "aman", true];
//type define array union
var group = ["ali", "aman", "mursaleen"];
var gorups = ["ali", 123, true];
//change value through index number
var guest = ["areeb", "ali", "mursalen", "aman", "adeel"];
guest[1] = "bilal";
//add index at end
var girls = ["aqsa", "shajeeah"];
girls.push("coming soon");
//add index at start
var boys = ["mursalen", "arham", "anas", "adeel", "aman", "ali", "huzaifa"];
boys.unshift("wasi");
//remove index at end 
var girl = ["aqsa", "shajeeah", "coming soon"];
girl.pop();
//remove at start
var boy = ["arham", "mursalen", "anas", "adeel", "aman", "ali", "huzaifa"];
boy.shift();
//remove middle index using splice
var dost = ["arham", "mursalen", "anas", "adeel", "aman", "ali", "huzaifa"];
dost.splice(2, 1, "bilal");
//limited index in array by using tupples
var boyy = ["arham", 44, false, "areeb"];
//array in the array nested array
var nested = ["a", "b", "c", "d", ["e", "f", "g"], "j"];
console.log(nested[4][1]); //f
//print index in limimted manner by using slice
var limit = ["a", "b", "c", "d", "j", "m"];
; //b,c,d,j
console.log(limit.slice(1, 4));
