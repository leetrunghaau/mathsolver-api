const OrderRepository = require('../repositories/order-repository')
class OrderService{
static async getListOrderByUserId(userId){
    const orders = await OrderRepository.getListOrderByUserId(userId);
    if(!orders){
        return null;
    }
    return orders;
}

}
module.exports = OrderService;