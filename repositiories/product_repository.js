const { Config } = require('../Config/config');
const { structureResponse} = require('../utils/common_utils');
const ProductModal = require('../models/product_modal');
const {NotFoundException, CreateFailedException} = require('../utils/exceptions/database_exceptions');
class ProductRepository {

    getAllProducts = async ()=> {
        const products = await ProductModal.find();
        if(!products) {
            throw new NotFoundException('Products Not Found'); 
        }
        return structureResponse(products,1,"Success");
    };

    getProductById = async (body)=> {
        const id = body.id;
    };

    addProducts = async (body)=> {
        const product = new ProductModal({
            title:body.title,
            imageUrl:body.imageUrl,
            price:body.price,
            qty:body.qty
        });

        const result = await product.save();
         if(!result){
            throw new CreateFailedException('Product failed to be created'); 
        }

         return structureResponse(result,1,"Success");
    };

    deleteProductById = async (body)=> {
        const id = body.id;
    };

    updateProductById = async (body)=> {
        const id = body.id;
    };

}

module.exports = new ProductRepository;