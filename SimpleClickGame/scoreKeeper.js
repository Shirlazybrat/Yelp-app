// alert("connected");

var p1Button = document.querySelector("#p1");
var p2Button = document.getElementById("p2");
var p1Display = document.querySelector("h1");
var p1Score = 0;

p1Button.addEventListener("click", function() {
    // alert("clicked");
    p1Score++;
    console.log(p1Score);
    h1.textContent = p1Score;
})