const { generateId } = require('../helpers/generate-key');
const OrderItemRepository = require('../repositories/order-item-repository')
class OrderItemService{

    static async createOrderItem(orderItemData){
        orderItemData.orderItemId = generateId()
        const orderItem = await OrderItemRepository.createOrderItem(orderItemData);
        if(!orderItem){
            return null;
        }
        return orderItem;
    }
}
module.exports = OrderItemService;