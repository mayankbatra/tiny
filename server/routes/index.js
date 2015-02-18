var express = require('express');
var router = express.Router();
 
var auth = require('./auth.js');
var movies = require('./movies.js');
 

//Routes that can be accessed by any one
router.post('/login', auth.login);
 

//Routes that can be accessed only by autheticated users
router.get('/api/movies', movies.getAll);
router.get('/api/movies/:id', movies.getOne);
router.post('/api/movies', movies.create);
router.put('/api/movies/:id', movies.update);
 
module.exports = router;