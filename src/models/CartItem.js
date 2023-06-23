const { DataTypes } = require('sequelize');
const db = require('../config/Database');
const Cart = require('./Cart');
const Product = require('./Product');

const CartItem = db.define('CartItem', {
  cart_item_id: {
    type: DataTypes.INTEGER,
    primaryKey: true
  },
  cart_id: DataTypes.STRING(20),
  product_id: DataTypes.STRING(20),
  quantity: DataTypes.INTEGER
},{
  tableName: 'cart_item',
  timestamps: false
});

CartItem.belongsTo(Cart, { foreignKey: 'cart_id' });
CartItem.belongsTo(Product, { foreignKey: 'product_id' });

module.exports = CartItem;
