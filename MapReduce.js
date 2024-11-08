// Map creates a new array by performing some operation on each array element
let arr = [23.5,56,78]
let a =arr.map((value, index, array) => {
// console.log(value, index, array)
return value + 1
})
// console.log(a)

//array filter merthods = it creates new array filled with elements that pass a test provided by a function
let arrs = [22,33,44,0,1,4]
let a2 = arrs.filter((element)=>{
    return element<10
})
// console.log(a2)

// array reduce method reduces a array to a single value
let arrs2 = [1,2,3,4,5,4,2]
let b =arrs2.reduce((yoo,yoo2,yoo3)=>{
return yoo + yoo2+yoo3
})
console.log(b)
