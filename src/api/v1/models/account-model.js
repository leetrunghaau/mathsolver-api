const { DataTypes } = require('sequelize');
const db = require('../../config/Database');
const user = require('./User');

const Account = db.define('Account', {
  accountId: {
    type: DataTypes.STRING(20),
    primaryKey: true,
    field: 'account_id'
  },
  userId:{
    type: DataTypes.STRING(20),
    field: 'user_id'
  } ,
  password: DataTypes.TEXT,
  role: DataTypes.STRING(11),
  modifiedAt:{
    type:DataTypes.DATE,
    field:'modified_at'
  } 
},{
  tableName: 'account',
  timestamps: false
});

Account.belongsTo(user, { foreignKey: 'user_id', onDelete: 'CASCADE', onUpdate: 'CASCADE' });

module.exports = Account;
