// discountRepository.js

const Discount = require('../models/discount-model');

class DiscountRepository {
  static async getDiscountById(discountId) {
    return Discount.findByPk(discountId);
  }
  static async getAllDiscount() {
    return Discount.findAll();
  }
  static async getDiscountByCode(code){
    return Discount.findOne({where:{code:code}})
  }
  static async createDiscount(discountData) {
    return Discount.create(discountData);
  }

  static async updateDiscountById(discountId, discountData) {
    await Discount.update(discountData, {
      where: { discount_id: discountId },
    });
    return this.getDiscountById(discountId);
  }

  static async deleteDiscountById(discountId) {
    return Discount.destroy({
      where: { discount_id: discountId },
    });
  }
}

module.exports =  DiscountRepository;
