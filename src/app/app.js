// All require

const express = require("express");
const cors = require("cors");
const bodyParser = require('body-parser');
const path = require('path');
// All routes
const ProjectRoutes = require('../routes/project');
const MessageRoutes = require('../routes/message');
const ServiceRoutes = require('../routes/service');
const AuthRoute = require('../routes/user');
const mongoose = require('mongoose');
// require("dotenv").config();
const app = express();
mongoose
    // connect mongoose to the database mongodb+srv://admin:3TmfTX1cK7Y6rCz3@cluster0.n5wob.mongodb.net/test   `mongodb://localhost/yoPortfolio`
    // see more : https://mongoosejs.com/docs/connections.html
    .connect(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then((mongooseDb) => {
        // all executed methods log output to console
        mongoose.set("debug", true);

        console.log(`Server is connected to database ! ${mongooseDb}`);
        console.log(`Server is being configured...`);
        // Enable CORS for everything
// See more : https://expressjs.com/en/resources/middleware/cors.html
        app.use(cors());

// The body-parser
        app.use(bodyParser.json());
// Define all Routes of API
     //   app.listen(9000, () => console.log('App is running'))
        app.get("/", (req, res) => {
            res.send("Hello World!");
        });
        app.use('/api/login', AuthRoute);
        app.use('/api/project', ProjectRoutes);
        app.use('/api/message', MessageRoutes);
        app.use('/api/service', ServiceRoutes);

// Définition du dossier public comme static, pour dl les fichiers dedans
        app.use("/public", express.static(path.join(__dirname,'public')));

    })
    // if there is an error
    .catch((err) => {
        console.log(err);
    })

module.exports = app;