const AccountRepository = require("../repositories/AccountRepository");

class AccountService{
    static async getAccountByUserId(userId){
        const acc = await AccountRepository.getAccountByUserId(userId);
        if(!acc){
            return null;
        }
        return acc;
    }
    
}
module.exports = AccountService;