var MoviesModel = require('../models/MoviesModel').MoviesModel;

var movies = {

    getAll: function(req, res) {
        condition = req.query;
        MoviesModel.getMovies(condition,function(err, movies) {
            if (!err)
                res.status(200).json(movies);
            else
                res.status(404).json(err);

        })
    },

    getOne: function(req, res) {
        var id = req.params.id;
        console.log(req.params);
        MoviesModel.getMovie(id, function(err, movie) {
            if (!err)
                res.json(movie);
            else
                res.status(404).json(err);

        })
    },

    create: function(req, res) {
        var movie = req.body;
        MoviesModel.createMovie(movie, function(err, movie) {
            if (!err)
                res.status(201).send({
                    "uri": "api/movies/" + movie.id
                });
            else
                res.status(500).json(err);

        })
    },

    update: function(req, res) {
        var movie = req.body;
        var id = req.params.id;

        MoviesModel.updateMovie(id, movie, function(err, movie) {
            if (!err)
                res.status(200).send({
                    "uri": "api/movies/" + movie.id
                });
            else
                res.status(500).json(err);

        })
    }
};


module.exports = movies;