const OrderItem = require('../models/order-item-model')
class OrderItemRepository {
    static async getOrderItemById(orderItemId){
        return OrderItem.findByPk(orderItemId);
    }
}
module.exports = OrderItemRepository;