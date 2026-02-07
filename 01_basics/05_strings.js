const name  = "hitesh"
const repocount = 10

console.log(name + repocount )

// Instead in modern days we use backticks 

console.log(`Hello, My name is ${name} and my repocount is ${repocount}, Thankyou`) 
// Isko string Interpolation kehte hain

/*String Interpolation (JS)

👉 String ke andar variable ya expression directly insert karna
(backticks ` ` use karke) */

const gameName = new String("Ketaki123")
console.log(gameName.length)
console.log(gameName.toUpperCase())
console.log(gameName.substring(0, 4))

const newstring = "        Kekai       "
console.log(newstring)
console.log(newstring.trim());// Removes extra spaces at the start or end added by the use unknowingly or knowingly but are not required

/*

charAt
indexOf
trim
substring(start, end)
slice(start, end) // will be commonly used
replace
*/

const url = "https://ketaki.com/ketaki%20Patil"

console.log(url.replace('%20', '-'));



