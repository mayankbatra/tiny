var mongoose = require('mongoose');
var __ = require('underscore');

var MoviesSchema = new mongoose.Schema({
    title: "String",
    cast: [], //Would be an array of Object IDs if we create Actors and not just names
    genre: {
        type: String,
        enum: ['Comedy', 'Thriller', 'Romantic'] // Again would be linked to another master collection
    }
});


var MoviesModel = mongoose.model('Movie', MoviesSchema);

MoviesModel.getMovies = function(condition, callback) {
    MoviesModel.find(condition, callback);
}

MoviesModel.getMovie = function(id, callback) {
    console.log(id);
    MoviesModel.findById(id, callback);
}

MoviesModel.createMovie = function(movie, callback) {
    console.log(movie);
    MoviesModel.create(movie, callback);
}

MoviesModel.updateMovie = function(id, movie, callback) {
    //Add Server Side Validation
    MoviesModel.update({
        _id: id
    }, movie, {
        upsert: true
    }, callback);
}

exports.MoviesModel = MoviesModel;