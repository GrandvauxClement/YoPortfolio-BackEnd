const bcrypt = require("bcrypt");
module.exports = [
    {
        email: "clement.grandvaux@hotmail.com",
        password: bcrypt.hashSync("Admin123", bcrypt.genSaltSync(10)),
    }
]