const express = require('express');
const projectController = require('../controllers/project');
const router = express.Router();
const uploadController = require("../controllers/uploadController");

router.get('/', projectController.getAllProject);
router.post('/', projectController.createProject);
router.get('/:id', projectController.getOneProject);
router.post('/multiple-upload', uploadController.multipleUpload);
router.delete('/:id', projectController.deleteProject)

module.exports = router;
