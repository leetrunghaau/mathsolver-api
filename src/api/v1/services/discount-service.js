const { generateId } = require('../helpers/generate-key');
const DiscountRepository = require('../repositories/discount-repository')
class DiscountService {
    static async getDiscountById(discountId) {
        const discount = await DiscountRepository.getDiscountById(discountId)
        if (!discount) {
            return null;
        }
        return discount;
    }
    static async getAllDiscount(){
        const discounts = await DiscountRepository.getAllDiscount();
        if(discounts.length === 0){
            return null;
        }
        return discounts;
    }
    static async createDiscount(discountData){
        discountData.discountId =  generateId();
        discountData.createdAt = new Date();
        discountData.modifiedAt = new Date();
        const discount = await DiscountRepository.createDiscount(discountData);
        if(!discount){
            return null;
        }
        return discount;
    }
    static async updateDiscountById(discountId, discountData){
        discountData.modifiedAt = new Date();
        const discount = await DiscountRepository.updateDiscountById(discountId, discountData);
        if(!discount){
            return null;
        }
        return discount;
    }
    static async deleteDiscountById(discountId){
        const discount = await DiscountRepository.deleteDiscountById(discountId);
        if(discount <=0){
            return null;
        }
        return discount;
    }
}
module.exports = DiscountService;

