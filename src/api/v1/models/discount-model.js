const { DataTypes } = require('sequelize');
const db = require('../../config/Database');

const Discount = db.define('Discount', {
  discountId: {
    type: DataTypes.STRING(20),
    primaryKey: true,
    field: 'discount_id'
  },
  createdAt: {
    type: DataTypes.DATE,
    field: 'created_at'
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
  applyFor: {
    type: DataTypes.DOUBLE,
    field: 'apply_for'
  },
  type: DataTypes.STRING(10),
  value: DataTypes.DOUBLE,
  quantity: DataTypes.INTEGER,
  code: DataTypes.STRING(20)
}, {
  tableName: 'discount',
  timestamps: false
});

module.exports = Discount;
