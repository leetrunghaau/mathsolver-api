// userRepository.js

const User = require('../models/User');

class UserRepository {
  async getUserById(userId) {
    return User.findByPk(userId);
  }

  async createUser(userData) {
    return User.create(userData);
  }

  async updateUser(userId, userData) {
    await User.update(userData, {
      where: { user_id: userId },
    });
    return this.getUserById(userId);
  }

  async deleteUser(userId) {
    return User.destroy({
      where: { user_id: userId },
    });
  }
}

module.exports = new UserRepository();
