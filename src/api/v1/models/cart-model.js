const { DataTypes } = require('sequelize');
const db = require('../../config/Database');
const User = require('./user-model');
const Product = require('./product-model');

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
  productId: {
    type: DataTypes.STRING(20),
    field: 'product_id'
  },
  quantity: DataTypes.INTEGER,
  createdAt: {
    type: DataTypes.DATE,
    field: 'created_at'
  }
}, {
  tableName: 'cart',
  timestamps: false
});

Cart.belongsTo(User, { foreignKey: 'user_id', onDelete: 'CASCADE', onUpdate: 'CASCADE' });
Cart.belongsTo(Product, {foreignKey: 'product_id', onDelete: 'CASCADE', onUpdate: 'CASCADE'})

module.exports = Cart;
