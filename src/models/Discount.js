const { DataTypes } = require('sequelize');
const db = require('../config/Database');

const Discount = db.define('Discount', {
  discount_id: {
    type: DataTypes.STRING(20),
    primaryKey: true
  },
  create_at: DataTypes.DATE,
  midified_at: DataTypes.DATE,
  enable_at: DataTypes.DATE,
  disable_at: DataTypes.DATE,
  type: DataTypes.STRING(10),
  value: DataTypes.INTEGER,
  quantity: DataTypes.INTEGER,
  code: DataTypes.STRING(20)
},{
  tableName: 'discount',
  timestamps: false
});

module.exports = Discount;
