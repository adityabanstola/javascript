// documnet.title always returns string
//document.documnetElement returns html tags
//documment.body can sometime be null if the js is writtern before body tag
//when we use child node array is not achieved but node list is achieved
const changecolor = () =>{
    document.body.firstElementChild.style.backgroundColor = "red"
}
let b = document.body
console.log("first child of b is " ,b.firstChild)
console.log("first element child of b is " ,b.firstElementChild)

