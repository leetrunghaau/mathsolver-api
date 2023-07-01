const { DataTypes } = require('sequelize');
const db = require('../../config/Database');

const Brand = db.define('Brand', {
  brand_id: {
    type: DataTypes.STRING(20),
    primaryKey: true,
    field: 'brand_id'
  },
  name: DataTypes.TEXT,
  blogLink: {
    type: DataTypes.TEXT,
    field: 'blog_link'
  },
  createdAt: {
    type: DataTypes.DATE,
    field: 'created_at'
  }
}, {
  tableName: 'brand',
  timestamps: false
});

module.exports = Brand;
