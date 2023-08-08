const { generateId } = require('../helpers/generate-key');
const ImportProductRepository = require('../repositories/import-product-repository')

class ImportProductService {
    static async getImportProductById(importProductId){
        const importProduct = await ImportProductRepository.getImportProductById(importProductId);
        if(!importProduct){
            return null;
        }
        return importProduct
    }
    static async getAllImportProduct(){
        const importsProduct = await ImportProductRepository.getAllImportProduct();
        if(importsProduct.length === 0 ){
            return null;
        }
        return importsProduct
    }
    static async getAllImportProductByProductId(productId){
        const importsProduct = await ImportProductRepository.getAllImportProductByProductId(productId);
        if(importsProduct.length === 0 ){
            return null;
        }
        return importsProduct
    }
    static async createImportProduct(importProductData){
        importProductData.importProductId = generateId();
        importProductData.createdAt = new Date();
        importProductData.modified = new Date();
        const importProduct = await ImportProductRepository.createImportProduct(importProductData);
        if(!importProduct){
            return null;
        }
        return importProduct
    }
    static async updateImportProduct(importProductId, importProductData){
        importProductData.modified = new Date();
        const importProduct = await ImportProductRepository.updateImportProduct(importProductId,importProductData);
        if(!importProduct){
            return null;
        }
        return importProduct
    }
    static async deleteImportProduct(importProductId){
        const importProduct = await ImportProductRepository.deleteImportProduct(importProductId);
        if(importProduct <=0){
            return null;
        }
        return importProduct
    }

    
}
module.exports = ImportProductService;

