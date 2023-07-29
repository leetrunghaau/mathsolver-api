const OrderItem = require('../models/order-item-model')
class OrderItemRepository {
    static async getOrderItemById(orderItemId){
        return OrderItem.findByPk(orderItemId);
    }
    static async createOrderItem(orderItemData){
        return OrderItem.create(orderItemData);
    }
}
module.exports = OrderItemRepository;