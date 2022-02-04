const Service = require('../models/service');

exports.createService = (req, res, next) => {
    const serviceObject = JSON.parse(req.body.service);
    const Service = new Service({
        ...serviceObject
    });
    Service.save()
        .then(() => res.status(201).json({message: 'Service créé correctement ! :)'}))
        .catch(error => res.status(400).json({error}));
};

exports.getOneService = (req, res, next) => {
    Service.findOne({
        _id: req.params._id
    }).then(
        (service)=> {
            res.status(200).json(service);
        }
    ).catch(
        (error) => {
            res.status(500).json({error});
        }
    );
};

exports.getAllService = (req, res, next) => {
    Service.find().then(
        (service) => {
            res.status(200).json(service);
        }
    ).catch(
        (error) => {
            res.status(500).json({error});
        }
    );
};