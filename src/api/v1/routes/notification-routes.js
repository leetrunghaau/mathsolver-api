
const express = require('express');
const {  authorization } = require('../middlewares/auth-middleware');
const NotificationController = require('../controllers/notification-controller');
const router = express.Router();


// Define routes
router.get('/notification/:notificationId', NotificationController.getNotificationById);
router.get('/current-notifications', NotificationController.getCurrentNotification);
router.get('/notifications',authorization(['admin']), NotificationController.getAllNotification);
router.post('/notification', authorization(['admin']), NotificationController.createNotification);
router.put('/notification', authorization(['admin']), NotificationController.updateNotificationById);
router.delete('/notification/:notificationId',authorization(['admin']), NotificationController.deleteNotificationById)



module.exports = router;