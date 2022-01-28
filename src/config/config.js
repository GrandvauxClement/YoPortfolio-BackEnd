// get the constants in the .env file
require("dotenv").config();
// get the constants in the configuration file
const config = require("./config.json");

// paramètres de l'environnement du système

// if mode is specified in .env file, it will use its value
// if not, it is considered as dev mode
const mode = process.env.mode || "dev";

// get the port and the database link from the configuration file
const { port, db } = config[mode];

// specify the port which will be used by the server
process.env.port = port;
// specify the database which will be used by the server
process.env.db = db;
