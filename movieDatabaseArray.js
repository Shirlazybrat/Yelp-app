// Run this code in the console to see the results

let movie = [{
        title: "In Bruges",
        rating: "5 stars",
        hasWatched: "You have watched"
    },
    {
        title: "Frozen",
        rating: "4.5 stars",
        hasWatched: "You have not seen"
    },
    {
        title: "Mad Max Fury Road",
        rating: "5 stars",
        hasWatched: "You have seen"
    },
    {
        title: "Les Miserables",
        rating: "3.5 stars",
        hasWatched: "You have not seen"
    }
];

for (var i = 0; i <= movie.length; i++) {
    console.log(movie.hasWatched + " " + movie.title + " - " + movie.rating);
}


//challenge1: set hadWatched to boolean and if true print "you have watched" and if not print "You have nor t seen"

// challenge2: write code using es6