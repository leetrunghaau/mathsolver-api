const { DataTypes } = require('sequelize');
const db = require('../config/Database');
const User = require('./User');
const Discount = require('./Discount');

const Order = db.define('Order', {
  order_id: {
    type: DataTypes.STRING(20),
    primaryKey: true
  },
  user_id: DataTypes.STRING(20),
  progress: DataTypes.STRING(20),
  discount_id: DataTypes.STRING(20)
},{
  tableName: 'order',
  timestamps: false
});

Order.belongsTo(User, { foreignKey: 'user_id' });
Order.belongsTo(Discount, { foreignKey: 'discount_id' });

module.exports = Order;
