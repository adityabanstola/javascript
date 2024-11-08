const container = document.getElementById('container');
//get attributes used to get value of an attribute
let a = container.getAttribute("class")
console.log(a);

//has attribute checks if there is attribute or not
console.log(container.hasAttribute("class"));
console.log(container.hasAttribute("style"))

//set attriubute is a method to set a value of an attribute
 container.setAttribute("class","true , baby")      

 //remove attribute is a method to remove the attributr from element
 container.removeAttribute("class")

 // element.attributes is a method to get all attribute to get a collection of all attribute
 console.log(container.attributes)

 // data-* attributes means you can create your own attributes but with help of data - attributes
 console.log(container.dataset.player)
 