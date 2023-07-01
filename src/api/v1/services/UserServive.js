const UserRepository = require("../repositories/userRepository");
const UserDTO = require('../dtos/user/UserDTO')

class userService {
    static async getUserByEmail(email) {
        const user = await UserRepository.getUserByEmail(email);
        if (!user) {
            return null;
        }
        const userDTO = new UserDTO(user.userId, user.addressId, user.firstName, user.lastName, user.email, user.birthDate, user.gender, user.createAt);
        return userDTO;
    }
}
module.exports = userService;