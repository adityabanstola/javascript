// Array is a variable where you can store multiple values
let roll_no = [1,2,3,4]
let name = ["hari", "Ram", "Shyam", "Raju"]
for(let i =0; i<roll_no.length; i++){
    console.log(`${name[i]} roll number is  ${roll_no[i]}`)
}

// array methods
let num = [1,2,3,4,6,7,8,9]
// let b = num.toString() // b is now a string
// console.log(typeof num)
// let c = num.join("-") // joins a  value
// console.log(c)
// let r = num.push(20)
// console.log(num)
// let r = num.shift() // it will remove the first value of array
// console.log(num)
// let s = num.unshift(20) // it will add  value in the first position of array
// console.log(num)

// delete num[0]
// console.log(num) // length will be same because  that value will be empty 
let num2 = [10,11,12,13]

let num3 =num.concat(num2)
console.log(num3)
let numbers = [3,6,1,8,3,9,0]
numbers.sort() //
console.log(numbers)