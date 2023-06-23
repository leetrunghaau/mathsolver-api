const { DataTypes } = require('sequelize');
const db = require('../config/Database');
const Brand = require('./Brand');

const BrandImage = db.define('BrandImage', {
  brand_image_id: {
    type: DataTypes.STRING(20),
    primaryKey: true
  },
  brand_id: DataTypes.STRING(20),
  main: DataTypes.BOOLEAN,
  name: DataTypes.TEXT
},{
  tableName: 'brand_image',
  timestamps: false
});

BrandImage.belongsTo(Brand, { foreignKey: 'brand_id' });

module.exports = BrandImage;
