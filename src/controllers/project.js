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