const express = require("express");
const studentsRoutes = express.Router();
const fs = require("fs");
const path = require("path");

let dbjsonData = fs.readFileSync("././db.json", "utf-8");
let dbArrays = JSON.parse(dbjsonData);

studentsRoutes.get("/get", (req, res) => {
  res.send(dbArrays.students);
});

module.exports = studentsRoutes;
