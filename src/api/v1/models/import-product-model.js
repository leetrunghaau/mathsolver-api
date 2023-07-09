const { DataTypes } = require('sequelize');
const db = require('../../config/Database');
const Product = require('./product-model');
const Distributor = require('./distributor-model');
const User = require('./user-model');

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

  quantity: DataTypes.INTEGER,
  description: DataTypes.TEXT,
  createdAt: {
    type: DataTypes.DATE,
    field: 'created_at'
  },
  modifiedAt: {
    type: DataTypes.DATE,
    field: 'modified_at'
  }
}, {
  tableName: 'import_product',
  timestamps: false
});

ImportProduct.belongsTo(Product, { foreignKey: 'product_id', onDelete: 'CASCADE', onUpdate: 'CASCADE' });
ImportProduct.belongsTo(Distributor, { foreignKey: 'distributor_id', onDelete: 'CASCADE', onUpdate: 'CASCADE' });
ImportProduct.belongsTo(User, { foreignKey: 'user_id', onDelete: 'CASCADE', onUpdate: 'CASCADE' });

module.exports = ImportProduct;
