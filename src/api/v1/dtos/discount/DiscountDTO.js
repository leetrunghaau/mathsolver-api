// discountDTO.js

class DiscountDTO {
    constructor(discountId, createdAt, modifiedAt, enableAt, disableAt, type, value, quantity, code) {
      this.discountId = discountId,
      this.createdAt = createdAt,
      this.modifiedAt = modifiedAt,
      this.enableAt = enableAt,
      this.disableAt = disableAt,
      this.type = type,
      this.value = value,
      this.quantity = quantity,
      this.code = code
    }
  
  }
  
  module.exports = DiscountDTO;
  