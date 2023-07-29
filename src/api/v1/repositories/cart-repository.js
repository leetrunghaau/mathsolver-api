// cartRepository.js

const Cart = require('../models/cart-model');
const Product = require('../models/product-model');

class CartRepository {
  static async getCartById(cartId) {
    return Cart.findByPk(
      cartId,
      {
        attributes: {
          exclude: ['userId', 'productId', 'user_id', 'product_id']
        },
        include: [
          { model: Product, attributes: ['productId', 'name', 'price', 'information', 'price'] }
        ]
      }
      );
  }
  static async getAllCartByUserId(userId) {
    return Cart.findAll({
      where: {
        userId: userId
      },
      attributes: {
        exclude: ['userId', 'productId', 'user_id', 'product_id']
      },
      include: [
        { model: Product, attributes: ['productId', 'name', 'price', 'information', 'price','status','quantity'] }
      ]
    })
  }
  static async getMyCartByProductId(userId, productId) {
    return Cart.findOne({
      where: {
        userId: userId,
        productId: productId
      }
    })
  }
  static async createCart(cartData) {
    return Cart.create(cartData);
  }
  static async updateCart(cartId, cartData) {
    await Cart.update(cartData, {
      where: { cartId: cartId },
    });
    return this.getCartById(cartId);
  }

  static async deleteCart(cartId) {
    return Cart.destroy({
      where: { cartId: cartId },
    });
  }
}

module.exports = CartRepository;
