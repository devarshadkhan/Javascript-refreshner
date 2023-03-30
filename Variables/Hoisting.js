// Hoisting
// Hoisting which puts all our variables and functions at the top code and before execution.

var hoist = 10
console.log(hoist); // this is output 10

// Hoisting Apply

// This hoisting method with var keyword

console.log(hoistA); // undefined
var hoistA = 10

// This hoisting method with let and const keyword

console.log(hoistB); // error before initialize same as a const keyword error
let hoistB = 10
