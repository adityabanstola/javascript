// explore includes , starts with & ends with function of a string
let sentence = "A fox is there in the forest"
let word  = "fox"
console.log(sentence.includes(word))
console.log(`"${word}" ${sentence.includes(word)? "is" : "is not"} in the sentence`)
console.log(sentence.startsWith("A"))

// extand amount of string 
let text = "please give Rs 1000"
let amount = Number.parseInt(text.slice("please give Rs".length))
console.log(typeof amount)

//change character in string which will not be change as string is immutable

let bros = "cody"
bros[2]
console.log(bros[2])
 

