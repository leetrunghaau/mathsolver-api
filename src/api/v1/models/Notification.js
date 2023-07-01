const { DataTypes } = require('sequelize');
const db = require('../../config/Database');
const user = require('./User');

const Notification = db.define('Notification',{
    notificationId:{
        type: DataTypes.STRING(20),
        primaryKey:true,
        field:'notification_id'
    },
    name:DataTypes.TEXT,
    enableAt:{
        type:DataTypes.DATE,
        field:'enable_at'
    },
    disableAt:{
        type: DataTypes.DATE,
        field:'disable_at'
    },
    userId: {
        type: DataTypes.STRING(20),
        field:'user_id'
    },
    content:DataTypes.TEXT
},{
    tableName:'notification',
    timestamps:false
});

Notification.belongsTo(user,{foreignKey:'user_id',onDelete: 'CASCADE', onUpdate: 'CASCADE' });

module.exports = Notification;