const { DataTypes } = require('sequelize');
const db = require('../config/Database');
const Brand = require('./Brand');
const Categories = require('./Categories');

const Product = db.define('Product', {
  product_id: {
    type: DataTypes.STRING(20),
    primaryKey: true
  },
  name: DataTypes.INTEGER,
  cartegory_id: DataTypes.STRING(20),
  quantity: DataTypes.INTEGER,
  location: DataTypes.INTEGER,
  brand_id: DataTypes.STRING(20),
  description: DataTypes.TEXT,
  information: DataTypes.TEXT,
  price: DataTypes.FLOAT,
  created_at: DataTypes.DATE,
  modified_at: DataTypes.DATE
},{
  tableName: 'product',
  timestamps: false
});

Product.belongsTo(Brand, { foreignKey: 'brand_id' });
Product.belongsTo(Categories, { foreignKey: 'cartegory_id' });

module.exports = Product;
