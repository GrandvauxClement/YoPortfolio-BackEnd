const uploadMiddleware= require('../middleware/upload-middleware');

exports.multipleUpload = async (req, res) => {
    try {
        await uploadMiddleware(req, res);

        if (req.files.length <= 0) {
            return res.send(`You must select at least 1 file.`);
        }
        let stockNewFileName = [];
        for (let i =0; i<req.files.length; i++){
            stockNewFileName.push(req.files[i].filename);
        }
        return res.json(stockNewFileName);
    } catch (error) {
        console.log(error);
        if (error.code === "LIMIT_UNEXPECTED_FILE") {
            return res.send("Too many files to upload.");
        }
        return res.send(`Error when trying upload many files: ${error}`);
    }
};


/*
module.exports = {
    multipleUpload: multipleUpload
};*/
