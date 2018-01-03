var express = require('express');
var app = express();

// "/" get a message tha say "hi" ...etc.
app.get("/", function(req, res) {
    res.send("Hi there!");
});

app.get("/bye", function(req, res) {
    res.send("bye for now");
});

app.get("/dog", function(req, res) {
    console.log("request made to /dog");
    res.send("bow bow bow");
});

//use the colon for route variables
///req.params will get the variables from the url
app.get("/r/:subName/:id/comments/:title", function(req, res) {
    var subName = req.params.subName;
    res.send("this is the " + subName.toUpperCase() + " subpage!!");
});

//catch-all route
app.get("*", function(req, res) {
    res.send("You are a star");
});

//**route order matters

app.listen(3000, () => console.log('app listening on port 3000!'));