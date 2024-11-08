//there are 6 static method in promises 
//promise.all wauits for all methods to resolve and then returns an array of there result but if one fails all the promises becomes error
//promise.allSettked helps to resolve the problems of promise.all
let p1 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve(1)
    },1000)
})
let p2 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve(2)
    },2000)
})
let p3 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve(3)
    },1000)
})
// p1.then((value)=>{
//     console.log(value)
// })
// p2.then((value)=>{
//     console.log(value)
// })

// let promise_all = Promise.all([p1, p2, p3])
// let promise_all = Promise.allSettled([p1, p2, p3])
// let promise_all = Promise.race([p1, p2, p3]) // waits for the first promise to settle and its result is output
// let promise_all = Promise.any([p1, p2, p3])
// let promise_all = Promise.resolve(6)
let promise_all = Promise.reject(new Error("hey"))

promise_all.then((value)=>{
    console.log(value)
})