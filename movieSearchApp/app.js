var express = require("express");
var request = require("request");
app = express();


app.get("/result", function(req, res) {
    // res.send("it works");
    request("http://www.omdbapi.com/?s=atlanta&apikey=thewdb", function(error, response, body) {
        if (!error && response.statusCode == 200) {
            var results = JSON.parse(body)
            res.send(results["Search"][0]["Title"]);
        }
    });
});



app.listen(3000, function() {
    console.log("Movie app has started");
});

// General search: http://www.omdbapi.com/?s=guardians+of+the+galaxy&apikey=thewdb 

// Search with Movie ID: http://www.omdbapi.com/?i=tt3896198&apikey=thewdb