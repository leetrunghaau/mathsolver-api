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
    static async getUserById(id){
        const user = await UserRepository.getUserById(userId);
        if(!user){
            return null;
        }
        return user;
    }
    static async getListUser(){
        const users = await UserRepository.getListUser();
        if(!users){
            return null;
        }
        return users;
    }
    static async createUser(userData){
        userData.userId =  generateId();
        userData.verified = null;
        userData.role = 'user';
        userData.createdAt = new Date();
        userData.modifiedAt = new Date();
        return await UserRepository.createUser(userData);
    }
    static async updateUserByUserId(userId, userData){
        userData.modifiedAt = new Date();
        await UserRepository.updateUser(userId, userData).then(user =>{
            return user;
        }).catch(error => {
            return null;
        })

    }
}
module.exports = UserService;