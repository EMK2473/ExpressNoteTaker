const router = require('express').Router();
const path = require('path');

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index'))
}); // route handler for get requests, sends HTML as responses

router.get('/notes', (req, res)=> {
    res.sendFile(path.join(__dirname, '../public/notes'))
}) // route handler for get requests at /notes, sends HTML as response

module.exports = router;
