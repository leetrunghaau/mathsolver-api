const loginRequestDTO = require('../dtos/account/LoginRequestDTO');
const AccountService = require('../services/AccountServive');
const userService = require('../services/UserServive');
const PasswordCrypt = require('../helpers/PasswordCrypt');
const { LoginValidate } = require('../validations/sigValidate');

// const 
class Login {
    static async loginEmailPassword (req, res){
        const { email, password } = req.body;
        const {error} = LoginValidate(req.body);
        if(email == undefined || password == undefined){
            return res.status(400).json({ message: 'data error ' });
        }
        const loginData = new loginRequestDTO(email,password);
        const user = await userService.getUserByEmail(loginData.email);
        console.log(user);
        const account = await AccountService.getAccountByUserId(user.userId);
        console.log(account);
        // if(await PasswordCrypt.comparePasswords(loginData.password, account.password) != true){
        //     return 
        // }
        // console.log(req)
        
        return res.status(200).json({ message: 'Internal server error ' });
    }
}
module.exports = Login;