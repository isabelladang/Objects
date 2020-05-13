//Nested objects in an array

var movies = [
{   name:"In Bruges",
    hasWatched: true,
	rating: "5 stars",
},
{
	name: "Frozen",
	hasWatched: false,
	rating: "4.5 stars",
},
{
	name: "Mad Max Fury Road",
	hasWatched: true,
	rating: "5 stars",
},
{
	name: "Les Miserables",
	hasWatched: false,
	rating: "3.5 stars",
},
]

//forEach loop

movies.forEach (function(movie) {
	var result = "You have ";
	if(movie.hasWatched) {
		result += "watched ";
	} else {
		result += "not seen ";
	}
	result += "\"" + movie.name + "\" - ";
	result += movie.rating;
	console.log(result);
})

