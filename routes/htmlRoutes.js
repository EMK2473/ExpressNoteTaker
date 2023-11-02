const router = require('express').Router();
const path = require('path');

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'))
}); // sets route for 'index.html' as response to client when GET req made to 'index.html'

router.get('/notes', (req, res)=> {
    res.sendFile(path.join(__dirname, '../public/notes.html'))
}) // sets route for 'notes.html' as response to clinet when GET req made to 'notes.html'
