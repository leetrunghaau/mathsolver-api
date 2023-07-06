const { DataTypes } = require('sequelize');
const db = require('../../config/Database');
const user = require('./user-model');

const Cart = db.define('Cart', {
  cartId: {
    type: DataTypes.STRING(20),
    primaryKey: true,
    field: 'cart_id'
  },
  userId: {
    type: DataTypes.STRING(20),
    field: 'user_id'
  },
  createdAt: {
    type: DataTypes.DATE,
    field: 'created_at'
  }
}, {
  tableName: 'cart',
  timestamps: false
});

Cart.belongsTo(user, { foreignKey: 'user_id', onDelete: 'CASCADE', onUpdate: 'CASCADE' });

module.exports = Cart;