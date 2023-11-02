const { error } = require('console');
const fs = require('fs');
const router = require('express').Router(); // declaring the Router Method from express to eport these routes for these html pages from GET reqs
const { v4: uuidv4 } = require('uuid'); // 'Universally Unique Identifier' module 
// requires npm i uuid@3.4.0

// I need to:
// make a route handler for post reqs
// make it read db.json sychronously, parse db.json object into a JSON object
// store JSON object in new variable dbArray
// store new data from req.body in variable with new uuid: newData
// append newData from JSON object into the db.json array, making dbArray push newData
// taking the parsed data and pushing it into new dbArray array
// stringify dbArray array into a JSON string, then use writeFileSync to write updated dbArray array with newData to db.json
// take res object and json it for the client to to read new dbArray array




// define GET reqs to this route's end point @ './api/notes'
router.get('./api/notes', async (req, res) =>{
    const dbArray = await JSON.parse(fs.readFileSync('db/db.json', 'utf8')); 
    res.json(dbArray)
}); 

// ensuring fs.readFileSync is treated in asynchronous manner, allowing OTHER async functions to continue while waiting for file reading to complete
// using 'await' INSIDE an async function BECAUSE readFileSync is synchronous
// seems more effecient than handling promise with .then
// sets up route handler for HTTP GET reqs on path to ./api/notes
// anonymous async function to handle reading file
// readFileSync, synchronously reads 'db.json' and then returns it as a string
// JSON.parse then parses the string and converts it to a js object
// async await reads contents of db.json snychronously, reading as text and returning as string


// alternate method for learning
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


// define POST reqs to this route's end point @ './api/notes'
router.post('./api/notes', (req, res) =>{
    const dbArray = JSON.parse(fs.readFileSync('db/db.json', 'utf8'));
    const newData = {
        title: req.body.title,
        text: req.body.text,
        id: uuidv4(),
    };
    dbArray.push(newData)
    fs.writeFileSync('db/db.json', JSON.stringify(dbArray))
    res.json(dbArray)
});

// route handler for POST reqs
// reads db.json synchronously, parses db.json into js object. 
// js object is stored in dbArray variable. new js object = dbArray
// newData creates new js object using data from the req.body and is given a uuid
// dbArray.push adds dbArray to the dB array; essentially appending newData to the existing data in db.json
// JSON.stringify converts dbArray array into a JSON string, then uses writeFileSync to write the updated dbArray array, including the new post, to db.json. 
// re.json(dbArray) sends a JSON response to the client that contains the update dbArray array.


module.exports = router;