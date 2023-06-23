// orderRepository.js

const Order = require('../models/Order');

class OrderRepository {
  async getOrderById(orderId) {
    return Order.findByPk(orderId);
  }

  async createOrder(orderData) {
    return Order.create(orderData);
  }

  async updateOrder(orderId, orderData) {
    await Order.update(orderData, {
      where: { order_id: orderId },
    });
    return this.getOrderById(orderId);
  }

  async deleteOrder(orderId) {
    return Order.destroy({
      where: { order_id: orderId },
    });
  }
}

module.exports = new OrderRepository();
