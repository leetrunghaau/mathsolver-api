// orderRepository.js

const order = require('../models/Order');

class OrderRepository {
  static async getOrderById(orderId) {
    return order.findByPk(orderId);
  }

  static async createOrder(orderData) {
    return order.create(orderData);
  }

  static async updateOrder(orderId, orderData) {
    await order.update(orderData, {
      where: { order_id: orderId },
    });
    return this.getOrderById(orderId);
  }

  static async deleteOrder(orderId) {
    return order.destroy({
      where: { order_id: orderId },
    });
  }
}

module.exports = OrderRepository;
