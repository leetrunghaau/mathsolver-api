const orderItem = require('../models/OrderItem')
class OrderItemRepository {
    static async getOrderItemById(orderItemId){
        return orderItem.findByPk(orderItemId);
    }
}
module.exports = OrderItemRepository;