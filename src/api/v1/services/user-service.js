const UserRepository = require("../repositories/userRepository");
const UserDTO = require('../dtos/user/UserDTO')

class UserService {
    static async getUserByEmail(email) {
        const user = await UserRepository.getUserByEmail(email);
        if (!user) {
            return null;
        }
        return user;
    }
    static async registerUser(data){
        //lưu data vào 2 bản user và database
        //data gồm có first name, last name, email, password
        //b1: lưu user gồm các thông tin user id, 


    }


   
}
module.exports = UserService;