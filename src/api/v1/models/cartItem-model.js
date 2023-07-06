const { DataTypes } = require('sequelize');
const db = require('../../config/Database');
const cart = require('./Cart');
const product = require('./product-model');

const CartItem = db.define('CartItem', {
  cartItemId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    field: 'cart_item_id'
  },
  cartId: {
    type: DataTypes.STRING(20),
    field: 'cart_id'
  },
  productId: {
    type: DataTypes.STRING(20),
    field: 'product_id'
  },
  quantity: DataTypes.INTEGER
}, {
  tableName: 'cart_item',
  timestamps: false
});

CartItem.belongsTo(cart, { foreignKey: 'cart_id' , onDelete: 'CASCADE', onUpdate: 'CASCADE'});
CartItem.belongsTo(product, { foreignKey: 'product_id', onDelete: 'CASCADE', onUpdate: 'CASCADE' });

module.exports = CartItem;
