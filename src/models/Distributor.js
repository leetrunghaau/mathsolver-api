const { DataTypes } = require('sequelize');
const db = require('../config/Database');

const Distributor = db.define('Distributor', {
  distributorId: {
    type: DataTypes.STRING(50),
    primaryKey: true,
    field:'distributor_id'
  },
  name: DataTypes.STRING(50),
  address: DataTypes.TEXT,
  phone: DataTypes.STRING(12)
},{
  tableName: 'distributor',
  timestamps: false
});

module.exports = Distributor;
