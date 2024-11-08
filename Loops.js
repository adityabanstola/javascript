let sum =0
let n = prompt("Enter a number")
n = Number.parseInt(n)
let i = 0;
for(i = 0; i <n;i++){
    sum+=(i+1)    
}
console.log("sum of first " + n +  " natural number is " +sum)

console.log(i) // it will not print it because let is not global variable , it will only print a block of statenment so we use Var



// For in loop = it wwoll allows you to loop through properties of an object

// let object = {
//     ram : 80,
//     sita : 90,
//     hari : 100
// }
// for ( let a in object ){
//     console.log("marks of" + a + " is " + object[a])
// }
// //For of loop = it operates on the value from iterable one by one in seqenctial manner
// for ( let b of "Ranbir" ){
//     console.log(b)
// }