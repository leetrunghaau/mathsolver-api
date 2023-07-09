const { DataTypes } = require('sequelize');
const db = require('../../config/Database');
const Order = require('./order-model');

const Bill = db.define('Bill', {
  billId: {
    type: DataTypes.STRING(20),
    primaryKey: true,
    field: 'bill_id'
  },
  orderId: {
    type: DataTypes.STRING(20),
    field: 'order_id'

  },
  price: DataTypes.FLOAT,
  total: DataTypes.FLOAT,
  discountValue: {
    type: DataTypes.INTEGER,
    field: 'discount_value'
  },
  createdAt: {
    type: DataTypes.DATE,
    field: 'created_at'
  },
  discountCode: {
    type: DataTypes.STRING(20),
    field: 'discount_code'
  }
}, {
  tableName: 'bill',
  timestamps: false
});

Bill.belongsTo(Order, { foreignKey: 'order_id', onDelete: 'CASCADE', onUpdate: 'CASCADE' });

module.exports = Bill;
