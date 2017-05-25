var mongoose = require('mongoose');

//Genre Schema - passin an json object
var genreSchema = mongoose.Schema({
	name:{
		type: String,
		required: true
	},
	create_date:{
		type: Date,
		default: Date.now
	}
});

//allow access to this object from outside
var Genre = module.exports = mongoose.model('Genre', genreSchema);

//GET ALL genres method - access this from the route - 
module.exports.getGenres = function(callback, limit){
	Genre.find(callback).limit(limit); //find all or add a limit
}

//ADD GENRE 
module.exports.addGenre = function(genre, callback){ //the genre object is data from the form
	Genre.create(genre, callback);
}

//DELETE GENRE
module.exports.removeGenre = function(id, callback){
	var query = {_id: id};
	Genre.remove(query, callback); //findById is a mongoose method
}

//UPDATE GENRE  
module.exports.updateGenre = function(id, genre, options, callback){ //the genre object is data from the form
	
	var query = {_id: id};
	var update = {
		name: genre.name
	}
	Genre.findOneAndUpdate(query, update, options, callback);  //findOneAndUpdate is a mongo function
}


