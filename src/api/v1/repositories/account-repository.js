const Account = require('../models/account-model')

class AccountRepository {
    static async getAccountById(accountId){
        const accountData = account.findByPk(accountId);
        return new accountDTO(
            accountData.accountId,
            accountData.userID,
            accountData.password,
            accountData.role,
            accountData.modifiedAt
        )
    }
    static async createAccount(AccountData){
        return Account.create(AccountData);
    }
    static async getAccountByUserId(userId){
        return Account.findOne({where:{userId: userId}})

    }

}
module.exports = AccountRepository;