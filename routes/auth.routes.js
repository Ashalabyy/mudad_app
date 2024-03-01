const express = require('express');
const router = express.Router();
const awaitHandlerFactory = require('../middleware/handler_factory');

const authController = require('../controllers/auth_controller');

const { validateLogin, validateRefresh } = require('../middleware/validators/auth_validator_middleware');
router.post('/register', validateLogin, awaitHandlerFactory(authController.registerUser)); 
router.post('/login', validateLogin, awaitHandlerFactory(authController.userLogin)); 
router.post('/token', validateRefresh, awaitHandlerFactory(authController.refreshToken)); 

module.exports = router;