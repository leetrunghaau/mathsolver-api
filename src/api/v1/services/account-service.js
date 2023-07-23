const moment = require('moment');
const { generateId } = require("../helpers/generate-key");
const AccountRepository = require("../repositories/account-repository");

class AccountService {
    static async getAccountByUserId(userId) {
        const acc = await AccountRepository.getAccountByUserId(userId);
        if (!acc) {
            return null;
        }
        return acc;
    }
    
    static async updateAccountByUserId(userId, accountData){
        const account = await AccountRepository.updateAccountByUserId(userId, accountData);
        if(!account){
            return null;
        }
        return account;
    }
    static async updateAccountById(accountId, accountData) {
        accountData.modifiedAt = new Date();
        console.log(accountData);
        console.log(accountId);

        const acc = await AccountRepository.updateAccount(accountId, accountData)
        if (!acc) {
            return null;
        }
        return acc
    }
    
    static async checkPasswordByUserId(userId, password) {
        const acc = await AccountRepository.getAccountByUserId(userId);
        if (!acc) {
            return null;
        }
        if (acc.password != password) {
            return false;
        }
        return true;
    }

    static async createAccount(accountData) {
        accountData.accountId = await generateId();
        accountData.modifiedAt = new Date();
        return await AccountRepository.createAccount(accountData);

    }


    // systemtest

    static async getAllAccountByUserId(userId) {
        const accounts = await AccountRepository.getAllAccountByUserId(userId);
        if (accounts.length == 0) {
            return null;
        }
        return accounts
    }
    static async getAllAccount() {
        const accounts = await AccountRepository.getAllAccount();
        if (accounts.length == 0) {
            return null;
        }
        return accounts
    }
    static async deleteAccountById(accountId){
        const accounts = await AccountRepository.deleteAccountById(accountId);
        if (accounts <= 0) {
            return null;
        }
        return accounts
    }
    static async deleteAccountByUserId(userId){
        const accounts = await AccountRepository.deleteAccountByUserId(userId);
        if (accounts <= 0) {
            return null;
        }
        return accounts
    }
}
module.exports = AccountService;