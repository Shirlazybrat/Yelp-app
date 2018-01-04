var express = require("express");
var app = express();


app.get("/", function(req, res) {
    res.render("home.ejs");
    // res.send("<h1Welcome to the Home Page</h1>");
});

app.get("/fallinlovewith/:thing", function(req, res) {
    var thing = req.params.thing;
    // res.send("you fell in love with " + thing);
    res.render("love.ejs", { thingVar: thing });
});





app.listen(3000, function() {
    console.log("running server on prot 3000");
});