const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const db = require("./models");

db.mongoose
  .connect(db.url)
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Alim application test." });
});

require("./routes/customer.routes")(app);

module.exports = app;
