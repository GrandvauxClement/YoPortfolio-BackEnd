// All require

const express = require("express");
const cors = require("cors");
const bodyParser = require('body-parser');
const path = require('path');
// All routes
const ProjectRoutes = require('../routes/project');
const MessageRoutes = require('../routes/message');
const ServiceRoutes = require('../routes/service');
const mongoose = require('mongoose');

const app = express();
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
        // Enable CORS for everything
// See more : https://expressjs.com/en/resources/middleware/cors.html
        app.use(cors());

// The body-parser
        app.use(bodyParser.json());
// Define all Routes of API
        app.listen(9000, () => console.log('App is running'))

        app.use('/api/project', ProjectRoutes);
        app.use('/api/message', MessageRoutes);
        app.use('/api/service', ServiceRoutes);

// Définition du dossier public comme static, pour dl les fichiers dedans
        app.use("/public", express.static(path.join(__dirname + '\\..\\..\\public')));

    })
    // if there is an error
    .catch((err) => {
        console.log(err);
    })

module.exports = app;