const express = require('express');
const router = express.Router();
const awaitHandlerFactory = require('../middleware/handler_factory');

const productsController = require('../controllers/product_controller');

router.get('/', awaitHandlerFactory(productsController.getAllProducts)); 

router.post('/', awaitHandlerFactory(productsController.addProduct)); 

module.exports = router;