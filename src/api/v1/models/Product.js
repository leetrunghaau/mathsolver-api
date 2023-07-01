const { DataTypes } = require('sequelize');
const db = require('../../config/Database');
const brand = require('./Brand');
const categories = require('./Categories');

const Product = db.define('Product', {
  productId: {
    type: DataTypes.STRING(20),
    primaryKey: true,
    field: 'product_id'
  },
  name: DataTypes.TEXT,
  categoryId: {
    type: DataTypes.STRING(20),
    field: 'category_id'
  },
  quantity: DataTypes.INTEGER,
  brandId: {
    type: DataTypes.STRING(20),
    field: 'brand_id'
  },
  information: DataTypes.TEXT,
  price: DataTypes.DOUBLE,
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

Product.belongsTo(brand, { foreignKey: 'brand_id' , onDelete: 'CASCADE', onUpdate: 'CASCADE'});
Product.belongsTo(categories, { foreignKey: 'category_id' , onDelete: 'CASCADE', onUpdate: 'CASCADE'});

module.exports = Product;
