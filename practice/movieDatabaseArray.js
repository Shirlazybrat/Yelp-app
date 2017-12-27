// Run this code in the console to see the results

let movie = [{
        title: "In Bruges",
        rating: 5,
        hasWatched: true
    },
    {
        title: "Frozen",
        rating: 4.5,
        hasWatched: false
    },
    {
        title: "Mad Max Fury Road",
        rating: 5,
        hasWatched: true
    },
    {
        title: "Les Miserables",
        rating: 3.5,
        hasWatched: false
    }
];

for (var i = 0; i <= movie.length; i++) {
    console.log(movie.hasWatched + " " + movie.title + " - " + movie.rating);
}


//challenge1: set hadWatched to boolean and if true print "you have watched" and if not print "You have nor t seen"
movie.forEach(function(movies) {
    var result = "You have ";
    if (movies.hasWatched) {
        result += "watched ";
    } else {
        result += "not seen ";
    }
    result += movies.title + " - ";
    result += movies.rating + " stars";
    console.log(result);
})

// refactor the code
function buildString(movies) {
    var result = "You have ";
    if (movies.hasWatched) {
        result += "watched ";
    } else {
        result += "not seen ";
    }
    result += movies.title + " - ";
    result += movies.rating + " stars";
    return result;
}

movie.forEach(function(movies) {
    console.log(buildString(movies));
})


// challenge2: write code using es6