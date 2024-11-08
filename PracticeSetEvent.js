let google = document.getElementById('google');
let facebook = document.getElementById('facebook');
let twitter = document.getElementById('twitter');
google.addEventListener('click', function() {
    window.location = "http://www.google.com"
})
setInterval(async function(){
    document.querySelector("#bulb").classList.toggle("bulb")
},300)