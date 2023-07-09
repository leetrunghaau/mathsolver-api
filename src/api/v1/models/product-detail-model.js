const { DataTypes } = require('sequelize');
const db = require('../../config/Database');
const Product = require('./product-model');

const ProductDetail = db.define('ProductDetail',{
    productDetailId:{
        type: DataTypes.STRING(20),
        primaryKey:true,
        field:'product_detail_id'
    },
    specifications:DataTypes.TEXT,
    productId:{
        type: DataTypes.STRING(20),
        field:'product_id'
    },
    description:DataTypes.TEXT,
    content:DataTypes.TEXT,
    location:DataTypes.TEXT
},{
    tableName:'product_detail',
    timestamps:false
});

ProductDetail.belongsTo(Product,{foreignKey:'product_id',  onDelete: 'CASCADE', onUpdate: 'CASCADE' });

module.exports = ProductDetail;