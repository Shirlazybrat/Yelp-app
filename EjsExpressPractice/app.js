var express = require("express");
var app = express();


app.get("/", function(req, res) {
    res.render("home.ejs");
    // res.send("<h1Welcome to the Home Page</h1>");
});

app.get("/posts", function(req, res) {
    var posts = [
        { title: "I like puppies", author: "Shirl" },
        { title: "What is dis", author: "Tam" },
        { title: "I'm not here for this", author: "Kish" }
    ];
    res.render("posts.ejs", { posts: posts });
});

app.get("/fallinlovewith/:thing", function(req, res) {
    var thing = req.params.thing;
    // res.send("you fell in love with " + thing);
    res.render("love.ejs", { thingVar: thing });
});





app.listen(3000, function() {
    console.log("running server on port 3000");
});