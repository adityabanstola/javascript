// create a variable of type string and try to add a number to it
let a = "john"
let b = 2
console.log(a + b)
console.log(typeof (a + b))

// create a const in javascript. Can you changeit to hold a number later?

const c = { // c is a rference which is pointing at a object
    
  name: "hari",
  rollno: 82,
  section: "A",
isprinciples: true


}
//c = 66; // you cannot change any thing in const  
c['friend'] = "ram"; //you cann add keys inside refernece
c['name'] = "Dram"; // you can change anything inside reference

console.log(c);


// write a program to create a word meaning dictonary of 5 words

const Dictionary ={
    extrotionist : "blackmailer",
    etiquettes : "polite",
    resume : "resume",
}
console.log(Dictionary)