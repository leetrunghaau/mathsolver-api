const joi = require('joi')

const getBrandValidate = data =>{
  const  brandData = joi.object({
    brandId: joi.string().max(20).required(),
  })
  return brandData.validate(data)
}
const createBrandValidate = data =>{
    const brandData = joi.object({
        name: joi.string().required(),
        description: joi.string().required(),
        blogLink: joi.string().required()
    })
    return brandData.validate(data);
}
const updateBrandValidate = data=>{
  const brandData = joi.object({
    brandId: joi.string().max(20).required(),
    name: joi.string().required(),
    description: joi.string().required(),
    blogLink: joi.string().required()
  })
  return brandData.validate(data);
}
const deleteBrandValidate = data =>{
  const brandData =  joi.object({
    brandId: joi.string().max(20).required(),

  })
  return brandData.validate(data);
}
module.exports = {
    getBrandValidate,
    createBrandValidate,
    updateBrandValidate,
    deleteBrandValidate
}