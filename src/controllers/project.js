const Project = require('../models/project');
const fs = require("fs");
const { PutObjectCommand, CreateBucketCommand, S3Client } =  require("@aws-sdk/client-s3");
require("dotenv").config();

const s3 = new S3Client({
    region: "eu-west-3",
    credentials: {
        accessKeyId: process.env.YO_AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.YO_AWS_SECRET_ACCESS_KEY
    }
})

const uploadFile = async (fileName) => {
    // Read content from the file
    const fileContent = fs.readFileSync(`public/images/projets/${fileName.filename}`);

    // Setting up S3 upload parameters
    const params = {
        Bucket: process.env.S3_BUCKET,
        Key: fileName.filename, // File name you want to save as in S3
        Body: fileContent,
        ContentType: fileName.mimeType
    };
    // Uploading files to the bucket
    try {
        s3.send(new PutObjectCommand(params))
        console.log(
            "Successfully created " +
            params.Key +
            " and uploaded it to " +
            params.Bucket +
            "/" +
            params.Key
        );
    } catch (e) {
        console.log("Error", err);
    }
};

exports.createProject = (req, res, next) => {

    const project = new Project({
        ...req.body,
        description: JSON.parse(req.body.description),
        tag: JSON.parse(req.body.tag),
        images: []
    });

    if (req.files) {

        req.files.forEach(async (file) => {
            project.images.push(file.filename);
            await uploadFile(file);
        });
    }

    project.save()
        .then(() =>
            res
                .status(201)
                .json({message: 'Project créé correctement ! :)'})
        )
        .catch(error =>
            res.status(400).json({error})
        );
};

exports.getOneProject = (req, res, next) => {
    Project.findOne({
        _id: req.params._id
    }).then(
        (project)=> {
            res.status(200).json(project);
        }
    ).catch(
        (error) => {
            res.status(500).json({error});
        }
    );
};

exports.getAllProject = (req, res, next) => {

    Project
        .find()
        .sort({createdAt: -1})
        .then((project) => {
            res.status(200).json(project);
        }
    ).catch(
        (error) => {
            res.status(500).json({error});
        }
    );
};

exports.getProjectByKind = (req, res, next) => {
    const kind = req.body.kind;

    Project
        .find({type: kind})
        .sort({createdAt: -1})
        .then(
        (project) => {
            res.status(200).json(project);
        }
    ).catch(
        (error) => {
            res.status(500).json({error});
        }
    );
};

exports.deleteProject = (req, res, next) => {
    //TODO WHEN PROJECT DELETE go delete on amazon storage
    Project.findOne({
        _id: req.params.id
    }).then(
        (project)=> {
            project.images.map((fileName) => {
                try {
                    fs.unlinkSync(`${__dirname}/../../public/images/projets/${fileName}`);
                }catch (err){
                   /* res.status(500).json({err});*/
                    console.log("Delete image don t find", fileName)
                }
            })
            Project.deleteOne({
                _id: req.params.id
            }).then(
                (project) => {
                    res.status(200).json(project);
                }
            ).catch(
                (error) => {
                    res.status(500).json({error});
                }
            );
        }
    ).catch(
        (error) => {
            res.status(500).json({error});
        }
    );
}

exports.updateOne = (req, res, next) => {

    const project = req.body;
    const idProject = req.params.id;

    if (project.description) project.description = JSON.parse(project.description);
    if (project.tag) project.tag = JSON.parse(project.tag);

    if (typeof project.images === "undefined"){
        project.images = [];
    }
    Project
        .findOne({_id: idProject})
        .exec()
        .then(async (data) => {
            if (data) {

                if (data.images.length !== project.images.length) {
                    data.images.forEach((img) => {
                        if (!project.images.includes(img)) {
                            fs.unlink(`${__dirname}/../../public/images/projets/${img}`, (err) => {
                                if (err) console.log("file does not exist - do nothing");
                            });
                        }
                    })
                }
                if (req.files) {
                    await req.files.forEach(async (file) => {
                        project.images.push(file.filename);
                        await uploadFile(file);
                    });
                }

                Project.updateOne({_id: req.params.id}, project)
                    .then((project) => {
                        res.status(200).json(project);
                    })
                    .catch((err) => {
                        res.status(500).json({err});
                    });
            }
        })


}

exports.removeImage = (req, res, next) => {
    try {
        fs.unlinkSync(`${__dirname}/../../public/images/projets/${req.params.name}`);

    }catch (err){
      //  res.status(500).json({err});
        console.log("")
    }
    res.status(200).json({message: 'delete done'})
}