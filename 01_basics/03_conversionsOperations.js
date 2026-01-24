let score = "ketaki"

console.log(typeof score);

let valueInNumber = Number(score)
console.log(typeof valueInNumber); // this is used when we only want a number but don't know that recieved variable is number or any other dtype
console.log( valueInNumber); // NaN => Not a number
// null = 0

// String to integer

/*  "33 "= 33
    "33abc" => NaN
    true = 1, and false = 0;
*/

// Number 1,0 into boolean
let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn) // 1=> true, 0=> false
console.log(booleanIsLoggedIn) // true

// Integer to String
let someNumber = 33;
let stringNumber = String(someNumber);
console.log(stringNumber);

console.log(typeof stringNumber)

// String, Number, Boolean etc words are used whenever we want to convert one dtype to another


// *****************  Operations  ******************

let value = 3;
let negValue = -value
// console.log(negValue);

console.log(2+2);
console.log(2-2);
// *,  **(power), /, % , etc can be applied similar to +, -

let str1 = "Hello"
let str2 =" Ketaki ";
let str3 = str1 + str2;
console.log(str3);

console.log(+true) // => 1



