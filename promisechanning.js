// we can chain promises and make then pass the resolved values to one another 
// sometimes you want to executes two or more than 2 related assynchronus operation  , where next operatiions stant with the result from previous stepe[]
// let p = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve(10);
//     }, 3 * 100);
// });

// p.then((result) => {
//     console.log(result);
//     return result * 2;
// }).then((result) => {
//     console.log(result);
//     return result * 3;
// });
// let promise = new Promise((resolve, reject)=> {
//     setTimeout(()=>{
//         console.log("resolve in 2 sec")
//         resolve("okok")
//     },2000)
// })
// promise.then((value) =>{
//     console.log(value)
//     let promise2 = new Promise((resolve, reject)=>{
//      setTimeout(()=>{
//         resolve("wwe")
//      },2000)   
//     })
//     return promise2
// }).then((value)=>{
//     console.log("finshed tata goodbye")
//     return 3
// }).then((value)=>{
//     console.log("3 is writtern")
// })

const loadScript =(src)=>{
    return new Promise((resolve,reject) =>{
    let script = document.createElement("script")
    script.type = "text/javascript"
    script.src = src
    document.body.appendChild(script)
    script.onload = ()=>{
        resolve("yess it is loaded")
    }
    script.onerror = ()=>{
        reject("it has been rejected")
    }
})
}
let p1 = loadScript("https://google.com")
p1.then((value)=>{
    console.log(value)
}).catch((error) =>{
    console.log("there is some error")
})
