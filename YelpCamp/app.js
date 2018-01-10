var express = require('express');
var app = express();

app.set("view engine", "ejs");


app.get("/", function(req, res) {
    res.render("landing");
});

app.get("/campgrounds", function(req, res) {
    var campgrounds = [
        { name: "Billy goat's Gruff", image: "https://images.pexels.com/photos/45241/tent-camp-night-star-45241.jpeg?h=350&auto=compress&cs=tinysrgb" },
        { name: "Tablerock Village", image: "https://images.pexels.com/photos/176381/pexels-photo-176381.jpeg?h=350&auto=compress&cs=tinysrgb" },
        { name: "Mountain View Park", image: "https://images.pexels.com/photos/6714/light-forest-trees-morning.jpg?h=350&auto=compress&cs=tinysrgb" }
    ]
    res.render("campgrounds", { campgrounds: campgrounds });
});

app.listen(3000, function(req, res) {
    console.log("Yelp Camp server is listening on PORT 3000");
});