const express = require('express');
const router = express.Router();
const awaitHandlerFactory = require('../middleware/handler_factory');

const ordersController = require('../controllers/order_controller');

router.post('/', awaitHandlerFactory(ordersController.makeOrder)); 



module.exports = router;