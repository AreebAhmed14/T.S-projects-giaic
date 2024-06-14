//simple array
let friends = ["areeb","ali",9,"aman",true];

//type define array union
let group:string[]=["ali","aman","mursaleen"];
let gorups:(string|number|boolean)[]=["ali",123,true];

//change value through index number
let guest = ["areeb","ali","mursalen","aman","adeel"];
guest[1] = "bilal";

//add index at end
let girls = ["aqsa","shajeeah"];
girls.push("coming soon");

//add index at start
let boys = ["mursalen","arham","anas","adeel","aman","ali","huzaifa"];
boys.unshift("wasi");

//remove index at end 
let girl = ["aqsa","shajeeah","coming soon"];
girl.pop();

//remove at start
let boy = ["arham","mursalen","anas","adeel","aman","ali","huzaifa"];
boy.shift();

//remove middle index using splice
let dost = ["arham","mursalen","anas","adeel","aman","ali","huzaifa"];
dost.splice(2,1,"bilal");

//limited index in array by using tupples
let boyy:[string,number,boolean,string] = ["arham",44,false,"areeb"];

//array in the array nested array
let nested = ["a","b","c","d",["e","f","g"],"j"];
console.log(nested[4][1])//f

//print index in limimted manner by using slice
let limit = ["a","b","c","d","j","m"];
console.log(limit.slice(1,4));//b,c,d,j slice not change orignal array.

