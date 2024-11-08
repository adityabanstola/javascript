// create an arrat of numbers and take input from tthe user to add numbers to this aray
// let arr = [1,2,3,4,5,90]
// let a = prompt("enter a number")
// a = Number.parseInt(a)
// arr.push(a)
// console.log(arr)

// keep adding numbers to the array in above until 0 is added
let arr = [1,2,3,4,5,90]
let b;
do {
 b = prompt("enter a number")
b = Number.parseInt(b)
arr.push(b)


} while(b != 0 );
console.log(arr)

// filter for numbers divisible by 10 from a goven array 

let div = arr.filter((a2) =>{
 return a2%10 == 0
})
console.log(div)

//create an array of square of given numbers


let sq = arr.map((c)=>{
    return c*c
})
console.log(sq)
// reduce methos to calculate factorial of given natural number in array
let arr2 =[1,2,3,4,5,6]

let nat = arr2.reduce((n,n2)=>{
    return n*n2
})
console.log(nat)