const { generateId } = require('../helpers/generate-key');
const BrandRepository = require('../repositories/brand-repository')
class BrandService {
    static async getBrandById(brandId) {
        const brand = await BrandRepository.getBrandById(brandId)
        if (!brand) {
            return null;
        }
        return brand;
    }
    static async getAllBrand(){
        const brands = await BrandRepository.getAllBrand();
        if(brands.length === 0){
            return null;
        }
        return brands;
    }
    static async createBrand(brandData){
        brandData.brandId =  generateId();
        const brand = await BrandRepository.createBrand(brandData);
        if(!brand){
            return null;
        }
        return brand;
    }
    static async updateBrandById(brandId, brandData){
        const brand = await BrandRepository.updateBrandById(brandId, brandData);
        if(!brand){
            return null;
        }
        return brand;
    }
    static async deleteBrandById(brandId){
        const brand = await BrandRepository.deleteBrandById(brandId);
        if(brand <=0){
            return null;
        }
        return brand;
    }
}
module.exports = BrandService;

