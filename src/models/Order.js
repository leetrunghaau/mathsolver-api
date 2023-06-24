const { DataTypes } = require('sequelize');
const db = require('../config/Database');
const User = require('./User');
const Discount = require('./Discount');

const Order = db.define('Order', {
  orderId: {
    type: DataTypes.STRING(20),
    primaryKey: true,
    field: 'order_id'
  },
  userId:{
    type: DataTypes.STRING(20),
    field: 'user_id'
  },
  progress: DataTypes.STRING(20),
  discount_id: DataTypes.STRING(20)
},{
  tableName: 'order',
  timestamps: false
});

Order.belongsTo(User, { foreignKey: 'user_id' , onDelete: 'CASCADE', onUpdate: 'CASCADE'});
Order.belongsTo(Discount, { foreignKey: 'discount_id', onDelete: 'CASCADE', onUpdate: 'CASCADE' });

module.exports = Order;
