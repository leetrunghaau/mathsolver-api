const CartItem = require('../models/cart-item-model')

class CartItemRepository{
    static async getCartItemById(cartItemId){
        return CartItem.findByPk(cartItemId);
    }
}
module.exports = CartItemRepository;