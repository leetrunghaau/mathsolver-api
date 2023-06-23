// cartRepository.js

const Cart = require('../models/Cart');

class CartRepository {
  async getCartById(cartId) {
    return Cart.findByPk(cartId);
  }

  async createCart(cartData) {
    return Cart.create(cartData);
  }

  async updateCart(cartId, cartData) {
    await Cart.update(cartData, {
      where: { cart_id: cartId },
    });
    return this.getCartById(cartId);
  }

  async deleteCart(cartId) {
    return Cart.destroy({
      where: { cart_id: cartId },
    });
  }
}

module.exports = new CartRepository();
