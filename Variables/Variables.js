// What is variables?
// Variables is a bucket for store the value.
// Three Types are Variables in Javascript 
//  👉 Var 👉Let 👉Const 

// Var is Global KeyWord and var is a function Scope.
// Let is Local Keyword this is re-assign value and Block Scope.
// Const is Local Keyword this is not re-assign value and Block Scope.


var a = 10;
var a = 20  // first wale ko memory se clean kardega. var sahi tarika nhi used karne project me same variable ko 2 times declare kar sakte hai or yeh value ko change bhi kar deta hai.
console.log(a)

let b = 100;
// let b = 10 // 🥵 let ko same name defined nhi kar sakte hai. or yeh value ko re-assing bhi kar deta hai
console.log(b);

const c = 10;
c = 20  // 🥵 same name defined nhi kar sakte hai. or yeh value ko re-assing nhi karta yeh fixed value rehti hai.
console.log(c);