// userRepository.js

const user = require('../models/User');

class UserRepository {
  static async getUserById(userId) {
    return user.findByPk(userId);
  }

  static async createUser(userData) {
    return user.create(userData);
  }

  static async updateUser(userId, userData) {
    await user.update(userData, {
      where: { user_id: userId },
    });
    return this.getUserById(userId);
  }

  static async deleteUser(userId) {
    return user.destroy({
      where: { user_id: userId },
    });
  }

  static async getUserByEmail(email) {
    return user.findOne({ 
      where: { email: email } 
    });
  }
}

module.exports = UserRepository;
