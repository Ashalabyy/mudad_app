const { Config } = require('../Config/config');
const { structureResponse } = require('../utils/common_utils');
const serviceModal = require('../models/service_modal');
const {NotFoundException, CreateFailedException} = require('../utils/exceptions/database_exceptions');
class ServicesRepository {

getAllService = async ()=> {
    const services = await serviceModal.find();
if(!services){
    throw new NotFoundException('Services Not Found'); 
}
return structureResponse(services,1,"Success");

};

updateServices = async (body)=> {
    const id = body.id;
};

deleteServices = async (body)=> {
    const id = body.id;
};

addServices = async (body)=> {
    const service = new serviceModal({
        title:body.title,
        imageUrl:body.ImageUrl,
    });

    const result = await service.save();
    if(!result){
        throw new CreateFailedException('Service failed to be created'); 
    }
    return structureResponse(result, 1, "Success");
};
}

module.exports = new ServicesRepository;