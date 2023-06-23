const { DataTypes } = require('sequelize');
const db = require('../config/Database');

const Address = db.define('Address', {
  district: DataTypes.STRING(50),
  commune: DataTypes.STRING(50),
  phone: DataTypes.STRING(12),
  province: DataTypes.STRING(50),
  status: DataTypes.STRING(10),
  detail: DataTypes.STRING(50),
  address_id: {
    type: DataTypes.STRING(20),
    primaryKey: true
  }
},{
  tableName: 'address',
  timestamps: false
});

module.exports = Address;
