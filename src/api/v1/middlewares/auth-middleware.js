// jwtMiddleware.js
const jwt = require('jsonwebtoken');
const createError = require('http-errors');
const UserService = require('../services/user-service');

const noAuthMiddleware = (req, res, next) => {

    if (!req.headers.authorization) {
        next();
    } else {
        res.status(401).json({ error: 'Unauthorized' });
    }
};



//   const authorization = permission =>{
//     return async (req, res, next)=>{
//         if (!req.headers['authorization']) {
//             return next(createError.Unauthorized())
//         }
//         const authHeader = req.headers['authorization'];
//         const bearerToken = authHeader.split(' ');
//         const token = bearerToken[1];
//         console.log(token);
//         jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, payload) => {
//             if (err) {
//                 return next(createError.Unauthorized(err.message));
//             }
//             console.log(payload);
//             req.userId = payload.userId;
//             const user = await UserService.getUserById(payload.userId);
//             console.log(user);
//             if(!user){
//                 return next(createError[401]('Đang giả danh hả, cutsttttt :))))'))
//             }
//             if(!permission.includes(user.role)){
//                 return next(createError[401]('you dont have permission'));
//             }
//             next();
//         })
//     }
// }
const authorization = permission => {
    return async (req, res, next) => {
        if (!req.headers['authorization']) {
            return next(createError.Unauthorized());
        }

        const authHeader = req.headers['authorization'];
        const bearerToken = authHeader.split(' ');
        const token = bearerToken[1];
        console.log(bearerToken[0]);
        if (bearerToken[0] != 'Bearer') {
            return next(createError[401]('you dont have permission'));
        }

        try {
            const payload = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
            console.log(payload);

            req.userId = payload.userId;

            const user = await UserService.getUserById(payload.userId);
            console.log(user.role);
            console.log(permission);


            if (!user) {
                return next(createError[401]('Đang giả danh hả, cutsttttt :))))'));
            }

            if (!permission.includes(user.role)) {
                return next(createError[401]('you dont have permission'));
            }

            next();
        } catch (err) {
            return next(createError.Unauthorized(err.message));
        }
    };
};
const  verificationAuthorization = () =>{
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
                
                return next(createError.Unauthorized(err.message));
            }
            console.log(payload);
            req.userId = payload.userId;
            req.verificationCode = payload.dType
            const user = UserService.getUserById(payload.userId);
            if(!user){
                return next(createError[401]('Đang giả danh hả, cutsttttt :))))'))
            }
            
            next();
        })
    }
}
module.exports = {
    noAuthMiddleware,
    authorization,
    verificationAuthorization
}