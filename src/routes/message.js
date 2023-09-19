const express = require('express');
const messageController = require('../controllers/message');
const router = express.Router();
const verifyJwt = require("../middleware/verifyJWT");

const handler = require("../api/handler")

router.get('/', handler, verifyJwt, messageController.getAllMessage);
router.post('/', handler, messageController.createMessage);
router.get('/:id', handler, verifyJwt, messageController.getOneMessage);
router.delete('/:id', handler, verifyJwt, messageController.deleteProject);

module.exports = router;