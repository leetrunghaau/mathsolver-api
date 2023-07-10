const moment = require('moment');
const { generateId } = require("../helpers/generate-key");
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
    static async updateAccountByUserId(userId, accountData){
        accountData.modifiedAt = new Date();
        console.log(accountData);
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

    static async createAccount(accountData){
        accountData.accountId = await generateId();
        accountData.modifiedAt = new Date();
        return await AccountRepository.createAccount(accountData);
        
    }
}
module.exports = AccountService;