const express = require("express");
const path = require('path')
const htmlRoutes = require("./routes/htmlRoutes");
const apiRoutes = require("./routes/apiRoutes");
const PORT = process.env.PORT || 3001;
const app = express();

//middleware
app.use(express.urlencoded({ extended: false })); // parse URL encoded data 
app.use(express.json()); // parse JSON data
app.use(express.static("public")); // sets static files 
app.use(htmlRoutes); // mounts router for handling HTML routes
app.use(apiRoutes); // mounts router for handling API routes

app.listen(PORT, () => {
  console.log(`Running at http://localhost:${PORT}`);
}); // starts server and listens for incoming requests at localhost:3001