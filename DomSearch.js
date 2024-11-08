// there are 3 method for searchinh Dom i.e matches, closest, contains
// matches helps to check if element matches the css selector or not
// closest helps to look for nearest ancestor that matches given css selector and
// contains retuens true if elemetA is inside  elementB  or elemet A = element B
const id1 = document.querySelector("#id1");
console.log(id1);
console.log(id1.matches(".box"))
 id1.style.color = "blue";
 console.log(sp1.closest(".box"))
 console.log(id1.contains(sp1))