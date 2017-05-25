var mongoose = require('mongoose');

//Book Schema - passin an json object
var bookSchema = mongoose.Schema({
	title:{
		type: String,
		required: true
	},
	genre:{
		type: String,
		required: true
	},
	description:{
		type: String
	},
	author:{
		type: String,
		required: true
	},
	publisher:{
		type: String
	},
	pages:{
		type: String
	},
	image_url:{
		type: String
	},
	buy_url:{
		type: String
	},
	create_date:{
		type: Date,
		default: Date.now
	}
});

//allow access to this object from outside
var Book = module.exports = mongoose.model('book', bookSchema);

//GET ALL Books method - access this from the route
module.exports.getBooks = function(callback, limit){
	Book.find(callback).limit(limit); //find all or add a limit
}

//GET SINGLE Book method - access this from the route
module.exports.getBookById = function(id, callback){
	Book.findById(id, callback); //findById is a mongoose method
}

//ADD BOOK
module.exports.addBook = function(book, callback){
	Book.create(book, callback); //findById is a mongoose method
}

//DELETE BOOK
module.exports.removeBook = function(id, callback){
	var query = {_id: id};
	Book.remove(query, callback); //findById is a mongoose method
}

//UPDATE GENRE  
module.exports.updateGenre = function(id, genre, options, callback){ //the genre object is data from the form
	
	var query = {_id: id};
	var update = {
		title: book.title,
		genre: book.genre,
		description: book.description,
		author: book.author,
		publisher: book.publisher,
		pages: book.pages,
		image_url: book.image_url,
		buy_url: book.buy_url
	}
	Book.findOneAndUpdate(query, update, options, callback);  //findOneAndUpdate is a mongo function
}
