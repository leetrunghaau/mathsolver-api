const joi = require('joi');
const getLimitValidate = data =>{
    const getallData = joi.object({
        index: joi.string
    });
    return getallData.validate(data);
}

module.exports = {
    getLimitValidate
}