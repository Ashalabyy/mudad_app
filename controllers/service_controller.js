const ServicesRepository = require('../repositiories/services_repositiory');

class servicesController {
 getAllServices = async (req, res, next) => {
    console.log(req.body);
    const response = await ServicesRepository.getAllService();
    res.send(response); 
 };



 addServices = async (req, res, next) => {
    const response = await ServicesRepository.addServices(req.body);
    res.send(response); 
 };
}

module.exports = new servicesController;