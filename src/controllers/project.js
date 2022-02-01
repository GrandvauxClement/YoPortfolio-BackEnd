const Project = require('../models/project');

exports.createProject = (req, res, next) => {
    const projectObject = JSON.parse(req.body.project);
    const project = new Project({
        ...projectObject
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
        (projects) => {
            res.status(200).json(projects);
        }
    ).catch(
        (error) => {
            res.status(500).json({error});
        }
    );
};