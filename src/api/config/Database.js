// database.js

const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  dialect: 'mysql',
  timezone: '+07:00'
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Database connection has been established successfully.');
  })
  .catch((error) => {
    console.error('Unable to connect to the database:', error);
  });

// Đồng bộ hóa model với cơ sở dữ liệu
// sequelize.sync()
//   .then(() => {
//     console.log('Cơ sở dữ liệu đã được đồng bộ hóa');
//   })
//   .catch((error) => {
//     console.error('Lỗi khi đồng bộ hóa cơ sở dữ liệu:', error);
//   });

// Đồng bộ hóa model với cơ sở dữ liệu và tự động tạo cơ sở dữ liệu mới nếu nó chưa tồn tại
// sequelize.sync({ force: true }) // Thêm tùy chọn { force: true }
//   .then(() => {
//     console.log('Cơ sở dữ liệu đã được đồng bộ hóa và tạo mới nếu cần');
//   })
//   .catch((error) => {
//     console.error('Lỗi khi đồng bộ hóa cơ sở dữ liệu:', error);
//   });


module.exports = sequelize;
