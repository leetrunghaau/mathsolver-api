const { DataTypes } = require('sequelize');
const db = require('../config/Database');

const Categories = db.define('Categories', {
  name: DataTypes.TEXT,
  parent: DataTypes.STRING(20),
  enable: DataTypes.BOOLEAN,
  image: DataTypes.TEXT,
  createdAt: {
    type: DataTypes.DATE,
    field: 'created_at'
  },
  modifiedAt: {
    type: DataTypes.DATE,
    field: 'modified_at'
  },
  categoryId: {
    type: DataTypes.STRING(20),
    primaryKey: true,
    field: 'category_id'
  }
}, {
  tableName: 'categories',
  timestamps: false
});

module.exports = Categories;
