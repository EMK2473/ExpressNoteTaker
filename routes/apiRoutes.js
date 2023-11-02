const { error } = require('console');
const fs = require('fs');
const router = require('express').Router(); // declaring the Router Method from express to eport these routes for these html pages from GET reqs
const { v4: uuidv4 } = require('uuid'); // 'Universally Unique Identifier' module 



// define GET reqs to this route's end point @ './api/notes'
router.get('./api/notes', async (req, res) =>{
    const dB = await JSON.parse(fs.readFileSync('db/db.json', 'utf8')); 
}); 
// using 'await' INSIDE an async function BECAUSE readFileSync is synchronous
// better way to handle a promise than .then
// sets up route handler for HTTP GET reqs on path to ./api/notes
// anonymous async function to handle reading file
// readFileSync, synchronously reads 'db.json' and then returns it as a string
// JSON.parse then parses the string and converts it to a js object
// async await reads contents of db.json snychronously, reading as text and returning as string


// alternate method
// router.get('./api/notes', async (req, res)=>{
//     try{ 
//         const data = await fs.promises.readFile('db/db.json', 'utf8');
//         const dB = JSON.parse(data)
//         res.json(dB);
//     } catch (error) {
//     console.error(error)
//     res.status(500).send('Server Error')
//     }
// });



module.exports = router;