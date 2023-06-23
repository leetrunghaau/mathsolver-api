const { DataTypes } = require('sequelize');
const db = require('../config/Database');

const Brand = db.define('Brand', {
  brand_id: {
    type: DataTypes.STRING(20),
    primaryKey: true
  },
  name: DataTypes.TEXT,
  posts_link: DataTypes.TEXT,
  created_at: DataTypes.DATE
},{
  tableName: 'brand',
  timestamps: false
});

module.exports = Brand;
