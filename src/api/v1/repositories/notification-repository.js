// NotificationRepository.js
const { Op } = require('sequelize');
const Notification = require('../models/notification-model');

class NotificationRepository {
  static async getNotificationById(notificationId) {
    return Notification.findByPk(notificationId);
  }
  static async getCurrentNotification() {
    const currentDate = new Date();
    return Notification.findOne({
      where: {
        enableAt: { [Op.lt]: currentDate },
        disableAt: { [Op.gt]: currentDate }
      }
    });
  }
  static async getAllNotification() {
    return Notification.findAll();
  }
  static async createNotification(notificationData) {
    return Notification.create(notificationData);
  }

  static async updateNotificationById(notificationId, notificationData) {
    await Notification.update(notificationData, {
      where: { notificationId: notificationId },
    });
    return this.getNotificationById(notificationId);
  }

  static async deleteNotificationById(notificationId) {
    return Notification.destroy({
      where: { notificationId: notificationId },
    });
  }
}

module.exports = NotificationRepository;
