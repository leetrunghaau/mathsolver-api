const jwt = require('jsonwebtoken');


const sigAccessToken = async (userId, role) => {
    return new Promise((resolve, reject) => {
        const payload = {
            userId,
            role
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
const sigRefreshToken = async (userId) => {
    return new Promise((resolve, reject) => {
        const payload = {
            userId
        }
        const secret = process.env.REFRESH_TOKEN_SECRET;
        const option = {
            expiresIn: '1y'
        }
        jwt.sign(payload, secret, option, (err, token) => {
            if (err) reject(err)
            resolve(token)
        })

    })
}

module.exports = {
    sigAccessToken,
    sigRefreshToken
}