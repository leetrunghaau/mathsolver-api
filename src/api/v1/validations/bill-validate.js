const joi = require('joi')
const getBillValidate = data =>{
    const billData = joi.object({
        billId: joi.string().length(18).required()
    })
    return billData.required(data);
}
module.exports  = {
    getBillValidate
}