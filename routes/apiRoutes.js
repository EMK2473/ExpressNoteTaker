const { error } = require('console');
const fs = require('fs');
const router = require('express').Router(); // declaring the Router method from express to eport these HTML routes for HTML GET reqs
const { v4: uuidv4 } = require('uuid'); // 'Universally Unique Identifier' module 



// * `GET /api/notes` should read the `db.json` file and return all saved notes as JSON.
// * `POST /api/notes` should receive a new note to save on the request body, add it to the `db.json` file, and then return the new note to the client. You'll need to find a way to give each note a unique id when it's saved (look into npm packages that could do this for you).


// ToDo's:
// I need to...

// make a route handler for post reqs
// make it read db.json sychronously, and then parse db.json object into a JSON object
// store JSON object in new variable: dbArray
// store new data from req.body in variable with new uuid: newData
// append newData from JSON object into the db.json array, making dbArray push newData
// taking the parsed data and pushing it into new dbArray array
// stringify dbArray array into a JSON string, then use writeFileSync to write updated dbArray array with newData to db.json
// take res object and json it for the client to to read new dbArray array



// when client wants to GET /notes(req), then server returns(res) the db.json as a JSON response called: dbArray;
router.get('./api/notes', async (req, res) =>{
    const dbArray = await JSON.parse(fs.readFileSync('db/db.json', 'utf8')); 
    res.json(dbArray)
}); 

// notes:
// defines GET reqs to this route's end point @ './api/notes'
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


// when client wants to POST to /notes (req), then server returns(res) the db.json as a JSON response called dbArray
// we take the clients "postData" and add a 'uuid', then push the postData into the dbArray
// then we JSON.stringify the JSON'd dbArray, and write thhe postData into the file (essentially appending it)
// we then json the dbArray and return it as the response
router.post('./api/notes', (req, res) =>{
    const dbArray = JSON.parse(fs.readFileSync('db/db.json', 'utf8'));
    const postData = {
        title: req.body.title,
        text: req.body.text,
        id: uuidv4(),
    };
    dbArray.push(postData)
    fs.writeFileSync('db/db.json', JSON.stringify(dbArray))
    res.json(dbArray)
});



// notes:
// defines POST reqs to this route's end point @ './api/notes'
// route handler for POST reqs
// reads db.json synchronously, parses db.json into js object. 
// js object is stored in dbArray variable. new js object = dbArray
// newData creates new js object using data from the req.body and is given a uuid
// dbArray.push adds dbArray to the dB array; essentially appending newData to the existing data in db.json
// JSON.stringify converts dbArray array into a JSON string, then uses writeFileSync to write the updated dbArray array, including the new post, to db.json. 
// re.json(dbArray) sends a JSON response to the client that contains the update dbArray array.


module.exports = router;