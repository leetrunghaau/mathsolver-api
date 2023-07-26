const jwt = require('jsonwebtoken');


const generateAccessToken = async (userId) => {
    return new Promise((resolve, reject) => {
        const payload = {
            userId,
            
        }
        const secret = process.env.ACCESS_TOKEN_SECRET;
        const option = {
            expiresIn: '30d'
        }
        jwt.sign(payload, secret, option, (err, token) => {
            if (err) reject(err)
            resolve(token)
        })

    })
}
const generateVerificationToken = async(userId, dType) =>{
    return new Promise((resolve, reject) => {
        const payload = {
            userId,
            dType,  //biến chứa mã veryfile code (đặt tên hại não xíu để có giải mã cũng không biết là gì)
            
        }
        const secret = process.env.ACCESS_TOKEN_SECRET;
        const option = {
            expiresIn: '1h'
        }
        jwt.sign(payload, secret, option, (err, token) => {
            if (err) reject(err)
            resolve(token)
        })

    })
}

const sigAuthToken = async(userId) =>{
    return new Promise((resolve, reject) => {
        const payload = {
            userId
        }
        const secret = process.env.ACCESS_TOKEN_SECRET;
        const option = {
            expiresIn: '1h'
        }
        jwt.sign(payload, secret, option, (err, token) => {
            if (err) reject(err)
            resolve(token)
        })

    })
}

module.exports = {
    sigAuthToken,
    generateAccessToken,
    generateVerificationToken
}