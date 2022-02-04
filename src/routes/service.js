const express = require('express');
const serviceController = require('../controllers/service');
const router = express.Router();

router.get('/', serviceController.getAllService);
router.post('/', serviceController.createService);
router.get('/:id', serviceController.getOneService);

module.exports = router;
