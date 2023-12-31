const router = require("express").Router();
const { v4: uuidv4 } = require("uuid");
const fs = require("fs");
const path = require("path");
const { json } = require("express");
const { stringify } = require("querystring");

router.get("/api/notes", async (req, res) => {
  const dbPath = path.join(__dirname, "../db/db.json");
  const dbArray = await JSON.parse(fs.readFileSync(dbPath, "utf8"));
  res.json(dbArray);
}); // api route handler for HTTP GET reqs at api/notes

router.post("/api/notes", (req, res) => {
  const dbPath = path.join(__dirname, "../db/db.json");
  const dbArray = JSON.parse(fs.readFileSync(dbPath, "utf8"));
  const postData = {
    title: req.body.title,
    text: req.body.text,
    id: uuidv4(),
  };
  dbArray.push(postData);
  fs.writeFileSync(dbPath, JSON.stringify(dbArray));
  res.json(dbArray);
}); // route handler for HTTP POST reqs at api/notes

router.delete("/api/notes/:id", (req, res) => {
  const dbPath = path.join(__dirname, "../db/db.json");
  const dbArray = JSON.parse(fs.readFileSync(dbPath, "utf8"));
  const idToDelete = req.params.id;
  const newArray = dbArray.filter((note) => {
    return note.id !== idToDelete;
  });
  fs.writeFileSync(dbPath, JSON.stringify(newArray));
  res.json(); // route handler for HTTP DELETE reqs at api/notes
});

module.exports = router;
