const { DataTypes ,Deferrable} = require('sequelize');
const db = require('../../config/Database');

const Brand = db.define('Brand', {
  brandId: {
    type: DataTypes.STRING(20),
    primaryKey: true,
    field: 'brand_id',
    deferrable: Deferrable.INITIALLY_IMMEDIATE
  },
  name: DataTypes.TEXT,
  description:DataTypes.TEXT,
  blogLink: {
    type: DataTypes.TEXT,
    field: 'blog_link'
  }
}, {
  tableName: 'brand',
  timestamps: false
});

module.exports = Brand;
