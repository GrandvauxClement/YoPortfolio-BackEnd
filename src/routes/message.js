const express = require('express');
const messageController = require('../controllers/message');
const router = express.Router();
const verifyJwt = require("../middleware/verifyJWT");

router.get('/', verifyJwt, messageController.getAllMessage);
router.post('/', messageController.createMessage);
router.get('/:id', verifyJwt, messageController.getOneMessage);
router.delete('/:id',verifyJwt, messageController.deleteProject);

module.exports = router;