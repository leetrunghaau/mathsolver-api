
const express = require('express');
const {  authorization } = require('../middlewares/auth-middleware');
const NotificationController = require('../controllers/notification-controller');
const router = express.Router();


// Define routes
router.get('/notification/:notificationId', NotificationController.getNotificationById);
router.get('/notifications',authorization(['user','admin']), NotificationController.getAllNotification);
router.post('/notification', authorization(['user','admin']), NotificationController.createNotification);
router.put('/notification', authorization(['user','admin']), NotificationController.updateNotificationById);
router.delete('/notification/:notificationId',authorization(['user','admin']), NotificationController.deleteNotificationById)



module.exports = router;