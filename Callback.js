//synchoromus programming are the actions that initiate and finish one by one
// let a = prompt("what is your name")
// let b = prompt("what is your age")
// let c = prompt("What is your favoriter colour")

// alert(a + " is " + b + "years old " + "and his favorite color is " + c )
// // assynchronus  are the actions that we initiate now and they finish later
// console.log("start")
// setTimeout(function(){
//     console.log("yo man")
// },2000)
// console.log("end")

//callback function is a function passed into another function as an argument which is then invoked inside the outer function to complete a action
//we can handle callback errors by supplying argumnet
function loadScript(src,callback) {
    let script = document.createElement("script")
    script.src = src
    script.onload = function(){
        console.log("loaded script with SRC "+ src)
        callback(null, src) 
    }
    script.onerror = function(){
        console.log("error loading script with SRC "+ src)
       callback(new Error("src not found"))
    }

    document.head.appendChild(script)

}
function hello(error, src){
    if(error){
        console.log(error)
        return 
    }
    alert("hello" + src)
}
function good(error, src){
    if(error){
        console.log(error)
        // senfEmergencyMessagetoCeo()
        return
    }
    alert("good night")
}
loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js", good)