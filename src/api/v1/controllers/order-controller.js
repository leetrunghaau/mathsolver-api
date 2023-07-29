
const OrderService = require('../services/order-service')
const CartService = require('../services/cart-service')
const DiscountService = require('../services/discount-service')
const AddressService = require('../services/address-service')
const OrderItemService = require('../services/order-item-service')
const ProductService = require('../services/product-service')
const createError = require('http-errors')

class OrderController {
    static async checkOut(req, res, next) {
        try {
            const carts = await CartService.getAllCartByUserId(req.userId);
            if (!carts) {
                return next(createError.NotFound('giỏ hàng trống'));
            }


            let total = 0;
            for (const item of carts) {
                if (item.quantity > item.Product.quantity) {
                    return next(createError.BadRequest('Cửa hàng không đủ số lượng sản phẩm ' + item.Product.name));
                }

                if (item.Product.status === 'disable') {
                    return next(createError.BadRequest('Sản phẩm ' + item.Product.name + ' đã ngừng bán'));
                }
                console.log(item.Product.price)
                console.log(item.quantity)
                total += (item.Product.price * item.quantity)

            }
            console.log(total)

            let discount = null;
            if (req.validateData.discountCode) {
                console.log(req.validateData.discountCode)
                discount = await DiscountService.getDiscountByCode(req.body.discountCode);
                if (!discount) {
                    return next(createError.BadRequest('Mã giảm giá không tồn tại'))
                }
                const currentTime = new Date().getTime();
                if (discount.enableAt.getTime() > currentTime || currentTime > discount.disableAt.getTime()) {
                    return next(createError.BadRequest('Thời gian khuyến mãi không đáp ứng'))
                }
                if (discount.quantity < 1) {
                    return next(createError.BadRequest('hết mã giảm giá'))
                }
                // if(discount.applyFor < total ){
                //     return next(createError.BadRequest('mã giảm giá áp dụng cho đơn hàng từ ' + discount.applyFor))
                // }
            }


            const address = await AddressService.getAddressById(req.validateData.addressId);
            if (!address) {
                return next(createError.NotFound('Địa chỉ không tìm thấy'))
            }

            async function processCarts(carts, req, address, discount) {
                let orderData = {
                    userId: req.userId,
                    addressId: address.addressId,
                    progress: 'wait',
                };

                if (discount) {
                    orderData.discountId = discount.discountId;
                    await DiscountService.updateDiscountById(discount.discountId, { quantity: discount.quantity - 1 });
                } else {
                    orderData.discountId = null;
                }

                const order = await OrderService.createOder(orderData);

                await Promise.all(
                    carts.map(async (item) => {
                        await OrderItemService.createOrderItem({
                            orderId: order.orderId,
                            productId: item.Product.productId,
                            price: item.Product.price,
                            quantity: item.quantity,
                        });
                        await ProductService.updateProductById(item.Product.productId, {
                            quantity: item.Product.quantity - item.quantity

                        });
                    })
                );
                //delete all cart by user id
            }

            await processCarts(carts, req, address, discount);

            return res.status(200).json({
                status: 200,
                message: 'done'

            })

        } catch  (error) {
            console.log(error);
            return next(createError.InternalServerError());
        }

    }
    static async getAllOrderByUserId(req, res, next) {
        try {
            const orders = await OrderService.getAllOrderByUserId(req.userId);
            if (!orders) {
                return next(createError.NotFound())
            }
            return res.status(200).json({
                status: 200,
                message: 'done'
            })

        } catch  (error) {
            console.log(error);
            return next(createError.InternalServerError());
        }

    }
    static async getAllMyOrderByStatus(req, res, next) {
        try {
            const orders = await OrderService.getAllMyOrderByStatus(req.userId, req.validateData.status);
            if (!orders) {
                return next(createError.NotFound())
            }
            return res.status(200).json({
                status: 200,
                message: 'done'
            })

        } catch  (error) {
            console.log(error);
            return next(createError.InternalServerError());
        }
    }
    static async updateAddressInOrder(req, res, next) {
        try {
            const order = await OrderService.getOrderById(req.validateData.orderId)
            if (!order) {
                return next(createError.NotFound('Địa chỉ không tìm thấy'))
            }
            if (req.userId != order.userId) {
                return next(createError.BadRequest('Bạn đang đổi thông tin của đơn hàng người khác đó. stop'))
            }
            if (!['wait', 'accept', 'handle'].includes(order.status)) {
                return next(createError.BadRequest('Đơn hàng không thể thay đổi địa chỉ'))
            }

            const newOrder = await OrderService.updateOrder(req.validateData.orderId, { addressId: req.body.addressId });
            if (!newOrder) {
                return next(createError.InternalServerError())
            }
            return res.status(200).json({
                status: 200,
                message: 'done',
                data: newOrder
            })

        } catch  (error) {
            console.log(error);
            return next(createError.InternalServerError());
        }
    }
    static async cancelOrder(req, res, next) {
        try {
            const order = await OrderService.getOrderById(req.validateData.orderId)
            if (!order) {
                return next(createError.NotFound('Địa chỉ không tìm thấy'))
            }
            if (req.userId != order.userId) {
                return next(createError.BadRequest('Bạn đang đổi thông tin của đơn hàng người khác đó. stop'))
            }
            if (!['wait'].includes(order.status)) {
                return next(createError.BadRequest('Không thể hủy đơn hàng'))
            }

            const newOrder = await OrderService.updateOrder(req.validateData.orderId, { status: 'cancel' });
            if (!newOrder) {
                return next(createError.InternalServerError())
            }
            return res.status(200).json({
                status: 200,
                message: 'done',
                data: newOrder
            })
        } catch (error) {
            console.log(error);
            return next(createError.InternalServerError());
        }
    }
    static async adminGetAllOrder(req, res, next) {
        try {
            const orders = await OrderService.getAllOrder();
            if (!orders) {
                return next(createError.NotFound())
            }
            return res.status(200).json({
                status: 200,
                message: 'done'
            })
        } catch (error) {
            console.log(error);
            return next(createError.InternalServerError())
        }
    }
    static async adminGetAllOrderByStatus(req, res, next) {
        try {
            const orders = await OrderService.getAllOrderByStatus( req.validateData.status);
            if (!orders) {
                return next(createError.NotFound())
            }
            return res.status(200).json({
                status: 200,
                message: 'done'
            })

        } catch  (error) {
            console.log(error);
            return next(createError.InternalServerError());
        }
    }
    static async adminUpdateStatusInOrder(req, res, next) {
        try {
            const order = await OrderService.getOrderById(req.validateData.orderId)
            if (!order) {
                return next(createError.NotFound('Địa chỉ không tìm thấy'))
            }

            if (['cancel'].includes(order.status)) {
                return next(createError.BadRequest('Đơn hàng không thể thay đổi status'))
            }
            const newOrder = await OrderService.updateOrder(req.validateData.orderId, { status: req.validateData.status });
            if (!newOrder) {
                return next(createError.InternalServerError())
            }
            return res.status(200).json({
                status: 200,
                message: 'done',
                data: newOrder
            })

        } catch  (error) {
            console.log(error);
            return next(createError.InternalServerError());
        }
    }
}
module.exports = OrderController