const { generateId } = require('../helpers/generate-key');
const NotificationRepository = require('../repositories/notification-repository')
class NotificationService {
    static async getNotificationById(notificationId) {
        const notification = await NotificationRepository.getNotificationById(notificationId)
        if (!notification) {
            return null;
        }
        return notification;
    }
    static async getCurrentNotification() {
        const notification = await NotificationRepository.getCurrentNotification()
        if (!notification) {
            return null;
        }
        return notification;
    }
    static async getAllNotification(){
        const notifications = await NotificationRepository.getAllNotification();
        if(notifications.length === 0){
            return null;
        }
        return notifications;
    }
    static async createNotification(notificationData){
        notificationData.notificationId =  generateId();
        const notification = await NotificationRepository.createNotification(notificationData);
        if(!notification){
            return null;
        }
        return notification;
    }
    static async updateNotificationById(notificationId, notificationData){
        const notification = await NotificationRepository.updateNotificationById(notificationId, notificationData);
        if(!notification){
            return null;
        }
        return notification;
    }
    static async deleteNotificationById(notificationId){
        const notification = await NotificationRepository.deleteNotificationById(notificationId);
        if(notification <=0){
            return null;
        }
        return notification;
    }
}
module.exports = NotificationService;

