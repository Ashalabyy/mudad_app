const OrdersRepository = require('../repositiories/orders_repositiory');

class OrdersController {
 makeOrder = async(req,res,next) => {
    console.log(req.body);
    const response = await OrdersRepository.makeOrder(req.body);
    res.send(response); 
 }
}

module.exports = new OrdersController;