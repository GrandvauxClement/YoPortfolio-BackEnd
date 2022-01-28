// define global constants (port, database)
require("./config/config");

const app = require("./app/app.js");

// routes used by the server
// the client can call them through HTTP requests


// default server route
app.get("/", (req, res) => {
    res.send("Hello World!");
});

// server listen to port
app.listen(process.env.port, () => {
    console.log(`Server is listening http://localhost:${process.env.port}`);
});

module.exports = app;