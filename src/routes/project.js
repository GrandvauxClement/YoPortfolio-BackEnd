const express = require('express');
const projectController = require('../controllers/project');
const router = express.Router();
const uploadController = require("../controllers/uploadController");
const verifyJwt = require("../middleware/verifyJWT");
const multer = require("../middleware/upload-middleware");
const handler = require("../api/handler");

router.get('/', handler, projectController.getAllProject);
router.post('/byKind', handler, projectController.getProjectByKind);
router.post(
    '/',
    handler,
    verifyJwt,
    multer.array('images', 8),
    projectController.createProject
);

/*router.post(
    '/multiple-upload',
    verifyJwt,
    multer.array('multipleImages', 8),
    uploadController.multipleUpload
);*/

router.post(
    '/:id',
    handler,
    verifyJwt,
    multer.array('images', 8),
    projectController.updateOne
);

router.get('/:id', handler, projectController.getOneProject);
router.delete('/:id', handler, verifyJwt, projectController.deleteProject)
router.delete('/removeImage/:name', handler,verifyJwt, projectController.removeImage);
module.exports = router;
