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

    static async createUser(userData){
        userData.userId =  generateId();
        userData.verified = null;
        userData.createdAt = new Date();
        userData.modifiedAt = new Date();
        return await UserRepository.createUser(userData);
    }
    static async updateUserByUserId(userId, userData){
        userData.modifiedAt = moment().format('YYYY-MM-DD HH:mm:ss');
        await UserRepository.updateUser(userId, userData).then(user =>{
            return user;
        }).catch(error => {
            return null;
        })

    }


   
}
module.exports = UserService;