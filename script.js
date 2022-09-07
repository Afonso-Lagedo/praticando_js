var date = new Date(); //current date

//element
/*
console.log(date);
console.log(date.getHours());
console.log(date.getMinutes());
console.log(date.getSeconds());
console.log(date.getMilliseconds());
console.log(date.getDate());
console.log(date.getMonth());//in js jan= 0
console.log(date.getDay());
console.log(date.getFullYear());
*/

//transform
/*
var date2 = new Date("March 23, 2023");
console.log(date2);
console.log(Date.parse(date2));
*/

//format
/*
var date3 = new Date();
console.log(date3.getDate()+"/"+(date3.getMonth()+1)+"/"+date3.getFullYear());

//operation
date3.setDate(date3.getDate()+5);
console.log(date3);

date3.setHours(date3.getHours()+7);
console.log(date3);
*/

var date4 = new Date();
var days =['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];

console.log(days[date4.getDay()]);