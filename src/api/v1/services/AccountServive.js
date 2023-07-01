const AccountDTO = require("../dtos/account/AccountDTO");
const AccountRepository = require("../repositories/AccountRepository");

class AccountService{
    static async getAccountByUserId(userId){
        const acc = await AccountRepository.getAccountByUserId(userId);
        if(!acc){
            return null;
        }
        const accDTO = new AccountDTO(acc.accountId, acc.userId, acc.password, acc.role, acc.modifiedAt);
        return accDTO;
    }

}
module.exports = AccountService;