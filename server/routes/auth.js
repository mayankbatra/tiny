var jwt = require('jwt-simple');
var config = require("../config");


var auth = {

    login: function(req, res) {
        var username = req.body.username || '';
        var password = req.body.password || '';

        if (username == '' || password == '') {
            res.status(401);
            res.json({
                "status": 401,
                "message": "Invalid credentials"
            });
            return;
        }

        // Currently just calling a hardcoded function as not creating the users side of the API
        var user = auth.validate(username, password);

        if (!user) { // If authentication fails, we send a 401 back
            res.status(401);
            res.json({
                "status": 401,
                "message": "Invalid credentials"
            });
            return;
        }

        if (user) {
            // If authentication is success, we will generate a token
            // and dispatch it to the client
            res.json(genToken(user));
        }

    },

    validate: function(username, password) {
        // creating a hardcoded user
        var user = {
            name: 'mayank',
            role: 'admin',
            username: 'mayank.2408@gmail.com'
        };

        return user;
    },

    validateUser: function(username) {
        // After the login, this function is used to get user details without password
        var user = { 
            name: 'mayank',
            role: 'admin',
            username: 'mayank.2408@gmail.com'
        };

        return user;
    },

}

// private method - Creates an access token and using the secret app key. 
// Should be more secure with the key but a quick mockup
function genToken(user) {
    var dateObj = new Date();
    var expires = dateObj.setDate(dateObj.getDate() + 1); // expires after a day

	console.log(config);

    var token = jwt.encode({
        exp: expires
    }, config.secret);

    return {
        token: token,
        expires: expires,
        user: user
    };
}


module.exports = auth;