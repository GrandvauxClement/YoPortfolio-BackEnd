const express = require('express');
const projectController = require('../controllers/project');
const router = express.Router();

router.get('/', projectController.getAllProject);
router.post('/', projectController.createProject);
router.get('/:id', projectController.getOneProject);

module.exports = router;
