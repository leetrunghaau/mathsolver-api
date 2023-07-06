const ProductRepository = require("../repositories/ProductRepository");

class ProductService{
    static async getAllProductService (){
        const products = await ProductRepository.getProducts();
        if (!products){
            return null;
        }
        const productDTOs = products.map((product) =>{
            return new productDTO(
                product.productId, 
                product.name, 
                product.categoryId, 
                product.brandId, 
                product.information, 
                product.quantity, 
                product.price, 
                product.createdAt, 
                product.modifiedAt );
        })
        return productDTOs;
    }

}
module.exports = ProductService;