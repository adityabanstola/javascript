document.getElementsByTagName("nav")[0].firstElementChild.style.color = "Red";
document.getElementsByTagName("nav")[0].firstElementChild.style.color = "Green";
document.getElementsByTagName("nav")[0].lastElementChild.style.color = "Red";

Array.from(document.getElementsByTagName("li")).forEach(element => {
    element.style.background = "Cyan";
});


