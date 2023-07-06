const { DataTypes } = require('sequelize');
const db = require('../../config/Database');
const blogCategories = require('./blog-categories-model');
const user = require('./User');


const Blog = db.define('Blog', {
    blogId: {
        type: DataTypes.STRING(20),
        primaryKey: true,
        field: 'blog_id'
    },
    blogCategoryId: {
        type: DataTypes.STRING(20),
        field: 'blog_category_id'
    },
    userId: {
        type: DataTypes.STRING(20),
        field: 'user_id'
    },
    title: DataTypes.TEXT,
    thumbnail: DataTypes.TEXT,
    introduction:DataTypes.TEXT,
    content:DataTypes.TEXT,
    createAt:{
        type: DataTypes.DATE,
        field:'create_at'
    },
    modifiedAt:{
        type: DataTypes.DATE,
        field:'modified_at'
    },
    views:DataTypes.INTEGER

},{
    tableName: 'blog',
  timestamps: false
});
Blog.belongsTo(user,{foreignKey: 'user_id', onDelete: 'CASCADE', onUpdate: 'CASCADE'});
Blog.belongsTo(blogCategories,{foreignKey:'blog_category_id',onDelete: 'CASCADE', onUpdate: 'CASCADE' });

module.exports = Blog;
