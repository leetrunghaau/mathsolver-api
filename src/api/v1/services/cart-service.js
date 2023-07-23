const { generateId } = require("../helpers/generate-key");
const CartRepository = require("../repositories/cart-repository");

class CartService {
    static async getCartById(cartId) {
        const cart = await CartRepository.getCartById(cartId);
        if (!cart) {
            return null;
        }
        return cart;
    }
    static async getAllCartByUserId(userId) {
        const carts = await CartRepository.getAllCartByUserId(userId);
        if (!carts) {
            return null;
        };
        return carts;
    }
    static async getMyCartByProductId(userId, productId) {
        const cart = await CartRepository.getMyCartByProductId(userId, productId);
        if (!cart) {
            return null;
        }
        return cart;
    }
    static async updateCart(cartId, cartData) {
        const cart = await CartRepository.updateCart(cartId, cartData);
        if (!cart) {
            return null;
        }
        return (cart);
    }
    static async createCart(cartData) {
        cartData.cartId = generateId();
        const cart = await CartRepository.createCart(cartData);
        if (!cart) {
            return null;
        }
        return cart;
    }
    static async deleteCart(cartId) {
        const cart = await CartRepository.deleteCart(cartId);
        if (cart <= 0) {
            return null;
        }
        return cart;
    }
}
module.exports = CartService;