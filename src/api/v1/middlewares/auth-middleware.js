// jwtMiddleware.js
const jwt = require('jsonwebtoken');
const createError = require('http-errors')

const noAuthMiddleware = (req, res, next) => {

    if (!req.headers.authorization) {
        next();
    } else {
        res.status(401).json({ error: 'Unauthorized' });
    }
};



const authorization = permission =>{
    return (req, res, next)=>{
        if (!req.headers['authorization']) {
            return next(createError.Unauthorized())
        }
        const authHeader = req.headers['authorization'];
        const bearerToken = authHeader.split(' ');
        const token = bearerToken[1];
        console.log(token);
        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, payload) => {
            if (err) {
                // if (err.name === 'JsonWebTokenError') {
                //     return next(createError.Unauthorized());
                // }
                return next(createError.Unauthorized(err.message));
            }
            console.log(payload);
            req.userId = payload.userId;
            if(!permission.includes(payload.role)){
                return next(createError[401]('you dont have permission'));
            }
            next();
        })
    }
}
module.exports = {
    noAuthMiddleware,
    authorization
}