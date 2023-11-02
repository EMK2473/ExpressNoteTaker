const router = require('express').Router();
const path = require('path');
// import router method from express
// import path method from nodeJS


// * `GET /notes` should return the `notes.html` file.
// * `GET *` should return the `index.html` file.


// when client wants to GET '/' (root), then respond with /public/index.html'
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'))
}); 

// notes:
// sets route for 'index.html' as response to client when GET req made to 'index.html'
// for when user accesses root route of app
// res object sends back the file 'index.html' to the client as the response
// __dirName is Node global variable for representing where the currently execturing js file is located
// path.join constructs absolute path of index.html file, joining '/public/index.html' and current executing js file
// res.sendFile sends the 'index.html' file as the response to the client's browser



// when client want's to GET '/notes', then respond with '../public/notes.html'
router.get('/notes', (req, res)=> {
    res.sendFile(path.join(__dirname, '../public/notes.html'))
}) 

// notes:
// sets route for 'notes.html' as response to clinet when GET req made to 'notes.html'
// for when user acesses /notes route of app
// res object sends back the file 'notes.html' to client as a response
// __dirName is Node global variable for representing where the currently execturing js file is located
// path.join constructs absolute path of index.html file, joining '/public/index.html' and current executing js file
// res.sendFile sends the 'index.html' file as the response to the client's browser


module.exports = router;
