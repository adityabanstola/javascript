// async is a special syntax to work with promises instead,  a function can be made async by using async keyword
// async function always retuns a promise
async function john(){
let pkrTemp = new Promise((resolve, reject) =>{
    setTimeout(() =>{
        resolve("33 degeree")
    },1000)
})
let ktmTemp = new Promise((resolve, reject) =>{
    setTimeout(() =>{
        resolve("43 degeree")
    },2000)
})

   
// pkrTemp.then(alert)
    let pkr = await pkrTemp
    let ktm = await ktmTemp
    return [pkr, ktm]
}
let a = john()
console.log(a)