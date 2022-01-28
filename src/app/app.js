// All require
const express = require("express");
const runMongoose = require("../mongoose");
const cors = require("cors");
const bodyParser = require('body-parser');

// Create an Express server
const app = express();

// Enable CORS for everything
// See more : https://expressjs.com/en/resources/middleware/cors.html
app.use(cors());
// The body-parser
app.use(bodyParser.json());
// Définition du dossier public comme static, pour dl les fichiers dedans
app.use("/static", express.static("public"));

runMongoose().then(() => {
    console.log('Ready to use');
});

module.exports = app;