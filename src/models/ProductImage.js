const { DataTypes } = require('sequelize');
const db = require('../config/Database');
const Product = require('./Product');

const ProductImage = db.define('ProductImage', {
  product_image_id: {
    type: DataTypes.INTEGER,
    primaryKey: true
  },
  product_id: DataTypes.STRING(20),
  name: DataTypes.TEXT,
  main: DataTypes.BOOLEAN,
  image: DataTypes.TEXT,
  image_id: DataTypes.STRING(20)
},{
  tableName: 'product_image',
  timestamps: false
});

ProductImage.belongsTo(Product, { foreignKey: 'product_id' });

module.exports = ProductImage;
