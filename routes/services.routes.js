const express = require('express');
const router = express.Router();
const awaitHandlerFactory = require('../middleware/handler_factory');

const servicesController = require('../controllers/service_controller');

router.get('/', awaitHandlerFactory(servicesController.getAllServices)); 

router.post('/', awaitHandlerFactory(servicesController.addServices)); 

module.exports = router;