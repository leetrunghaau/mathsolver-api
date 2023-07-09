const { DataTypes } = require('sequelize');
const db = require('../../config/Database');
const Product = require('./product-model');

const ProductImage = db.define('ProductImage', {
  productImageId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    field: 'product_image_id'
  },
  productId: {
    type: DataTypes.STRING(20),
    field: 'product_id'
  },
  name: DataTypes.TEXT,
  main: DataTypes.BOOLEAN,
  image: DataTypes.TEXT,
  
}, {
  tableName: 'product_image',
  timestamps: false
});

ProductImage.belongsTo(Product, { foreignKey: 'product_id' , onDelete: 'CASCADE', onUpdate: 'CASCADE'});

module.exports = ProductImage;
