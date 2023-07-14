const ProductRepository = require("../repositories/product-repository");

class ProductService{
    static async getAllProduct (){
        const products = await ProductRepository.getAllProduct();
        if (!products){
            return null;
        }
        return products;
    }
    static async getProduct()


}
module.exports = ProductService;