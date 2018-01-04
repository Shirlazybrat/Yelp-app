var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));
// tell the express app to use the files of the public directory
app.use(express.static("public"));
//tell express to use ejs so .ejs is not needed in the routes
app.set("view engine", "ejs")

var friends = ["donna", "Candi", "Latisha", "Andrea"];

// root route
app.get("/", function(req, res) {
    res.render("home.");
    // res.send("<h1Welcome to the Home Page</h1>");
});

app.get("/fallinlovewith/:thing", function(req, res) {
    var thing = req.params.thing;
    // res.send("you fell in love with " + thing);
    res.render("love", { thingVar: thing });
});

app.get("/posts", function(req, res) {
    var posts = [
        { title: "I like puppies", author: "Shirl" },
        { title: "What is dis", author: "Tam" },
        { title: "I'm not here for this", author: "Kish" }
    ];
    res.render("posts", { posts: posts });
});


app.post("/addfriend", function(req, res) {
    var newFriend = req.body.newfriend;
    friends.push(newFriend);
    res.redirect("/friends");
});

app.get("/friends", function(req, res) {
    res.render("friends", { friends: friends });
});

app.listen(3000, function() {
    console.log("running server on port 3000");
});