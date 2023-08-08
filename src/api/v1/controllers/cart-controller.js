const CartService = require("../services/cart-service");
const ProductService = require("../services/product-service");
const createError = require('http-errors')
const { getCartValidate, addToCartValidate, deleteCartValidate, updateCartValidate }  =require('../validations/cart-validate')

class CartController {
    static async getCart(req, res, next) {
        try {
            const { error, value } = getCartValidate(req.params);
            if (error) {
                return next(createError.BadRequest(error.details[0].message));
            }
            const cart = await CartService.getCartById(value.cartId);
            if (!cart) {
                return next(createError.NotFound());
            }
            return res.status(200).json({
                status: 200,
                message: 'done',
                data: cart
            })
        } catch  (error) {
            console.log(error);
            return next(createError.InternalServerError());
        }
    }
    static async getAllCart(req, res, next) {
        try {
            const carts = await CartService.getAllCartByUserId(req.userId);
            if (!carts) {
                return next(createError.NotFound());
            }
            return res.status(200).json({
                status: 200,
                message: 'done',
                data: carts
            })
        } catch  (error) {
            console.log(error);
            return next(createError.InternalServerError());
        }
    }
    static async addToCart(req, res, next) {
        try {
            const { error, value } = addToCartValidate(req.body);
            if (error) {
                return next(createError.BadRequest(error.details[0].message));
            }
            const product = await ProductService.getProductById(value.productId);
            if(!product){
                return next(createError.NotFound('product not found with id = ' + value.productId))
            }
            let cart = await CartService.getMyCartByProductId( req.userId, value.productId);
            if (cart) {
                cart.quantity += 1;
                cart = await CartService.updateCart(cart.cartId, {quantity: cart.quantity});
            } else {
                const cartData = {
                    userId: req.userId,
                    productId: value.productId,
                    quantity: 1
                }
                cart = await CartService.createCart(cartData);
                cart = await CartService.getCartById(cart.cartId)
            }
            return res.status(200).json({
                status: 200,
                message: 'done',
                data: cart
            })


        } catch  (error) {
            console.log(error);
            return next(createError.InternalServerError());
        }
    }
    static async updateCart(req, res, next) {
        try {
            const { error, value } = updateCartValidate(req.body);
            if (error) {
                return next(createError.BadRequest(error.details[0].message));
            }
            const cart = await CartService.updateCart(value.cartId, { quantity: value.quantity });
            if (!cart) {
                return next(createError.NotFound());
            }
            return res.status(200).json({
                status: 200,
                message: 'done',
                data: cart
            })
        } catch  (error) {
            console.log(error);
            return next(createError.InternalServerError());
        }
    }

    static async deleteCart(req, res, next) {
        try {
            const { error, value } = deleteCartValidate(req.params);
            if (error) {
                return next(createError.BadRequest(error.details[0].message));
            }
            const cart = await CartService.deleteCart(value.cartId);
            if (!cart) {
                return next(createError.NotFound());
            }
            return res.status(200).json({
                status: 200,
                message: 'done',
            })
        } catch  (error) {
            console.log(error);
            return next(createError.InternalServerError());
        }
    }
}


module.exports = CartController;