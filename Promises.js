//the solution to callback hell function is promises, a promise is a promise of a code execution
//the code either fails or executes in both the cases the suscriber will be notified with the help of then and catch
//for exammple resolve(value) = if the job is finished sucessfully, reject(error) = if the job fails

//the promise object returned by the new promise constructor has some properties
// state - initially pending them changes to either fulfilled when resolve is called ir rejected when reject is called
// result - initially  undefined the cahnges to value if resolved or error when rejected
let promise = new Promise(function(resolve, reject) {
    alert("yess ")
    resolve(56)

})
// console.log("hello")
// setTimeout(function () {
//     console.log("you cant see me")
// },2000)
// console.log("hello my name is"+ "mo salah")
// console.log(promise)
 let p = new Promise((resolve, reject) => {
    console.log("i promose")
    setTimeout(()=>{
        // console.log("this is resolved")
        // 
        resolve(true)
    },2000)
 })
 let p2 = new Promise((resolve, reject) => {
    console.log("i promose")
    setTimeout(()=>{
        // console.log("This is rejected")
        reject(new Error("you cant see me"))
    },4000)
 })
 // to get the value
 p.then((value) => {
    console.log(value)
 }
,(error) => {
    console.log(error)
})
 //to catch the error
 p2.catch((error) => {
    console.log("Some error is occurring man o man")
})