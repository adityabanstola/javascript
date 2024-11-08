let num = [1,2,3,4]
for(let i = 0; i < num.length; i++){
    console.log("He has number",num[i])
}
num.forEach(function f(element, index){ // we can use for each when we are using DOM for html collection So we ise Array.from, it callls function once for each array element
    console.log("He has number",element,index)
})

// Array.from wil convert html collection into arrayy

let name = "jhonny"
let arr = Array.from(name)
console.log(arr)


//for of is a shortcut method
for (let i of name){
    console.log(i)
}

//for in will print the key of the object

for (let i in name){
    console.log(i)
}
