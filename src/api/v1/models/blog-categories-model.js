const { DataTypes } = require('sequelize');
const db = require('../../config/Database');

const BlogCategories = db.define('BlogCategories', {
    blogCategoryId: {
        type: DataTypes.STRING(20),
        primaryKey: true,
        field: 'blog_category_id'
    },
    name: DataTypes.STRING(50),
    parent: DataTypes.STRING(20)

}, {
    tableName: 'blog_categories',
    timestamps: false
});
BlogCategories.belongsTo(BlogCategories, { 
    foreignKey: 'parent', 
    targetKey: 'blogCategoryId', 
    onDelete: 'CASCADE', 
    onUpdate: 'CASCADE' 
})
module.exports = BlogCategories;