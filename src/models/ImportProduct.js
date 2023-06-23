const { DataTypes } = require('sequelize');
const db = require('../config/Database');
const Product = require('./Product');
const Distributor = require('./Distributor');
const User = require('./User');

const ImportProduct = db.define('ImportProduct', {
  import_product_id: {
    type: DataTypes.STRING(20),
    primaryKey: true
  },
  product_id: DataTypes.STRING(20),
  distributor_id: DataTypes.STRING(20),
  user_id: DataTypes.STRING(20),
  quantity: DataTypes.INTEGER
},{
  tableName: 'import_product',
  timestamps: false
});

ImportProduct.belongsTo(Product, { foreignKey: 'product_id' });
ImportProduct.belongsTo(Distributor, { foreignKey: 'distributor_id' });
ImportProduct.belongsTo(User, { foreignKey: 'user_id' });

module.exports = ImportProduct;
