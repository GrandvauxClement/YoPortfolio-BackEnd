
const path = require("path");
const multer = require("multer");
const { v4: uuidv4 } = require("uuid");

let storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, path.join(`${__dirname}/../../public/images/projets`));
    },
    filename: (req, file, callback) => {

        let filename = `${Date.now()}-bezkoder-${uuidv4()}`;
        if (file.mimetype == "image/jpeg") {
            filename += ".jpg"
        } else if(file.mimetype == "image/png"){
            filename += ".png"
        }
        callback(null, filename);
    }
});

const fileFilter = (req, file, cb) => {
    // only accept JPEG and PNG formats
    if (file.mimetype == "image/jpeg" || file.mimetype == "image/png") {
        cb(null, true);
    } else {
        cb(null, false);
    }
};
/*let uploadFiles = multer({ storage: storage }).any("multi-files");
let uploadFilesMiddleware = util.promisify(uploadFiles);*/
module.exports = multer({storage: storage, fileFilter: fileFilter});
