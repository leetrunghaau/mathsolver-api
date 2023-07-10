const jwt = require('jsonwebtoken');


const sigAccessToken = async (userId, role) => {
    return new Promise((resolve, reject) => {
        const payload = {
            userId,
            role
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
    sigAccessToken,
    sigAuthToken
}