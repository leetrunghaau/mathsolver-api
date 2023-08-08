const { DataTypes } = require('sequelize');
const db = require('../../config/Database');
const User = require('./user-model');

const Address = db.define('Address', {
  userId: {
    type: DataTypes.STRING(20),
    field: 'user_id'
  },
  district: DataTypes.STRING(50),
  commune: DataTypes.STRING(50),
  phone: DataTypes.STRING(12),
  province: DataTypes.STRING(50),
  status: DataTypes.STRING(10),
  detail: DataTypes.STRING(50),
  addressId: {
    type: DataTypes.STRING(20),
    primaryKey: true,
    field: 'address_id'

  }
}, {

  tableName: 'address',
  timestamps: false
});
Address.belongsTo(User, { foreignKey: 'userId', onDelete: 'CASCADE', onUpdate: 'CASCADE' })
module.exports = Address;
