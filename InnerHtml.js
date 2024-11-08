//console.dir  shows the element as object with its properties 
//tagname or node name us used to read name of a element , tag name only exists for Element nodes and nodeName defines for any node
let x = document.getElementsByTagName('span')[0]
console.dir(x)
let y = document.getElementsByTagName('span')[0]
console.log(y)
console.log(document.body.firstChild.nodeName)
console.log(document.body.firstElementChild.nodeName)
//innerHTML property allowa to get html inside the element as a string which is valid for onlu nodes
console.log(span1.innerHTML = "<h1>hello beautiful peoples</h1>")
//outerHTML property contains the full HTML inner HTML+ the element itself
console.log(span1.outerHTML)
//textContent provides access to the text inside the element only textminus all the tags inside the element
console.log(span1.textContent)
//the hiddent property helps to hide a html documnet 