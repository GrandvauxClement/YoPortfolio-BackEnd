const util = require("util");
const path = require("path");
const multer = require("multer");
let storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, path.join(`${__dirname}/../../public/images/projets`));
    },
    filename: (req, file, callback) => {
        const match = ["image/png", "image/jpeg"];
        if (match.indexOf(file.mimetype) === -1) {
            let message = `${file.originalname} is invalid. Only accept png/jpeg.`;
            return callback(message, null);
        }
        let filename = `${Date.now()}-bezkoder-${file.originalname}`;
        callback(null, filename);
    }
});
let uploadFiles = multer({ storage: storage }).any("multi-files");
let uploadFilesMiddleware = util.promisify(uploadFiles);
module.exports = uploadFilesMiddleware;
