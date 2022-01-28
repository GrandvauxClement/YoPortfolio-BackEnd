const mongoose = require("mongoose");

// see more : https://stackoverflow.com/questions/51862570/mongoose-why-we-make-mongoose-promise-global-promise-when-setting-a-mongoo
mongoose.Promise = global.Promise;

const run = async () => {
    return new Promise((resolve, reject) => {
        mongoose
            // connect mongoose to the database
            // see more : https://mongoosejs.com/docs/connections.html
            .connect(process.env.db, {
                useNewUrlParser: true,
                useUnifiedTopology: true
            })
            // if it is connected
            .then((mongooseDb) => {
                // all executed methods log output to console
                mongoose.set("debug", true);

                console.log(`Server is connected to database !`);
                console.log(`Server is being configured...`);
                resolve(mongooseDb);
            })
            // if there is an error
            .catch((err) => {
                console.log(err);
                reject(err);
            })
    });
}

module.exports = run;
