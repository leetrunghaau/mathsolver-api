const { DataTypes } = require('sequelize');
const db = require('../../config/Database');
const User = require('./user-model');
const Discount = require('./discount-model');
const Address = require('./address-model');

const Order = db.define('Order', {
  orderId: {
    type: DataTypes.STRING(20),
    primaryKey: true,
    field: 'order_id'
  },
  userId:{
    type: DataTypes.STRING(20),
    field: 'user_id'
  },
  addressId:{
    type: DataTypes.STRING(20),
    field:'address_id'
  },
  createdAt:{
    type: DataTypes.DATE,
    field:'created_at'
  },
  modifiedAt:{
    type: DataTypes.DATE,
    field:'modified_at'
  },
  status: DataTypes.STRING(20),
  discountId:{
    type: DataTypes.STRING(20),
    field: 'discount_id'
  } 

},{
  tableName: 'order',
  timestamps: false
});

Order.belongsTo(User, { foreignKey: 'user_id' , onDelete: 'CASCADE', onUpdate: 'CASCADE'});
Order.belongsTo(Discount, { foreignKey: 'discount_id', onDelete: 'CASCADE', onUpdate: 'CASCADE' });
Order.belongsTo(Address, { foreignKey: 'address_id', onDelete: 'CASCADE', onUpdate: 'CASCADE' });

module.exports = Order;
