let a = prompt("Write a number")// promt is use to take user input as a string 
a = Number.parseInt(a)
alert("you entered a type of " + (typeof a))

let write = confirm("are you sure about that")
if(write){
document.write(a)
}
else{
    document.write("noo")
}