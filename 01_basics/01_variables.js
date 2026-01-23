const accountId = 144553
let accountEmail = "ketaki@gmail.com"
var accountPassword = "12345"
accountCity = "Kolhapur"
let accountState; // onlu declaration then it remains undefined


// accountId = 2;
// console.log(accountId); -> not allowed 

accountEmail = "kp@gmail.com"
accountPassword = "45121"
accountCity = "Pune"

console.table([accountEmail, accountId, accountPassword, accountCity, accountState])
// gives all the values in a table format
/*
    Prefer not to use var
    becuase of issue in block scope and functional scope
*/
