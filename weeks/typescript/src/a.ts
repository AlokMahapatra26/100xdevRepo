// let x:number = 1;

// console.log(x);


// function greet(name:string){
//     console.log(`Good Morning ${name}`)
// }

// greet("alok");

// function sum(num1:number , num2:number):number{
//     return num1 + num2;
// }

// console.log(sum(2,3))

// function isLegal(age : number):boolean{
//     if(age >=18){
//         return true
//     }else{
//         return false;
//     }
// }

// console.log(isLegal(17));

// function funcWaiter(func: (arg1: number , arg2:number)=>number){
//     setTimeout(func , 2000);
// }

// funcWaiter(sum)

// function sum(a:number , b:number):number{
//     return a + b;
// }

// console.log(sum(5,5))

// const greet = (name:string) => `Hello ${name}`

// interface User {
//     firstName : string;
//     lastName : string;
//     age : number;
//     email? : string
// }


// function isLegal(user:User){
//     if(user.age > 18){
//         return true;
//     }else{
//         return false;
//     }
// }

// console.log(
//     isLegal({
//         firstName : "alok",
//         lastName : "mahapatra",
//         age : 13
//     })
// )


// function greet(name : string):string{
//     return `Good Mornign ${name}`
// }

// greet("alok");

// function isLegal(age:number):boolean{
//     return age>=18 ? true : false
// }



// function funcDelay(fn:()=>boolean){
//     setTimeout(fn,5000)
// }

// funcDelay(()=> isLegal(32));

// function add(a,b){
//     return a+b;
// }

// interface User {
//     firstName : string,
//     lastName : string,
//     email : string,
//     age : number
// }

// const user = {
//     firstName : "Alok",
//     lastname : "Mahapatra",
//     email : "alok@gmail.com",
//     age : 19
// }

// function isLegal(user:User){
//     return user.age >= 18 ? true : false;
// }


// type StringOrNumber = string | number;

// function printId(id:StringOrNumber){
//     console.log(`ID : ${id}`);
// }

// printId(2)


// function printArray(arr:number[]){
//     let sum = 0;
//     for(let i=0; i<arr.length; i++){
//         sum = sum + arr[i];
//     }
//     return sum;
// }

// console.log(printArray([34,45,23]));

// interface User{
//     name : string,
//     age :number
// }

// const users = [
//     {
//         name : "alok",
//         age : 19
//     },
//     {
//         name : "aarti",
//         age : 15
//     },
//     {
//         name : "vikas",
//         age : 11
//     },
//     {
//         name : "rohit",
//         age : 9
//     },
//     {
//         name : "rahul",
//         age : 64
//     }, 
// ]


// function LegalFilter(users:User[]){
//     let arr:string[] = [];
//     users.forEach((user:User)=>{
//         if(user.age >= 18){
//             arr.push(user.name)
//         }
//     })
//     return arr;
// }

// console.log(LegalFilter(users));


//ENUM -> to define limited set of input to a function

// enum Direction {
//     UP,
//     DOWN,
//     LEFT,
//     RIGHT
// }

// function doSomething(keyPressed:Direction){
//     if(keyPressed == Direction.UP){
//         console.log("Hello")
//     }
// }

// doSomething(Direction.UP);

//use case of enum in express


//Generics


//THIS IS A PROBLEM
// type Input = string | number;

// function firstElement(arr:Input[]){
//     return arr[0];
// }

// const val = firstElement(["alok", "mahapatra"]);
// console.log(val.toUpperCase());

//SOLUTION WITH GENERICS
// function identity<T>(arg:T){
//     return arg;
// }

// let output1 = identity<String>("MyString");
// let output2 = identity<Number>(12);

// function firstElement<T>(arr:T[]){
//     return arr[0];
// }


// const firstVal = firstElement([12,23]);
// console.log(firstVal);

//Question

//1 -> Write a TypeScript function that takes two numbers as parameters and returns their sum.

// function Sum(a:number,b:number):number{
//     return a+b;
// }

//Arrow func =>

// const sum = (a:number , b:number): number => a + b;
// const val =  Sum(12,21);


//2 -> Create a TypeScript interface representing a Car with properties: make, model, and year

// interface Car {
//     make : string,
//     model  : string,
//     year : number
// }


//3 -> Write a TypeScript function that takes an array of numbers as a parameter and returns the sum of all the numbers in the array.

// function arraySum(arr:number[]):number{
//     let total:number = 0;
//     for(const num of arr){
//         total += num;
//     }
//     return total;
// }

// console.log(arraySum([1299 , 1899 , 499 , 599 , 900 , 1000]));


//4 -> Implement a TypeScript class representing a Circle with properties radius and methods to calculate its area and circumference.

// interface Circle{
//     radius : number;
//     getArea() : number;
//     getCircumference() : number;
// }

// class Circle implements Circle{

//     radius : number

//     constructor(radius:number){
//         this.radius = radius;
//     }

//     getArea():number{
//         return Math.PI * this.radius ** 2;
//     }

//     getCircumference(): number {
//         return 2 * Math.PI * this.radius;
//     }
// }

// const myCircle = new Circle(3);

// console.log(myCircle.radius);
// console.log(myCircle.getArea())

//5 -> Write a TypeScript function that takes a string as a parameter and returns the string reversed\

// function stringReverser(str:string):string{
//     if(str === "") return "";
//     return str.split('').reverse().join('');
// }

// console.log(stringReverser("Alok"))


//6 -> Create a TypeScript interface representing a Person with properties: name, age, and gender.

// interface Person {
//     name : string ;
//     age : number ;
//     gender : string 
// }


function add(a:number,b:number):number{
    return a +b;
}