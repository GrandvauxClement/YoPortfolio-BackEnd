const express = require('express');
const projectController = require('../controllers/project');
const router = express.Router();
const uploadController = require("../controllers/uploadController");
const verifyJwt = require("../middleware/verifyJWT");

router.get('/', projectController.getAllProject);
router.post('/', verifyJwt, projectController.createProject);
router.post('/multiple-upload', verifyJwt, uploadController.multipleUpload);
router.post('/:id', verifyJwt, projectController.updateOne);
router.get('/:id', projectController.getOneProject);
router.delete('/:id', verifyJwt, projectController.deleteProject)
router.delete('/removeImage/:name', verifyJwt, projectController.removeImage);
module.exports = router;
