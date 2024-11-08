//settimeout aloows to run function once after a intreval of time
// alert("hello")
//  let t = setTimeout(function() {
//     alert("i am a timeout machine")
// }, 5000)
// let b = prompt("do you want to run a settimeout")
// if("no"== b ){
//     clearTimeout(t)

// }

// console.log(t) // output will be 1 amd it is its id
const sum = (a,b) =>{
    alert ("yes i am walking" + (a + b))
    a + b
} 
setTimeout(sum, 3000,1,2)

// setIntreval has also same synatax as setTimeout. setInterval runs time to  time

// setInterval(function() {
//     alert("i am running")
// , 2000})

// setInterval(sum, 3000,1,2)