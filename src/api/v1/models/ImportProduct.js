const { DataTypes } = require('sequelize');
const db = require('../../config/Database');
const product = require('./Product');
const distributor = require('./Distributor');
const user = require('./User');

const ImportProduct = db.define('ImportProduct', {
  importProductId: {
    type: DataTypes.STRING(20),
    primaryKey: true,
    field: "import_product_id"
  },
  productId: {
    type: DataTypes.STRING(20),
    field: 'product_id'
  },
  distributorId: {
    type: DataTypes.STRING(20),
    field: 'distributor_id'
  },
  userId: {
    type: DataTypes.STRING(20),
    field: 'user_id'
  },
  quantity: DataTypes.INTEGER
}, {
  tableName: 'import_product',
  timestamps: false
});

ImportProduct.belongsTo(product, { foreignKey: 'product_id', onDelete: 'CASCADE', onUpdate: 'CASCADE' });
ImportProduct.belongsTo(distributor, { foreignKey: 'distributor_id', onDelete: 'CASCADE', onUpdate: 'CASCADE' });
ImportProduct.belongsTo(user, { foreignKey: 'user_id', onDelete: 'CASCADE', onUpdate: 'CASCADE' });

module.exports = ImportProduct;
