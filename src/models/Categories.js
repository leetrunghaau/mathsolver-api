const { DataTypes } = require('sequelize');
const db = require('../config/Database');

const Categories = db.define('Categories', {
  name: DataTypes.TEXT,
  parent: DataTypes.STRING(20),
  column_name: DataTypes.INTEGER,
  enable: DataTypes.BOOLEAN,
  image: DataTypes.TEXT,
  created_at: DataTypes.DATE,
  modified_at: DataTypes.DATE,
  category_id: {
    type: DataTypes.STRING(20),
    primaryKey: true
  }
},{
  tableName: 'categories',
  timestamps: false
});

module.exports = Categories;
