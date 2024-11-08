//print marks of student using function
let marks={
    harry : 90,
    ram : 70,
    sita :70

}
// for(let i=0; i<Object.keys(marks).length; i++){
//     console.log("Marks of " + Object.keys(marks)[i] + " is " + marks[Object.keys(marks)[i]])
// }
// console.log(marks[Object.keys(marks)[0]]) // keys ko corressponding value print garcha 


// //above problem with for in loop
// for (let a in marks) {
//     console.log("marks of " + a + " is " + marks[a])
// }

// print a statement until user  enters correct number

// let a
// a = Number.parseInt(a)
// let i = 0;
// while(a!=i){
//  a = prompt("enter a number")
 
    
// }
// console.log("now you got a correct answer")

// finding mean with function

const mean = (a,b,c,d) => {
    return (a+b+c+d)/4
}
console.log(mean(1,2,3,4))