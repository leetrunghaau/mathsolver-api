const { DataTypes } = require('sequelize');
const db = require('../config/Database');
const User = require('./User');

const Account = db.define('Account', {
  account_id: {
    type: DataTypes.STRING(20),
    primaryKey: true
  },
  user_id: DataTypes.STRING(20),
  password: DataTypes.TEXT,
  role: DataTypes.STRING(11),
  modified_at: DataTypes.DATE
},{
  tableName: 'account',
  timestamps: false
});

Account.belongsTo(User, { foreignKey: 'user_id' });

module.exports = Account;
