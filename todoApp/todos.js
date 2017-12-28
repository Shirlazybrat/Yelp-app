// alert("connected!")

///code ran on first li only
// var firstLi = document.querySelector("li");

// firstLi.addEventListener("mouseover", function() {
//     firstLi.style.color = "green";
// })

// firstLi.addEventListener("mouseout", function() {
//     firstLi.style.color = "black";
// })

//code to run on all li's
var lis = document.querySelectorAll("li");

for (var i = 0; i < lis.length; i++) {
    lis[i].addEventListener("mouseover", function() {
        // this.style.color = "green";
        this.classList.add("selected");
    });
    lis[i].addEventListener("mouseout", function() {
        // this.style.color = "black";
        this.classList.remove("selected");
    });
    lis[i].addEventListener("click", function() {
        /// add a cross out affect
        this.classList.toggle("done");
    });
}