// billDTO.js

class BillDTO {
    constructor(billId, orderId, price, total, discountValue, createAt, discountCode) {
      this.billId = billId,
      this.orderId = orderId,
      this.price = price,
      this.total =total,
      this.discountValue = discountValue,
      this.createAt = createAt,
      this.discountCode = discountCode
      
    }
  };
  
  module.exports = BillDTO;
  