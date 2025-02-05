"use strict";
// let a:number = 1;
// a = 10
// let b:number = 2;
// console.log(a + b);
// Types in typescript
let a = 1;
let b = "alok";
let c = true;
// function
function greet(name) {
    console.log(`Good mornign ${name}`);
}
function sum(x, y) {
    return x + y;
}
function isLegal(age) {
    return age >= 18;
}
function funcDelay(func) {
    setInterval(() => { func(); }, 1000);
}
greet("alok");
console.log(sum(2, 2));
console.log(isLegal(129));
