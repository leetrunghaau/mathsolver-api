const { generateId } = require("../helpers/generate-key");
const ProductRepository = require("../repositories/product-repository");

class ProductService{
    static async getProductById(productId){
        const product = await ProductRepository.getProductById(productId);
        if(!product){
            return null;
        }
        return product;
    }
    static async getAllProduct (){
        const products = await ProductRepository.getAllProduct();
        if (products.length  === 0){
            return null;
        }
        
        return products;
    }
    static async createProduct(productData){
        productData.productId = generateId();
        productData.createdAt = new Date();
        productData.modifiedAt = new Date();
        const product = await ProductRepository.createProduct(productData);
        if(!product){
            return null;
        }
        return product;
    }
    static async updateProductById(productId, productData){
        productData.modifiedAt = new Date();
        const product = await ProductRepository.updateProductById(productId, productData);
        if(!product){
            return null;
        }
        return product;

    }
    static async deleteProductById(productId){
        const product =await ProductRepository.deleteProductById(productId);
        if(product <=0){
            return null;
        }
        return product;
    }


}
module.exports = ProductService;