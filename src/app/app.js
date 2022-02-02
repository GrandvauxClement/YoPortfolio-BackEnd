// All require
const express = require("express");
const cors = require("cors");
const bodyParser = require('body-parser');
const path = require('path');
// All routes
const ProjectRoutes = require('../routes/project');
const MessageRoutes = require('../routes/message');
const mongoose = require('mongoose');

mongoose
    // connect mongoose to the database
    // see more : https://mongoosejs.com/docs/connections.html
    .connect("mongodb://localhost/yoPortfolio", {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    // if it is connected
    .then((mongooseDb) => {
        // all executed methods log output to console
        mongoose.set("debug", true);

        console.log(`Server is connected to database !`);
        console.log(`Server is being configured...`);
    })
    // if there is an error
    .catch((err) => {
        console.log(err);
    })
// Create an Express server
const app = express();

// Enable CORS for everything
// See more : https://expressjs.com/en/resources/middleware/cors.html
app.use(cors());
// The body-parser
app.use(bodyParser.json());
// Define all Routes of API
app.use('/api/project', ProjectRoutes);
app.use('/api/message', MessageRoutes);

// Définition du dossier public comme static, pour dl les fichiers dedans
app.use("/static", express.static(path.join(__dirname, 'public')));





module.exports = app;