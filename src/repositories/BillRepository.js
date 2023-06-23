// billRepository.js

const Bill = require('../models/Bill');

class BillRepository {
  async getBillById(billId) {
    return Bill.findByPk(billId);
  }

  async createBill(billData) {
    return Bill.create(billData);
  }

  async updateBill(billId, billData) {
    await Bill.update(billData, {
      where: { bill_id: billId },
    });
    return this.getBillById(billId);
  }

  async deleteBill(billId) {
    return Bill.destroy({
      where: { bill_id: billId },
    });
  }
}

module.exports = new BillRepository();
