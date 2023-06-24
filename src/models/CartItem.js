const { DataTypes } = require('sequelize');
const db = require('../config/Database');
const Cart = require('./Cart');
const Product = require('./Product');

const CartItem = db.define('CartItem', {
  cartItemId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    field: 'cart_item_id'
  },
  cartId: {
    type: DataTypes.STRING(20),
    field: 'cart_id'
  },
  productId: {
    type: DataTypes.STRING(20),
    field: 'product_id'
  },
  quantity: DataTypes.INTEGER
}, {
  tableName: 'cart_item',
  timestamps: false
});

CartItem.belongsTo(Cart, { foreignKey: 'cart_id' , onDelete: 'CASCADE', onUpdate: 'CASCADE'});
CartItem.belongsTo(Product, { foreignKey: 'product_id', onDelete: 'CASCADE', onUpdate: 'CASCADE' });

module.exports = CartItem;
