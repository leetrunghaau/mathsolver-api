const account = require('../models/Account')
const accountDTO = require('../dtos/account/AccountDTO')

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
        return account.create(AccountData);
    }
    static async getAccountByUserId(userId){
        return account.findOne({where:{userId: userId}})

    }

}
module.exports = AccountRepository;