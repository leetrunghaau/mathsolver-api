const { DataTypes } = require('sequelize');
const db = require('../config/Database');
const User = require('./User');

const Cart = db.define('Cart', {
  cart_id: {
    type: DataTypes.STRING(20),
    primaryKey: true
  },
  user_id: DataTypes.STRING(20),
  created_at: DataTypes.DATE
},{
  tableName: 'cart',
  timestamps: false
});

Cart.belongsTo(User, { foreignKey: 'user_id' });

module.exports = Cart;
