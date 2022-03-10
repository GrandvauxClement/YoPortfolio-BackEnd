const Project = require('../models/project');
const fs = require("fs");

exports.createProject = (req, res, next) => {
    const project = new Project({
        ...req.body
    });
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

exports.deleteProject = (req, res, next) => {
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

exports.updateOne = (req, res, next) => {
    Project.updateOne(
        {_id: req.params.id},
        {...req.body})
        .then((project) => {
            res.status(200).json(project);
        })
        .catch((err) => {
            res.status(500).json({err});
        });
}

exports.removeImage = (req, res, next) => {
    try {
        fs.unlinkSync(`${__dirname}/../../public/images/projets/${req.params.name}`);
        res.status(200).json({message: 'delete done'})
    }catch (err){
        res.status(500).json({err});
    }
}