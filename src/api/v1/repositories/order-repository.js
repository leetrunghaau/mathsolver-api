// orderRepository.js

const Order = require('../models/order-model');

class OrderRepository {
  static async getOrderById(orderId) {
    return Order.findByPk(orderId);
  }

  static async createOrder(orderData) {
    return Order.create(orderData);
  }

  static async updateOrder(orderId, orderData) {
    await Order.update(orderData, {
      where: { order_id: orderId },
    });
    return this.getOrderById(orderId);
  }

  static async deleteOrder(orderId) {
    return Order.destroy({
      where: { order_id: orderId },
    });
  }
}

module.exports = OrderRepository;
