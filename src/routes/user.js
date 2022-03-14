const express = require('express');
const loginController = require('../controllers/login');
const router = express.Router();
const verifyJwt = require("../middleware/verifyJWT");

router.post('/', loginController.login);
router.get('/checkToken', verifyJwt, loginController.checkValidityToken);

module.exports = router;