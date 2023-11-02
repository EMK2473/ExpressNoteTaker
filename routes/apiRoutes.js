const router = require("express").Router();
const { v4: uuidv4 } = require("uuid"); 
const fs = require("fs");
const path = require('path');

router.get("/api/notes", async (req, res) => {
  const dbPath = path.join(__dirname, '../db/db.json')
  const dbArray = await JSON.parse(fs.readFileSync(dbPath, "utf8"))
  res.json(dbArray);
});

router.post("/api/notes", (req, res) => {
  const dbPath = path.join(__dirname, '../db/db.json')
  const dbArray = JSON.parse(fs.readFileSync("db/db.json", "utf8"));
  const postData = {
    title: req.body.title,
    text: req.body.text,
    id: uuidv4(),
  };
  dbArray.push(postData);
  fs.writeFileSync(dbPath, JSON.stringify(dbArray));
  res.json(dbArray);
});

module.exports = router;
