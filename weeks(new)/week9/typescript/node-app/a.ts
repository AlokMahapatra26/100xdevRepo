// let a:number = 1;
// a = 10
// let b:number = 2;
// console.log(a + b);


// Types in typescript

// let a:number = 1;
// let b:string = "alok";
// let c:boolean = true;

// function

// function greet(name:string){
//     console.log(`Good mornign ${name}`)
// }

// function sum(x:number , y:number):number{
//     return x + y;
// }

// function isLegal(age:number):boolean{
//     return age >= 18
// }

// function funcDelay(func: ()=> void){
//     setInterval(()=>{func()},1000)
// }

// greet("alok");
// console.log(sum(2,2));
// console.log(isLegal(129))

// interfaces

interface User {
    firstName : string,
    lastName : string,
    email:string,
    age:number
}

const user = {
	firstName: "harkirat",
	lastName: "singh",
	email: "email@gmail.com",
	age: 21,
}

const isLegal = (user:User) => {
    return user.age >= 18;
}

