const Account = require('../models/account-model')

class AccountRepository {
    static async getAccountById(accountId) {
        const accountData = account.findByPk(accountId);
        return accountData;
    }

    static async createAccount(AccountData) {
        return Account.create(AccountData);
    }
    static async getAccountByUserId(userId) {
        return Account.findOne({ where: { userId: userId } })

    }
    
    static async updateAccount(accountId, accountData) {
        await Account.update(accountData, {
            where: { accountId: accountId }
        });
        return this.getAccountById(accountId);
    }
    static async updateAccountByUserId(userId, accountData) {
        await Account.update(accountData, { where: { userId: userId } });
        return this.getAccountByUserId(userId);
    }

    static async getAllAccountByUserId(userId) {
        return Account.findAll({ where: { userId: userId } })
    }
    static async getAllAccount() {
        return Account.findAll()
    }
    static async deleteAccountById(accountId) {
        return Account.destroy({ where: { accountId: accountId } })
    }
    static async deleteAccountByUserId(userId){
        return Account.destroy({ where: { userId: userId } })
    }

}
module.exports = AccountRepository;