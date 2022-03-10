const express = require('express');
const messageController = require('../controllers/message');
const router = express.Router();

router.get('/', messageController.getAllMessage);
router.post('/', messageController.createMessage);
router.get('/:id', messageController.getOneMessage);
router.delete('/:id', messageController.deleteProject);

module.exports = router;