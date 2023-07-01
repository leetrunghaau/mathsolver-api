class LoginResponseDTO {
    constructor(userId, role, token) {
        this.userId = userId,
            this.role = role,
            this.token = token
    };

};
module.exports = LoginResponseDTO;