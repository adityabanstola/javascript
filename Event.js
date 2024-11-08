//eent is a signal that something has happened / All the DOM  nodes  generate such signals
//adding a handler with js overwrites the exiting handler
// let eg = document.getElementsByClassName("button")[0]
// eg.onclick = () =>{
//     alert("yess")
// }



// addEventListener is used to assign multiple handlers to an event
// eventObject = when an event happens the browser creates an event object , puts detaiks into it and passes it as an argument to the handler
let x = function(e) {
    console.log(e.target);
    console.log(e.type, e.clientX, e.clientY);
    alert("hello")
}
let y = function(e) {
    alert("hello 2")
}

butt.addEventListener('click', x)
butt.addEventListener('click', y)

let j= prompt("chose any 1 evenetListener")
j = Number.parseInt(j)

if(j == 2){
    butt.removeEventListener('click', x)
}