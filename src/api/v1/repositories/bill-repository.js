// billRepository.js

const Bill = require('../models/bill-model');

class BillRepository {
  static async getBillById(billId) {
    return Bill.findByPk(billId);
  }

  static async createBill(billData) {
    return Bill.create(billData);
  }

  static async updateBill(billId, billData) {
    await Bill.update(billData, {
      where: { bill_id: billId },
    });
    return this.getBillById(billId);
  }

  static async deleteBill(billId) {
    return Bill.destroy({
      where: { bill_id: billId },
    });
  }
}

module.exports = BillRepository;
