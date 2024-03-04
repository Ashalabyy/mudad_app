const ProductsRepository = require('../repositiories/product_repository');

class productsController {
    getAllProducts = async (req, res, next) => {
        console.log(req.body);
        const response = await ProductsRepository.getAllProducts();
        res.send(response); 
     };
   
   addProduct = async(req,res,next)  => {
    console.log(req.body);
    const response = await ProductsRepository.addProducts(req.body);
    res.send(response); 
   };
}

module.exports = new productsController;