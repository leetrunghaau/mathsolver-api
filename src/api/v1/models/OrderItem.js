const { DataTypes } = require('sequelize');
const db = require('../../config/Database');
const order = require('./Order');
const product = require('./Product');

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

OrderItem.belongsTo(order, { foreignKey: 'order_id', onDelete: 'CASCADE', onUpdate: 'CASCADE' });
OrderItem.belongsTo(product, { foreignKey: 'product_id', onDelete: 'CASCADE', onUpdate: 'CASCADE' });

module.exports = OrderItem;
