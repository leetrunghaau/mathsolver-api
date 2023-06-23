const { DataTypes } = require('sequelize');
const db = require('../config/Database');
const Address = require('./Address');

const User = db.define('User', {
  user_id: {
    type: DataTypes.STRING(20),
    primaryKey: true
  },
  address_id: DataTypes.STRING(20),
  first_name: DataTypes.STRING(20),
  last_name: DataTypes.STRING(20),
  email: DataTypes.STRING(50),
  birth_date: DataTypes.DATEONLY,
  gender: DataTypes.STRING(7),
  created_at: DataTypes.DATE
},{
  tableName: 'user',
  timestamps: false
});

User.belongsTo(Address, { foreignKey: 'address_id' });

module.exports = User;
