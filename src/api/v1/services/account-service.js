const AccountRepository = require("../repositories/account-repository");

class AccountService{
    static async getAccountByUserId(userId){
        const acc = await AccountRepository.getAccountByUserId(userId);
        if(!acc){
            return null;
        }
        return acc;
    }
    static async updateAccount(accountId, AccountData){
       const acc = await AccountRepository.updateAccount(accountId, AccountData)
        if(!acc){
            return null;
        }
        return acc
    }
    static async updateAccountByUser(userId, accountData){
        const acc = await AccountRepository.updateAccountByUserId(userId, accountData);
        if(!acc){
            return null;
        }
        return acc
    }
    static async checkPasswordByUserId(userId, password){
        const acc = await AccountRepository.getAccountByUserId(userId);
        if(!acc){
            return null;
        }
        if(acc.password != password){
            return false;
        }
        return true;
    }
    static async updatePasswordByUserId(userId, password){
        const acc = await AccountRepository.getAccountByUserId(userId);
        acc.password = password;
        acc.modifiedAt = new Date();
        const newAcc = await AccountRepository.updateAccountByUserId(userId, acc);
        if(!newAcc){
            return null;
        }
        return newAcc;

    }
}
module.exports = AccountService;