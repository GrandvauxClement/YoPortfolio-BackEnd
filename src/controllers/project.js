const Project = require('../models/project');
const fs = require("fs");


exports.createProject = (req, res, next) => {

    const project = new Project({
        ...req.body,
        description: JSON.parse(req.body.description),
        tag: JSON.parse(req.body.tag),
        images: []
    });

    if (req.files) {
        console.log("Je passe là ! :) ");
        req.files.forEach((file) => {
            project.images.push(file.filename);
        });
    }

    project.save()
        .then(() => res.status(201).json({message: 'Project créé correctement ! :)'}))
        .catch(error => res.status(400).json({error}));
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

    Project.find().then(
        (project) => {
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

    Project.find({type: kind}).then(
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
    console.log("Mon project received", project);
    if (typeof project.images === "undefined"){
        project.images = [];
    }
    console.log("Mon images project", project.images);


    Project
        .findOne({_id: idProject})
        .exec()
        .then((data) => {
            if (data){

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
                    console.log("Je passe là ! :) ");
                    req.files.forEach((file) => {
                        project.images.push(file.filename);
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