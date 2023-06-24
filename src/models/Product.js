const { DataTypes } = require('sequelize');
const db = require('../config/Database');
const Brand = require('./Brand');
const Categories = require('./Categories');

const Product = db.define('Product', {
  productId: {
    type: DataTypes.STRING(20),
    primaryKey: true,
    field: 'product_id'
  },
  name: DataTypes.INTEGER,
  categoryId: {
    type: DataTypes.STRING(20),
    field: 'category_id'
  },
  quantity: DataTypes.INTEGER,
  location: DataTypes.INTEGER,
  brandId: {
    type: DataTypes.STRING(20),
    field: 'brand_id'
  },
  description: DataTypes.TEXT,
  information: DataTypes.TEXT,
  price: DataTypes.FLOAT,
  createdAt: {
    type: DataTypes.DATE,
    field: 'created_at'
  },
  modifiedAt: {
    type: DataTypes.DATE,
    field: 'modified_at'
  }
}, {
  tableName: 'product',
  timestamps: false
});

Product.belongsTo(Brand, { foreignKey: 'brand_id' , onDelete: 'CASCADE', onUpdate: 'CASCADE'});
Product.belongsTo(Categories, { foreignKey: 'category_id' , onDelete: 'CASCADE', onUpdate: 'CASCADE'});

module.exports = Product;
