// All require

const express = require("express");
const cors = require("cors");
const bodyParser = require('body-parser');
const path = require('path');
// All routes
const ProjectRoutes = require('./src/routes/project');
const MessageRoutes = require('./src/routes/message');
const ServiceRoutes = require('./src/routes/service');
const AuthRoute = require('./src/routes/user');
const mongoose = require('mongoose');
require("dotenv").config();
const app = express();
mongoose
    // connect mongoose to the database mongodb+srv://{USERNAME}:{PASSWORD}@cluster0.n5wob.mongodb.net/{NAME_DB}   `mongodb://localhost/yoPortfolio`
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
            res.setHeader('Access-Control-Allow-Origin', '*');
            res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
            res.setHeader('Access-Control-Allow-Credentials', 'true');
            res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, OPTIONS, DELETE');

//---- other code
            //Preflight CORS handler
            if(req.method === 'OPTIONS') {
                return res.status(200).json(({
                    body: "OK"
                }))
            }

        });
        app.use("/api/login", AuthRoute);
        app.use('/api/project', ProjectRoutes);
        app.use('/api/message', MessageRoutes);
        app.use('/api/service', ServiceRoutes);
        const PORT = process.env.PORT || 8080;
        app.listen(PORT, () => console.log(`Server is running in port ${PORT}`))
// Définition du dossier public comme static, pour dl les fichiers dedans
        // app.use("/public", express.static(path.join(__dirname,'public')));
      //  app.use("/public", express.static("public"));

    })
    // if there is an error
    .catch((err) => {
        console.log(err);
    })

module.exports = app;