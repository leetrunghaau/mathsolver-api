const NotificationService = require('../services/notification-service');
const {
    getNotificationValidate,
    createNotificationValidate,
    updateNotificationValidate,
    deleteNotificationValidate }
    = require('../validations/notification-validate');
const createError = require('http-errors')
class NotificationController {
    static async getNotificationById(req, res, next) {
        try {
            const { error, value } = getNotificationValidate(req.params);
            if (error) {
                return next(createError.BadRequest(error.details[0].message));
            }
            const notification = await NotificationService.getNotificationById(value.notificationId);
            
            if (!notification) {
                return next(createError.NotFound('Notification not found'));
            }
            return res.status(200).json({
                status: 200,
                message: 'done',
                data: notification
            })
        } catch  (error) {
            console.log(error);
            return next(createError.InternalServerError());
        }
    }
    static async getCurrentNotification(req, res, next) {
        try {
            const notification = await NotificationService.getCurrentNotification();
            if (!notification) {
                return next(createError.NotFound('Notification not found'));
            }
            return res.status(200).json({
                status: 200,
                message: 'done',
                data: notification
            })
        } catch  (error) {
            console.log(error);
            return next(createError.InternalServerError());
        }
    }
    static async getAllNotification(req, res, next) {
        try {
            const notifications = await NotificationService.getAllNotification();
            if (!notifications) {
                return next(createError.NotFound('Notification not found'));
            }
            return res.status(200).json({
                status: 200,
                message: 'done',
                data: notifications
            })
        } catch  (error) {
            console.log(error);
            return next(createError.InternalServerError());
        }
    }
    static async createNotification(req, res, next) {
        try {
            const { error, value } = createNotificationValidate(req.body)
            if (error) {
                return next(createError.BadRequest(error.details[0].message));
            }
            value.userId = req.userId;
            const notification = await NotificationService.createNotification(value);
            if (!notification) {
                return next(createError.InternalServerError());
            };
            return res.status(200).json({
                status: 200,
                message: 'done',
                data: notification
            })
        } catch  (error) {
            console.log(error);
            return next(createError.InternalServerError());
        }
    }
    static async updateNotificationById(req, res, next) {
        try {
            const { error, value } = updateNotificationValidate(req.body);
            if (error) {
                return next(createError.BadRequest(error.details[0].message));
            }
            value.userId = req.userId;
            const { notificationId, ...updatedValue } = value;
            const notification = await NotificationService.updateNotificationById(notificationId, updatedValue);
            if(!notification){
                return next(createError.InternalServerError());
            }
            return res.status(200).json({
                status:200,
                message:'done',
                data: notification
            })
        } catch  (error) {
            console.log(error);
            return next(createError.InternalServerError());
        }
    }
    static async deleteNotificationById(req, res, next) {
        try {
            const {error, value} = deleteNotificationValidate(req.params);
            if (error) {
                return next(createError.BadRequest(error.details[0].message));
            }
            const notification = await NotificationService.deleteNotificationById(value.notificationId);
            if(!notification){
                return next(createError.InternalServerError())
            }
            return res.status(200).json({
                status:200,
                message: 'done'
            })

        } catch  (error) {
            console.log(error);
            return next(createError.InternalServerError());
        }
    }
}
module.exports = NotificationController;