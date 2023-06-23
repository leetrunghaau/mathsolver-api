// discountRepository.js

const Discount = require('../models/Discount');

class DiscountRepository {
  async getDiscountById(discountId) {
    return Discount.findByPk(discountId);
  }

  async createDiscount(discountData) {
    return Discount.create(discountData);
  }

  async updateDiscount(discountId, discountData) {
    await Discount.update(discountData, {
      where: { discount_id: discountId },
    });
    return this.getDiscountById(discountId);
  }

  async deleteDiscount(discountId) {
    return Discount.destroy({
      where: { discount_id: discountId },
    });
  }
}

module.exports = new DiscountRepository();
