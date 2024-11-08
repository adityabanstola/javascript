console.error("this is incorrect")
console.assert(6<7)// if any thing is flase then it will pop up in result
//console.clear()// it will clear all the console
let obj = {
    a:1, 
    b:2, 
    c:3,
}
console.table(obj)// it will form a table
console.info("thia is a info")

console.time("for loop")
for(let i=0; i<5;i++){
    console.log(22)
}
console.timeEnd("for loop")
console.time("while loop")
let j = 0;
while(j<5) {
    console.log(22)
    j++;
}
console.timeEnd("while loop")
