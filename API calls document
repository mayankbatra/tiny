API calls document

Authentication is required to access REST API's. If client is not authenticated, it should first call the following to get authenticated and get an access code.


POST http://localhost:3000/login
body: {”username” : ”mayank.2408@gmail.com”, ”password” : ”ANY”} // Currently hardcoded

get back an access code and a key, with a set expiry time.
Pass the following header for the requests

Content-Type: application/json
x-key: mayank.2408@gmail.com //key
x-access-token: eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE0MjQzNDg1ODg4NTB9.9AgjsFh4JBUo8LPGGb4zdebgHdv6V10jR-egRnvwyzg // Access code

1. Get List of All Movies
GET http://localhost:3000/api/movies 

2. Get List of All Movies Filtered by Genre
GET http://localhost:3000/api/movies?genre=Thriller

3. Get a single movie by ID
GET http://localhost:3000/api/movies/id

4. Create a new movie object 
POST http://localhost:3000/api/movies
body: {"title":"Die Hard 2","genre":"Thriller","cast":["Bruce Willis","William Atherton","Bonnie Bedelia","Franco Nero"]}

5. Update a movie object
PUT http://localhost:3000/api/movies/id
body: {"title":"Die Hard 2","genre":"Thriller","cast":["Bruce Willis","William Atherton","Bonnie Bedelia","Franco Nero"]}

