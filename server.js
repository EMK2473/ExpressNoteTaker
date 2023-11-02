const express = require("express");
const path = require('path')
const htmlRoutes = require("./routes/htmlRoutes");
const apiRoutes = require("./routes/apiRoutes");
const PORT = process.env.PORT || 3001;
const app = express();
// added nodemon for easy server handling

//middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));
app.use(htmlRoutes);
app.use(apiRoutes);

app.listen(PORT, () => {
  console.log(`Running at http://localhost:${PORT}`);
});

// expnoteapp
