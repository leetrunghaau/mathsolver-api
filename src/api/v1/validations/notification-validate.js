const joi = require('joi')

const getNotificationValidate = data => {
    const notificationData = joi.object({
        notificationId: joi.string().max(20).required(),
    })
    return notificationData.validate(data)
}
const createNotificationValidate = data => {
    const notificationData = joi.object({
        name: joi.string().required(),
        enableAt: joi.date().required(),
        disableAt: joi.date().required(),
        content: joi.string().required()
    })
    return notificationData.validate(data);
}
const updateNotificationValidate = data => {
    const notificationData = joi.object({
        notificationId: joi.string().required(),
        name: joi.string().required(),
        enableAt: joi.date().required(),
        disableAt: joi.date().required(),
        content: joi.string().required()
    })
    return notificationData.validate(data);
}
const deleteNotificationValidate = data => {
    const notificationData = joi.object({
        notificationId: joi.string().max(20).required(),

    })
    return notificationData.validate(data);
}
module.exports = {
    getNotificationValidate,
    createNotificationValidate,
    updateNotificationValidate,
    deleteNotificationValidate
}