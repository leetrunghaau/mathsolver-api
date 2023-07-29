const { generateId } = require('../helpers/generate-key');
const OrderRepository = require('../repositories/order-repository')
class OrderService {
    static async getListOrderByUserId(userId) {
        const orders = await OrderRepository.getListOrderByUserId(userId);
        if (!orders) {
            return null;
        }
        return orders;
    }
    static async createOder(orderData) {
        orderData.orderId = generateId()
        orderData.createdAt = new Date();
        orderData.modifiedAt = new Date();
        const order = await OrderRepository.createOrder(orderData);
        if (!order) {
            return null;
        }
        return order;
    }
static async getAllOrderByUserId(userId){
    const orders = await OrderRepository.getAllOrderByUserId(userId);
    if(orders.length === 0){
        return null;
    }
    return orders
}
static async getAllMyOrderByStatus(userId, status){
    const orders = await OrderRepository.getAllMyOrderByStatus(userId,status);
    if(orders.length === 0){
        return null;
    }
    return orders
}
static async getOrderById(orderId){
    const order = await OrderRepository.getOrderById(orderId);
    if(!order){
        return null;
    }
    return order;
}
static async updateOrder(orderId, orderData){
    orderData.modifiedAt = new Date();
    const order = await OrderRepository.updateOrder(orderId, orderData);
    if(!order){
        return null;
    }
    return order;
}
static async getAllOrder(){
    const orders = await OrderRepository.getAllOrder();
    if(orders.length === 0){
        return null;
    }
    return orders
}
static async getAllOrderByStatus(status){
    const orders = await OrderRepository.getAllOrderByStatus(status);
    if(orders.length === 0){
        return null;
    }
    return orders
}
}
module.exports = OrderService;