const { generateId } = require("../helpers/generate-key");
const UserRepository = require("../repositories/user-repository");
const moment = require('moment');

class UserService {
    static async getUserByEmail(email) {
        const user = await UserRepository.getUserByEmail(email);
        if (!user) {
            return null;
        }
        return user;
    }
    static async getUserById(userId){
        const user = await UserRepository.getUserById(userId);
        if(!user){
            return null;
        }
        return user;
    }
    static async getAllUser(){
        const users = await UserRepository.getAllUser();
        if(users.length === 0){
            return null;
        }
        return users
    }
    static async getListUser(){
        const users = await UserRepository.getListUser();
        if(users.length === 0){
            return null;
        }
        return users;
    }
    static async createUser(userData){
        userData.userId =  generateId();
        userData.verified = null;
        userData.createdAt = new Date();
        userData.modifiedAt = new Date();
        const user = await UserRepository.createUser(userData);
        if(!user){
            return null;
        }
        return user;
    }
    static async updateUserById(userId, userData){
        userData.modifiedAt = new Date();
        const user = await UserRepository.updateUser(userId, userData);
        if(!user){
            return null;
        }
        return user;

    }
    static async deleteUserById(userId){
        const user = await UserRepository.deleteUserById(userId);
        if(user <=0){
            return null;
        }
        return user;
    }
}
module.exports = UserService;