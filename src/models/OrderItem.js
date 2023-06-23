const { DataTypes } = require('sequelize');
const db = require('../config/Database');
const Order = require('./Order');
const Product = require('./Product');

const OrderItem = db.define('OrderItem', {
  order_item_id: {
    type: DataTypes.STRING(20),
    primaryKey: true
  },
  product_id: DataTypes.STRING(20),
  order_id: DataTypes.STRING(20),
  quantity: DataTypes.INTEGER
},{
  tableName: 'order_item',
  timestamps: false
});

OrderItem.belongsTo(Order, { foreignKey: 'order_id' });
OrderItem.belongsTo(Product, { foreignKey: 'product_id' });

module.exports = OrderItem;
