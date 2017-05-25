var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

//add the middleware for body-parser
app.use(bodyParser.json());

//import the Genre.find and book.find in to the app.js to use in the route
Genre = require('./models/genre');
Book = require('./models/book');

//connect to mongoose (mongodb)
mongoose.connect('mongodb://localhost/bookstore');
var db = mongoose.connection;

//set up the route in json format
app.get('/', function(req, res){    //request, responce object
 	res.send('Please use2 /api/books or /api/genres'); //send to the browser
});



/***************
GENRE
****************/

//GET ALL GENRES
app.get('/api/genres', function(req, res){    //request, responce object
 	Genre.getGenres(function(err, genres){ //the function is the callback
 		if(err){
 			throw err;
 		}
 		res.json(genres); //
 	});
});

//CREATE GENRE (POST)
// THIS IS NOT SAFE FOR PRODUCTION - it needs validation
app.post('/api/genres', function(req, res){
	var genre = req.body; //body uses bodyParser - takes everything from the form and puts it in an object
 	Genre.addGenre(genre, function(err, genre){ //the function is the callback
 		if(err){
 			throw err;
 		}
 		res.json(genre); //
 	});
});

//UPDATE GENRE
app.post('/api/genres/:_id', function(req, res){
	var id = req.params._id;
	var genre = req.body; //body uses bodyParser - takes everything from the form and puts it in an object
 	Genre.updateGenre(id, genre, {}, function(err, genre){ //the function is the callback
 		if(err){
 			throw err;
 		}
 		res.json(genre); //
 	});
});

//DELETE GENRE
app.post('/api/genres/:_id', function(req, res){
	var id = req.params._id;
 	Genre.removeGenre(id, function(err, genre){ //the function is the callback
 		if(err){
 			throw err;
 		}
 		res.json(genre); //
 	});
});


/***************
BOOK
****************/

//GET ALL BOOKS
app.get('/api/books', function(req, res){    //request, responce object
 	Book.getBooks(function(err, books){ //the function is the callback
 		if(err){
 			throw err;
 		}
 		res.json(books); //
 	});
});

//GET SINGLE BOOK
app.get('/api/books/:_id', function(req, res){    //request, responce object
 	Book.getBookById(req.params._id, function(err, book){ //the function is the callback
 		if(err){
 			throw err;
 		}
 		res.json(book); //
 	});
});

//CREATE BOOK (POST)
// THIS IS NOT SAFE FOR PRODUCTION
app.post('/api/books', function(req, res){
	var book = req.body; //body uses bodyParser - takes everything from the form and puts it in an object
 	Book.addBook(book, function(err, book){ //the function is the callback
 		if(err){
 			throw err;
 		}
 		res.json(book); //
 	});
});

//DELETE BOOK
app.post('/api/books/:_id', function(req, res){
	var id = req.params._id;
 	Book.removeBook(id, function(err, book){ //the function is the callback
 		if(err){
 			throw err;
 		}
 		res.json(book); //
 	});
});

//UPDATE BOOK
app.post('/api/books/:_id', function(req, res){
	var id = req.params._id;
	var book = req.body; //body uses bodyParser - takes everything from the form and puts it in an object
 	Book.updateBook(id, book, {}, function(err, book){ //the function is the callback
 		if(err){
 			throw err;
 		}
 		res.json(book); //
 	});
});


//run app on port 3000
app.listen(3000);
