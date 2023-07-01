// billRepository.js

const bill = require('../models/Bill');

class BillRepository {
  static async getBillById(billId) {
    return bill.findByPk(billId);
  }

  static async createBill(billData) {
    return bill.create(billData);
  }

  static async updateBill(billId, billData) {
    await bill.update(billData, {
      where: { bill_id: billId },
    });
    return this.getBillById(billId);
  }

  static async deleteBill(billId) {
    return bill.destroy({
      where: { bill_id: billId },
    });
  }
}

module.exports = BillRepository;
