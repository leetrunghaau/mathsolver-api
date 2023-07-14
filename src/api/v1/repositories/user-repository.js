// userRepository.js

const User = require('../models/user-model');

class UserRepository {
  static async getUserById(userId) {
    return User.findByPk(userId);
  }

  static async createUser(userData) {
    return User.create(userData);
  }
  static async getListUser(){
    return User.findAll();
  }
  static async updateUser(userId, userData) {
    await User.update(userData, {
      where: { user_id: userId },
    });
    return this.getUserById(userId);
  }

  static async deleteUser(userId) {
    return User.destroy({
      where: { user_id: userId },
    });
  }

  static async getUserByEmail(email) {
    return User.findOne({ 
      where: { email: email } 
    });
  }
}

module.exports = UserRepository;
