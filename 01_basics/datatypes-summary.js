// Primitive 

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

// These all are pass by value

// Refrence (Non - Primitive)

// Array, Objects, Functions


//**************************************************************** */

/*  STACK and HEAP 

    All primitive data types are stored in the Stack memory
    whereas all the No - primitive datatypes are stored it the heap memory

    STACK : Primitive
    HEAP : Non - Primitive
*/

// Oject creation in JS

let userOne = {
    email : "user@google.com",
    upi : "user@g"
}

console.log(userOne.email , userOne.upi)

// userOne.upi = "user123"

// console.log(userOne.upi)

let userTwo = userOne

userTwo.email = "Ketaki@123"

console.log(userOne.email)
console.log(userTwo.email)



// Array creatio in JS
let arr = ["Ketaki" , "Kedar" , "Shweta" , "Ramdas" , "Rekha"];
console.log(arr[0])


/*  In Case of stack -> copy of the original variale is given and hence change in the copy will not change the original value

Whereas In case of heap -> reference of original variable is given hence change in the copy will make a change in the original value */