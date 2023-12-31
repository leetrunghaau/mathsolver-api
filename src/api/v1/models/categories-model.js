const { DataTypes } = require('sequelize');
const db = require('../../config/Database');

const Categories = db.define('Categories', {
  name: DataTypes.TEXT,
  parent: DataTypes.STRING(20),
  image: DataTypes.TEXT,
  categoryId: {
    type: DataTypes.STRING(20),
    primaryKey: true,
    field: 'category_id'
  }
}, {
  tableName: 'categories',
  timestamps: false
});
Categories.belongsTo(Categories,{
  foreignKey: 'parent', 
    targetKey: 'categoryId', 
    onDelete: 'CASCADE', 
    onUpdate: 'CASCADE' 
})
module.exports = Categories;
