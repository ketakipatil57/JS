// console.log( 2 > 1);
// // >= , < , <= , == , != 

// console.log("2" > 1); // >true



// Problem arrizes when we comapre different data types

console.log("2" > 1); // Js itself converts "2" into int(2) and gives the ans

console.log(null > 0);
console.log(null >= 0); // true
console.log(null == 0);

/* Equality check operators(==) work differently than the comparision operators(>, <, >=,<=)
During use of Comparision operators JS convert null into a number making it zero and hence null>=0 is true and null>0 is false but null == 0 remains false    */


//=== strict check it checks the datatypes also 

console.log("2" === 2); // flase => it does not perform any conversions of datatype and strictly checks datatype also and gives the answer as false
console.log("2" == 2); //true => it converts the data type and gives the answer as  true 




