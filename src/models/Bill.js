const { DataTypes } = require('sequelize');
const db = require('../config/Database');
const Order = require('./Order');

const Bill = db.define('Bill', {
  bill_id: {
    type: DataTypes.STRING(20),
    primaryKey: true
  },
  order_id: DataTypes.STRING(20),
  price: DataTypes.FLOAT,
  total: DataTypes.FLOAT,
  discount_value: DataTypes.INTEGER,
  created_at: DataTypes.DATE,
  discount_code: DataTypes.STRING(20)
},{
  tableName: 'bill',
  timestamps: false
});

Bill.belongsTo(Order, { foreignKey: 'order_id' });

module.exports = Bill;
