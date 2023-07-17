// cartRepository.js

const Cart = require('../models/cart-model');

class CartRepository {
  static async getCartById(cartId) {
    return Cart.findByPk(cartId);
  }
  static async getAllCartByUserId(userId){
    return Cart.findAll({where:{userId: userId}})
  }

  static async createCart(cartData) { 
    return Cart.create(cartData);
  }
  static async updateCart(cartId, cartData) {
    await Cart.update(cartData, {
      where: { cart_id: cartId },
    });
    return this.getCartById(cartId);
  }

  static async deleteCart(cartId) {
    return Cart.destroy({
      where: { cart_id: cartId },
    });
  }
}

module.exports =  CartRepository;
