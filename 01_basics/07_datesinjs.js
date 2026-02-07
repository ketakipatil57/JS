// Dates

let myDate = new Date()
console.log(myDate) // 2026-02-07T06:27:28.621Z

console.log(myDate.toString()); // Sat Feb 07 2026 06:28:15 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toDateString());// Sat Feb 07 2026

console.log(typeof myDate); // object


let myCreatedString = new Date(2026 , 1 , 6) //(Year , month , Day)
// jan - 0, feb - 1, march - 2... => Months start with 0 in JS in case of Dates
console.log(myCreatedString.toDateString());

console.log(myCreatedString.toLocaleString()); // 2/6/2026, 12:00:00 AM (Date and Time)
console.log(myCreatedString.toLocaleDateString()); // 2/6/2026 (Only Date)


let mytimeStamp = Date.now()
console.log(mytimeStamp);


let newDate = new Date()

console.log(newDate.getDay());

/* FUNCTIONS THAT COME ALONG WITH THE DATE 

    getDate
    getDay => mon - 1, tues -2 , ..
    getFullyear
    gethours
    getMonth => starts with 0, 1, 2, 3, 4, ...
    getSeconds , etc*/

newDate.toLocaleString('defualt', {
    weekday : "long"

})

console.log(newDate.toString());
