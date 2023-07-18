
const express = require('express');
const {  authorization } = require('../middlewares/auth-middleware');
const NotificationController = require('../controllers/notification-controller');
const router = express.Router();


// Define routes
router.get('/notification/:notificationId', NotificationController.getNotificationById);
router.get('/notifications', NotificationController.getAllNotification);
router.post('/notification', NotificationController.createNotification);
router.put('/notification', NotificationController.updateNotificationById);
router.delete('/notification/:notificationId', NotificationController.deleteNotificationById)



module.exports = router;