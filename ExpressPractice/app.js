// #Express Routing Assignment

var express = require("express");
var app = express();

//////// ROUTES  ////////
//Route1
app.get("/", function(req, res) {
    res.send("Hi there, welcome to Shirlette's practice Express app");
});

//Route2
app.get("/speak/:animal", function(req, res) {
    var sounds = {
        pig: "OINK OINK",
        dog: "WOOF WOOF",
        cat: "I hate humans",
        cow: "Moo Moooooo",
        goldfish: "..."
    };
    var animal = req.params.animal.toLowerCase();
    var sound = sounds[animal];
    // console.log(animal);
    // if (animal === "pig") {
    //     sound = "OINK OINK";
    // } else if (animal === "cow") {
    //     sound = "Moo Moooooo";
    // } else if (animal === "dog") {
    //     sound = "WOOF WOOF";
    // }
    res.send("The " + animal + " says ''" + sound + "'");
});

//Route3
app.get("/repeat/:word/:numTimes", function(req, res) {
    var word = req.params.word;
    var timesToPrint = Number(req.params.numTimes);
    var result = "";
    for (var i = 0; i < timesToPrint; i++) {
        // console.log(req.params.numTimes);
        result += word + " ";
    }
    res.send(result);
});

//catch-all route
app.get("*", function(req, res) {
    res.send("Get Yo Life Bih!!");
});

//start the server
app.listen(3000, function() {
    console.log("you are listening on PORT 3000");
});