const { DataTypes } = require('sequelize');
const db = require('../config/Database');
const Order = require('./Order');
const Product = require('./Product');

const OrderItem = db.define('OrderItem', {
  orderItemId: {
    type: DataTypes.STRING(20),
    primaryKey: true,
    field: 'order_item_id'
  },
  productId: {
    type: DataTypes.STRING(20),
    field: 'product_id'
  },
  orderId: {
    type: DataTypes.STRING(20),
    field: 'order_id'
  },
  price: DataTypes.DOUBLE,
  quantity: DataTypes.INTEGER
}, {
  tableName: 'order_item',
  timestamps: false
});

OrderItem.belongsTo(Order, { foreignKey: 'order_id', onDelete: 'CASCADE', onUpdate: 'CASCADE' });
OrderItem.belongsTo(Product, { foreignKey: 'product_id', onDelete: 'CASCADE', onUpdate: 'CASCADE' });

module.exports = OrderItem;
