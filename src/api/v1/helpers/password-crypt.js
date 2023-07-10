const bcrypt = require('bcrypt');

const hashPassword = async (password) => {
    const saltRounds = Number(process.env.BCRYPT_SALT_ROUNDS);

    try {
        const salt = await bcrypt.genSalt(saltRounds);
        const hash = await bcrypt.hash(password, salt);
        return hash;
    } catch (error) {
        console.log(error);
        throw new Error('Mã hóa mật khẩu thất bại.');
    }
}

const comparePasswords = async (password, hashedPassword) => {
    try {
        const match = await bcrypt.compare(password, hashedPassword);
        return match;
    } catch (error) {
        throw new Error('So sánh mật khẩu thất bại.');
    }
}

module.exports = {
    hashPassword,
    comparePasswords
};
