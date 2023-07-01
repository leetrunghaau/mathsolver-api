// cartRepository.js

const cart = require('../models/Cart');

class CartRepository {
  static async getCartById(cartId) {
    return cart.findByPk(cartId);
  }

  static async createCart(cartData) {
    return cart.create(cartData);
  }

  static async updateCart(cartId, cartData) {
    await cart.update(cartData, {
      where: { cart_id: cartId },
    });
    return this.getCartById(cartId);
  }

  static async deleteCart(cartId) {
    return cart.destroy({
      where: { cart_id: cartId },
    });
  }
}

module.exports =  CartRepository;
