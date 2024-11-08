//logical operator to find age of a person between 10 and 20
// let age = prompt("Can you tell me your age please")
// if (age>10 && age<=20){
//     console.log("you have meet your reaquired age")


//switch case statement


// let age = prompt("Can you tell me your age please")
// age = Number.parseInt(age)
// switch(age){
//     case 12:
//         console.log("your age is 12")
//         break;
//     case 13:
//         console.log("your age is 13")
//         break;
//         case 14:
//             console.log("your age is 14")
//             break;

//      default:
//         console.log("your age is default")                           

// }


// Divisble number program using logical operators


// let number = prompt("Can you tell me a number please")
// number = Number.parseInt(number)
// if( number%2==0 && number%3==0 ){
//     console.log("It is divisible by 2 and 3")
// }
// else{
//     console.log("It is not divisible by 2 and 3")

// }



// Ternary Operator
let age = prompt("Enter your age for elligibility ")
age = Number.parseInt(age)

let a = age>=18?"you can drive" :"you cannot drive"
console.log(a)