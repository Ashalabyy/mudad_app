const { Config } = require('../Config/config');
const { structureResponse} = require('../utils/common_utils');
const orderModal = require('../models/order_modal');

const {NotFoundException, CreateFailedException} = require('../utils/exceptions/database_exceptions');
class OrderRepository {

makeOrder = async (body)=> {
const order = new orderModal({
    products:body.products,
    userId:body.userId,
    createdAt:body.createdAt,
    location:body.location,
    total:body.total,
});
const result = await order.save();

if(!result){
    throw new CreateFailedException('Product failed to be created'); 
}

return structureResponse(result,1,"Success");
}

getAllOrders = async ()=> {
    const result = await orderModal.find();
    if(!result){
        throw new NotFoundException('Orders Not Found'); 
    }
    return structureResponse(result,1,"Success");
}

getOrderById = async (body)=> {}

updateOrderById = async (body)=> {}

}

module.exports = new OrderRepository;