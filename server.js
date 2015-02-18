var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var app = express();


app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());


// Connect to the database on local mongo DB. No uername and password
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/tiny');


app.all('/*', function(req, res, next) {
    // CORS headers
    res.header("Access-Control-Allow-Origin", "*"); // restrict it to the tinyowl domains
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    // Set custom headers for CORS
    res.header('Access-Control-Allow-Headers', 'Content-type,Accept,X-Access-Token,X-Key');
    if (req.method == 'OPTIONS') {
        res.status(200).end();
    } else {
        next();
    }
});


// Will perform authorization for api requests
app.all('/api/*', [require('./server/routes/validateRequest')]);


app.use('/', require('./server/routes'));

/// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

/// error handlers
app.use(function(err, req, res, next) {
    console.log(err);
    res.status(err.status || 500);
    res.json(err);
});


module.exports = app;