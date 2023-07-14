const { DataTypes } = require('sequelize');
const db = require('../../config/Database');


const User = db.define('User', {
  userId: {
    type: DataTypes.STRING(20),
    primaryKey: true,
    field: 'user_id'
  },
  firstName: {
    type: DataTypes.STRING(20),
    field: 'first_name'
  },
  lastName: {
    type: DataTypes.STRING(20),
    field: 'last_name'
  },
  role: DataTypes.STRING(11),
  email: DataTypes.STRING(50),
  birthDate: {
    type: DataTypes.DATEONLY,
    field: 'birth_date'
  },
  gender: DataTypes.STRING(7),
  createdAt: {
    type: DataTypes.DATE,
    field: 'created_at'
  },
  modifiedAt:{
    type: DataTypes.DATE,
    field:'modified_at'
  },
  verified: DataTypes.DATE,
}, {
  tableName: 'user',
  timestamps: false
});

module.exports = User;
