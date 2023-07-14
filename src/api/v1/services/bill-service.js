const { generateId } = require("../helpers/generate-key");
const BillRepository = require("../repositories/bill-repository")

class BillService {
    static async getBillById(billId) {
        const bill = await BillRepository.getBillById(billId);
        if (!bill) {
            return null;
        }
        return bill;
    }
    static async getAllBill() {
        const bills = await BillRepository.getAllBill();
        if (!bills) {
            return null;
        }
        return bills;
    }
    static async getAllBillByListOrderId(ordersId) {
        const bills = await BillRepository.getAllBillByListOrderId(ordersId);
        if (!bills) {
            return null;
        }
        return bills;
    }
    static async createBill(billData) {
        billData.billId = await generateId();
        billData.createdAt = new Date();
        const bill = await BillRepository.createBill(billData);
        if (!bill) {
            return null;
        }
        return bill;
    }
    static async updateBill(billId, billData) {
        const bill = await BillRepository.updateBill(billId, billData);
        if (!bill) {
            return null;
        }
        return bill;
    }
    static async deleteBill(billId) {
        const bill = await BillRepository.deleteBill(billId);
        if(bill<=0){
            return null;
        }
        return bill;
    }
}
module.exports = BillService;