const ProductRepository = require("../repositories/product-repository");

class ProductService{
    static async getAllProductService (){
        const products = await ProductRepository.getProducts();
        if (!products){
            return null;
        }
        return products;
    }

}
module.exports = ProductService;