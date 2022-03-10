const Message = require('../models/message');

exports.createMessage = (req, res, next) => {
    console.log(req.body.message);
 //   const messageObject = JSON.parse(req.body.message);
    const message = new Message({
        ...req.body.message
    });
    message.save()
        .then(() => res.status(201).json({message: 'Message créé correctement ! :)'}))
        .catch(error => res.status(400).json({error}));
};

exports.getOneMessage = (req, res, next) => {
    Message.findOne({
        _id: req.params._id
    }).then(
        (message)=> {
            res.status(200).json(message);
        }
    ).catch(
        (error) => {
            res.status(500).json({error});
        }
    );
};

exports.getAllMessage = (req, res, next) => {
    Message.find().then(
        (message) => {
            res.status(200).json(message);
        }
    ).catch(
        (error) => {
            res.status(500).json({error});
        }
    );
};

exports.deleteProject = (req, res, next) => {
    Message.deleteOne({
        _id: req.params.id
    }).then(
        (message) => {
            res.status(200).json(message);
        }
    ).catch(
        (error) => {
            res.status(500).json({error});
        }
    );
}