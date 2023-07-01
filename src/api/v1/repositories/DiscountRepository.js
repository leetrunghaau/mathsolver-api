// discountRepository.js

const discount = require('../models/Discount');

class DiscountRepository {
  static async getDiscountById(discountId) {
    return discount.findByPk(discountId);
  }

  static async createDiscount(discountData) {
    return discount.create(discountData);
  }

  static async updateDiscount(discountId, discountData) {
    await discount.update(discountData, {
      where: { discount_id: discountId },
    });
    return this.getDiscountById(discountId);
  }

  static async deleteDiscount(discountId) {
    return discount.destroy({
      where: { discount_id: discountId },
    });
  }
}

module.exports =  DiscountRepository;
