const { DataTypes } = require('sequelize');
const db = require('../config/Database');

const Discount = db.define('Discount', {
  discountId: {
    type: DataTypes.STRING(20),
    primaryKey: true,
    field: 'discount_id'
  },
  createAt: {
    type: DataTypes.DATE,
    field: 'create_at'
  },
  modifiedAt: {
    type: DataTypes.DOUBLE,
    field: 'modified_at'
  },
  enableAt: {
    type: DataTypes.DATE,
    field: 'enable_at'
  },
  disableAt: {
    type: DataTypes.DATE,
    field: 'disable_at'
  },
  type: DataTypes.STRING(10),
  value: DataTypes.INTEGER,
  quantity: DataTypes.INTEGER,
  code: DataTypes.STRING(20)
}, {
  tableName: 'discount',
  timestamps: false
});

module.exports = Discount;
