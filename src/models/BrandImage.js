const { DataTypes } = require('sequelize');
const db = require('../config/Database');
const Brand = require('./Brand');

const BrandImage = db.define('BrandImage', {
  brandImageId: {
    type: DataTypes.STRING(20),
    primaryKey: true,
    field: 'brand_image_id'
  },
  brandId:{
    type: DataTypes.STRING(20),
    field:'brand_id'
  } ,
  main: DataTypes.BOOLEAN,
  name: DataTypes.TEXT
},{
  tableName: 'brand_image',
  timestamps: false
});

BrandImage.belongsTo(Brand, { foreignKey: 'brand_id', onDelete: 'CASCADE', onUpdate: 'CASCADE' });

module.exports = BrandImage;
