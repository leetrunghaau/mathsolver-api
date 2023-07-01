const cartItem = require('../models/CartItem')

class CartItemRepository{
    static async getCartItemById(cartItemId){
        return cartItem.findByPk(cartItemId);
    }
}
module.exports = CartItemRepository;