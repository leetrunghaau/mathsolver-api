// orderRepository.js

const Order = require('../models/order-model');

class OrderRepository {
  static async getOrderById(orderId) {
    return Order.findByPk(orderId);
  }
  static async getListOrderByUserId(userId) {
    return Order.findAll({ where: { userId: userId } })
  }
  static async createOrder(orderData) {
    console.log(orderData)
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
  static async getAllOrderByUserId(userId) {
    return Order.findAll({ where: { userId: userId } })
  }
  static async getAllMyOrderByStatus(userId, status) {
    return Order.findAll({
      where: {
        userId: userId,
        status: status
      }
    })
  }
  static async getOrderById(orderId){
    return Order.findByPk(orderId)
  }
  static async updateOrder(orderId, orderData){
    await Order.update(orderData,{
      where:{orderId:orderId}
    });
    return this.getOrderById(orderId);
  }
  static async getAllOrder(){
    return Order.findAll();
  }
  static async getAllOrderByStatus(status){
    return Order.findAll({
      where: {
        status: status
      }
    })
  }
}

module.exports = OrderRepository;
