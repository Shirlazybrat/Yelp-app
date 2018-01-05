var express = require("express");
var request = require("request");
var app = express();

// require ejs template
app.set("view engine", "ejs");

app.get("/", function(req, res) {
    res.render("search");
});

app.get("/result", function(req, res) {
    // res.send("it works");
    var query = (req.query.search);
    var url = "http://www.omdbapi.com/?s=" + query + "&apikey=thewdb";
    request(url, function(error, response, body) {
        if (!error && response.statusCode == 200) {
            var data = JSON.parse(body)
            res.render("results", { data: data });
        }
    });
});



app.listen(3000, function() {
    console.log("Movie app has started");
});

// General search: http://www.omdbapi.com/?s=guardians+of+the+galaxy&apikey=thewdb 

// Search with Movie ID: http://www.omdbapi.com/?i=tt3896198&apikey=thewdb